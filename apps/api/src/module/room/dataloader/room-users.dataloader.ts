import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token';
import { BaseDataLoader } from '@/common/service/cache/base.dataloader';
import type { Room } from '@/module/room/domain/room.model';
import type { User } from '@/module/user/domain/user.model';
import { UserRepositoryInterface } from '@/module/user/repository/user.repository';

@Injectable({ scope: Scope.REQUEST })
export class RoomUsersDataLoader extends BaseDataLoader<User['id'], User[]> {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {
    super();
  }

  public readonly name: string = this.name;

  protected async batchLoad(roomIds: Room['id'][]): Promise<(User[] | Error)[]> {
    const users = await this.userRepository.findManyByRoomIds(roomIds);

    const mappedUsersList = roomIds.map((roomId) => {
      const mappedUsers = users.filter((user) => user.joiningRoomId === roomId);
      if (mappedUsers.length === 0) {
        return new Error(`Cannot find User with joiningRoomId ${roomId}.`);
      }

      return mappedUsers;
    });

    return mappedUsersList;
  }
}
