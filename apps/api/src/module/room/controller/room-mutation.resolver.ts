import { Inject, Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RoomUpdateGameStateInput } from './dto/input/room-update-game-state.input';
import { RoomWhereUniqueInput } from './dto/input/room-where-unique.input';
import { RoomObject } from './dto/object/room.object';
import { InjectionToken } from '@/common/constant/injection-token';
import type { Room } from '@/module/room/domain/room.model';
import { RoomPublishUseCaseInterface } from '@/module/room/use-case/room-publish.use-case';
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
    @Inject(InjectionToken.ROOM_PUBLISH_USE_CASE)
    private readonly roomPublishUseCase: RoomPublishUseCaseInterface,
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

  @Mutation(() => RoomObject)
  async updateRoomGameState(
    @Args('where', { type: () => RoomWhereUniqueInput }) where: RoomWhereUniqueInput,
    @Args('data', { type: () => RoomUpdateGameStateInput }) data: RoomUpdateGameStateInput,
  ): Promise<Room> {
    this.logger.log(`${this.updateRoomGameState.name} called`);

    const updatedRoom = await this.roomUseCase.updateRoomGameState(where.id, data.gameState);

    await this.roomPublishUseCase.publishUpdatedRoom(updatedRoom.id, (room) => ({ updatedRoom: room }));

    return updatedRoom;
  }
}
