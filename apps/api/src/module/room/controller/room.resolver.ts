import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { RoomObject } from './dto/object/room.object';
import { RoomUsersDataLoader } from '@/module/room/dataloader/room-users.dataloader';
import { Room } from '@/module/room/domain/room.model';
import { UserObject } from '@/module/user/controller/dto/object/user.object';
import type { User } from '@/module/user/domain/user.model';

@Resolver(() => RoomObject)
export class RoomResolver {
  constructor(private readonly roomUsersDataLoader: RoomUsersDataLoader) {}

  @ResolveField(() => [UserObject])
  async attenders(@Parent() room: Room): Promise<User[]> {
    const attenders = await this.roomUsersDataLoader.load(room.id);

    return attenders;
  }
}
