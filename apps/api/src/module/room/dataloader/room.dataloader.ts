import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseDataLoader } from '@/cache/base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token';
import type { Room } from '@/module/room/domain/room.model';
import { RoomRepositoryInterface } from '@/module/room/repository/room.repository';

@Injectable({ scope: Scope.REQUEST })
export class RoomDataLoader extends BaseDataLoader<Room['id'], Room> {
  public readonly name: string = this.name;

  constructor(
    @Inject(InjectionToken.ROOM_REPOSITORY)
    private readonly roomRepository: RoomRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(roomIds: Room['id'][]): Promise<(Room | Error)[]> {
    const rooms = await this.roomRepository.findMany(roomIds);

    const mappedRooms = roomIds.map((roomId) => {
      const room = rooms.find((r) => r.id === roomId);

      return room || new Error(`Cannot find Room with id ${roomId}.`);
    });

    return mappedRooms;
  }
}
