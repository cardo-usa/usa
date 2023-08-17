import { Inject, Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { InjectionToken } from '@/common/constant/injection-token';
import { RoomUseCaseInterface } from '@/module/room/use-case/room.use-case';
import { UserAccountSettingInput } from '@/module/user/controller/dto/input/user-account-setting.input';
import { UserObject } from '@/module/user/controller/dto/object/user.object';
import type { User } from '@/module/user/domain/user.model';

@Resolver()
export class RoomMutation {
  private readonly logger = new Logger(RoomMutation.name);

  constructor(
    @Inject(InjectionToken.ROOM_USE_CASE)
    private readonly roomUseCase: RoomUseCaseInterface,
  ) {}

  @Mutation(() => UserObject)
  async createRoom(
    @Args('accountSetting', { type: () => UserAccountSettingInput })
    accountSetting: UserAccountSettingInput,
  ): Promise<User> {
    this.logger.log(`${this.createRoom.name} called`);

    const [, createdUser] = await this.roomUseCase.createRoom(accountSetting);

    return createdUser;
  }
}
