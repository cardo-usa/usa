import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token';
import { generateUpdatedRoomAttendersTrigger } from '@/common/constant/pubsub';
import { PubSubService } from '@/common/service/pubsub/pubsub.service';
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
    private readonly pubSubService: PubSubService,
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

  async publishUpdatedRoomAttenders(
    roomId: Room['id'],
    publish: (roomAttenders: User[]) => Parameters<PubSubService['publish']>['1'],
  ): Promise<User[]> {
    const foundRoomAttenders = await this.userRepository.findManyByRoomId(roomId);

    await this.pubSubService.publish(generateUpdatedRoomAttendersTrigger(roomId), publish(foundRoomAttenders));

    return foundRoomAttenders;
  }
}
