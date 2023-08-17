import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './dto/input/room-where-unique.input';
import { InjectionToken } from '@/common/constant/injection-token';
import { RoomUseCaseInterface } from '@/module/room/use-case/room.use-case';

@Resolver()
export class RoomQuery {
  private readonly logger = new Logger(RoomQuery.name);

  constructor(
    @Inject(InjectionToken.ROOM_USE_CASE)
    private readonly roomUseCase: RoomUseCaseInterface,
  ) {}

  @Query(() => Boolean, { nullable: false })
  async verifyCanJoinRoom(
    @Args('where', { type: () => RoomWhereUniqueInput })
    where: RoomWhereUniqueInput,
  ): Promise<boolean> {
    this.logger.log(`${this.verifyCanJoinRoom.name} called`);

    const canJoinRoom = await this.roomUseCase.verifyCanJoinRoom(where.id);

    return canJoinRoom;
  }
}
