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

  async findUser(userId: User['id']): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);

    return foundUser;
  }

  async updateUserAccountSetting(userId: User['id'], userAccountSetting: Partial<UserAccountSetting>): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);
    if (foundUser === null) {
      return null;
    }

    const updatedUser = this.userRepository.update(userId, {
      ...foundUser,
      ...userAccountSetting,
    });

    return updatedUser;
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
}
