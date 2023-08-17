import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserObject } from './dto/object/user-object';
import { RoomObject } from '@/module/room/controller/dto/object/room-object';
import { RoomDataLoader } from '@/module/room/dataloader/room.dataloader';
import type { Room } from '@/module/room/domain/room.model';
import { User } from '@/module/user/domain/user.model';

@Resolver(() => UserObject)
export class UserResolver {
  constructor(private readonly roomDataLoader: RoomDataLoader) {}

  @ResolveField(() => RoomObject)
  async joiningRoom(@Parent() user: User): Promise<Room> {
    const room = await this.roomDataLoader.load(user.joiningRoomId);

    return room;
  }
}
