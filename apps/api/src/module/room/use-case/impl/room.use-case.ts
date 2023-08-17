import { Inject, Injectable } from '@nestjs/common';
import { DataLoaderCacheService } from '@/cache/data-loader-cache.service';
import { InjectionToken } from '@/common/constant/injection-token';
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

  async verifyCanJoinRoom(roomId: string): Promise<boolean> {
    const foundRoom = await this.roomRepository.find(roomId);

    if (foundRoom !== null) {
      this.dataLoaderCacheService.prime(this.roomDataLoader, foundRoom);
    }

    const canJoinRoom = foundRoom?.isWanted ?? false;

    return canJoinRoom;
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
}
