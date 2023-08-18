import { Inject, Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserAccountSettingInput } from './dto/input/user-account-setting.input';
import { UserObject } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token';
import { RoomWhereUniqueInput } from '@/module/room/controller/dto/input/room-where-unique.input';
import { RoomPublishUseCaseInterface } from '@/module/room/use-case/room-publish.use-case';
import type { User } from '@/module/user/domain/user.model';
import { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Resolver()
export class UserMutation {
  private readonly logger = new Logger(UserMutation.name);

  constructor(
    @Inject(InjectionToken.USER_USE_CASE)
    private readonly userUseCase: UserUseCaseInterface,
    @Inject(InjectionToken.ROOM_PUBLISH_USE_CASE)
    private readonly roomPublishUseCase: RoomPublishUseCaseInterface,
  ) {}

  @Mutation(() => UserObject)
  async joinRoom(
    @Args('where', { type: () => RoomWhereUniqueInput })
    where: RoomWhereUniqueInput,
    @Args('data', { type: () => UserAccountSettingInput })
    accountSetting: UserAccountSettingInput,
  ): Promise<User> {
    this.logger.log(`${this.joinRoom.name} called`);

    const createdUser = await this.userUseCase.joinRoom(accountSetting, where.id);
    if (createdUser === null) {
      throw new Error(`Cannnot find Room with id ${where.id}.`);
    }

    await this.roomPublishUseCase.publishUpdatedRoom(where.id, (room) => ({ updatedRoom: room }));

    return createdUser;
  }
}
