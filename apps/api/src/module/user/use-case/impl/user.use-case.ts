import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token';
import type { Room } from '@/module/room/domain/room.model';
import { RoomRepositoryInterface } from '@/module/room/repository/room.repository';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';
import { UserRepositoryInterface } from '@/module/user/repository/user.repository';
import type { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Injectable()
export class UserUseCase implements UserUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ROOM_REPOSITORY)
    private readonly roomRepository: RoomRepositoryInterface,
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async find(userId: User['id']): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);

    return foundUser;
  }

  async joinRoom(userAccountSetting: UserAccountSetting, roomId: Room['id']): Promise<User | null> {
    const foundRoom = await this.roomRepository.find(roomId);
    if (foundRoom === null) {
      return null;
    }

    const createdUser = this.userRepository.create({
      ...userAccountSetting,
      role: 'GENERAL',
      joiningRoomId: roomId,
    });

    return createdUser;
  }

  async drawCardFromDeckCards(userId: User['id'], n: number): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);
    if (foundUser === null) {
      return null;
    }

    const foundRoom = await this.roomRepository.find(foundUser.joiningRoomId);
    if (foundRoom === null || foundUser.handCards === null) {
      throw new Error(`Cannnot find Room with userId ${foundUser.id}.`);
    }

    const drawCard = foundRoom.deckCards.slice(0, n);
    if (drawCard === undefined) {
      throw new Error('No card in deck card');
    }

    const updatedUser = await this.userRepository.update(userId, {
      handCards: [...foundUser.handCards, ...drawCard],
    });

    await this.roomRepository.update(foundRoom.id, {
      deckCards: foundRoom.deckCards.slice(n),
    });

    return updatedUser;
  }
}
