import { Inject, Injectable } from '@nestjs/common';
import { initialCards } from '@/common/constant/initial-cards';
import { InjectionToken } from '@/common/constant/injection-token';
import { shuffleCards } from '@/common/model/card.model';
import { DataLoaderCacheService } from '@/common/service/cache/data-loader-cache.service';
import { RoomDataLoader } from '@/module/room/dataloader/room.dataloader';
import type { Room } from '@/module/room/domain/room.model';
import { RoomRepositoryInterface } from '@/module/room/repository/room.repository';
import type { RoomUseCaseInterface } from '@/module/room/use-case/room.use-case';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';
import { UserRepositoryInterface } from '@/module/user/repository/user.repository';

@Injectable()
export class RoomUseCase implements RoomUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.ROOM_REPOSITORY)
    private readonly roomRepository: RoomRepositoryInterface,
    private readonly roomDataLoader: RoomDataLoader,
    private readonly dataLoaderCacheService: DataLoaderCacheService<Room, string>,
  ) {}

  async findRoom(roomId: Room['id']): Promise<Room | null> {
    const foundRoom = await this.roomRepository.find(roomId);

    if (foundRoom !== null) {
      this.dataLoaderCacheService.prime(this.roomDataLoader, foundRoom);
    }

    return foundRoom;
  }

  async createRoom(userAccountSetting: UserAccountSetting): Promise<[Room, User]> {
    const createdRoom = await this.roomRepository.create();

    const createdUser = await this.userRepository.create({
      ...userAccountSetting,
      role: 'GAME_MASTER',
      joiningRoomId: createdRoom.id,
    });

    this.dataLoaderCacheService.prime(this.roomDataLoader, createdRoom);

    return [createdRoom, createdUser];
  }

  async updateRoomGameState(roomId: Room['id'], gameState: Room['gameState']): Promise<Room> {
    const updatedRoom = await this.roomRepository.update(roomId, { gameState });

    this.dataLoaderCacheService.prime(this.roomDataLoader, updatedRoom);

    return updatedRoom;
  }

  async verifyCanJoinRoom(roomId: Room['id']): Promise<boolean> {
    const foundRoom = await this.roomRepository.find(roomId);

    if (foundRoom !== null) {
      this.dataLoaderCacheService.prime(this.roomDataLoader, foundRoom);
    }

    const canJoinRoom = foundRoom?.isWanted ?? false;

    return canJoinRoom;
  }

  async initializeGame(roomId: Room['id']): Promise<Room | null> {
    const foundRoom = await this.roomRepository.find(roomId);
    if (foundRoom?.gameState !== 'READY') {
      throw new Error('Room is not ready to start the game');
    }

    const shuffledCards = shuffleCards(initialCards);
    const attenders = await this.userRepository.findManyByRoomId(roomId);
    const mappedDealtCards = attenders.map(() => shuffledCards.splice(0, 7));

    await Promise.all(
      attenders.map(async (attender, index) => {
        await this.userRepository.update(attender.id, {
          handCards: mappedDealtCards[index],
        });
      }),
    );

    const fieldCard = shuffledCards.shift();
    if (fieldCard === undefined) {
      throw new Error('fieldCard is undefined');
    }

    const deckCards = shuffledCards;

    const updatedRoom = await this.roomRepository.update(roomId, {
      gameState: 'IN_GAME',
      deckCards,
      fieldCards: [fieldCard],
    });

    const orderedUsers = await this.userRepository.findManyByRoomIdOrderedByJoinedAt(roomId);

    await Promise.all(
      orderedUsers.map(async (user, index) => {
        await this.userRepository.update(user.id, {
          isMyTurn: index === 0,
        });
      }),
    );

    return updatedRoom;
  }

  async getResult(roomId: Room['id']): Promise<User[]> {
    const foundUsers = await this.userRepository.findManyOrderedByFinishedAt(roomId);

    return foundUsers;
  }
}
