import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token';
import { generateUpdatedRoomTrigger } from '@/common/constant/pubsub';
import { DataLoaderCacheService } from '@/common/service/cache/data-loader-cache.service';
import { PubSubService } from '@/common/service/pubsub/pubsub.service';
import { RoomDataLoader } from '@/module/room/dataloader/room.dataloader';
import type { Room } from '@/module/room/domain/room.model';
import { RoomRepositoryInterface } from '@/module/room/repository/room.repository';
import { type RoomPublishUseCaseInterface } from '@/module/room/use-case/room-publish.use-case';

@Injectable()
export class RoomPublishUseCase implements RoomPublishUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ROOM_REPOSITORY)
    private readonly roomRepository: RoomRepositoryInterface,
    private readonly pubSubService: PubSubService,
    private readonly roomDataLoader: RoomDataLoader,
    private readonly dataLoaderCacheService: DataLoaderCacheService<Room, string>,
  ) {}

  async publishUpdatedRoom(roomId: Room['id'], publish: (room: Room) => Parameters<PubSubService['publish']>['1']): Promise<Room> {
    const updatedRoom = await this.roomRepository.find(roomId);
    if (updatedRoom === null) {
      throw new Error(`Cannot find Room with id ${roomId}.`);
    }

    this.dataLoaderCacheService.prime(this.roomDataLoader, updatedRoom);

    this.pubSubService.publish(generateUpdatedRoomTrigger(roomId), publish(updatedRoom));

    return updatedRoom;
  }
}
