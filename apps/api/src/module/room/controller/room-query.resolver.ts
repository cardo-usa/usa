import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './dto/input/room-where-unique.input';
import { RoomObject } from './dto/object/room.object';
import { InjectionToken } from '@/common/constant/injection-token';
import type { Room } from '@/module/room/domain/room.model';
import { RoomUseCaseInterface } from '@/module/room/use-case/room.use-case';
import { UserObject } from '@/module/user/controller/dto/object/user.object';
import type { User } from '@/module/user/domain/user.model';

@Resolver()
export class RoomQuery {
  private readonly logger = new Logger(RoomQuery.name);

  constructor(
    @Inject(InjectionToken.ROOM_USE_CASE)
    private readonly roomUseCase: RoomUseCaseInterface,
  ) {}

  @Query(() => RoomObject, { nullable: false })
  async findRoom(
    @Args('where', { type: () => RoomWhereUniqueInput })
    where: RoomWhereUniqueInput,
  ): Promise<Room | null> {
    this.logger.log(`${this.findRoom.name} called`);

    const foundRoom = await this.roomUseCase.findRoom(where.id);

    return foundRoom;
  }

  @Query(() => Boolean, { nullable: false })
  async verifyCanJoinRoom(
    @Args('where', { type: () => RoomWhereUniqueInput })
    where: RoomWhereUniqueInput,
  ): Promise<boolean> {
    this.logger.log(`${this.verifyCanJoinRoom.name} called`);

    const canJoinRoom = await this.roomUseCase.verifyCanJoinRoom(where.id);

    return canJoinRoom;
  }

  @Query(() => [UserObject], { nullable: false })
  async getResult(
    @Args('where', { type: () => RoomWhereUniqueInput })
    where: RoomWhereUniqueInput,
  ): Promise<User[]> {
    this.logger.log(`${this.getResult.name} called`);

    const result = await this.roomUseCase.getResult(where.id);

    return result;
  }
}
