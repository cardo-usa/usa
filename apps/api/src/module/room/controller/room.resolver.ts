import { Inject } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { RoomObject } from './dto/object/room.object';
import { InjectionToken } from '@/common/constant/injection-token';
import { Room } from '@/module/room/domain/room.model';
import { UserObject } from '@/module/user/controller/dto/object/user.object';
import type { User } from '@/module/user/domain/user.model';
import { UserRepositoryInterface } from '@/module/user/repository/user.repository';

@Resolver(() => RoomObject)
export class RoomResolver {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  @ResolveField(() => [UserObject])
  async attenders(@Parent() room: Room): Promise<User[]> {
    const attenders = await this.userRepository.findManyByRoomId(room.id);

    return attenders;
  }
}
