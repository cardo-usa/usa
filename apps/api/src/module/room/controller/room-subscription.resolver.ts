import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { RoomObject } from './dto/object/room.object';
import { generateUpdatedRoomTrigger } from '@/common/constant/pubsub';
import { PubSubService } from '@/common/service/pubsub/pubsub.service';
import { RoomWhereUniqueInput } from '@/module/room/controller/dto/input/room-where-unique.input';
import type { Room } from '@/module/room/domain/room.model';

@Resolver()
export class RoomSubscription {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => RoomObject)
  async updatedRoom(@Args('where', { type: () => RoomWhereUniqueInput }) where: RoomWhereUniqueInput): Promise<AsyncIterator<Room>> {
    return this.pubSubService.asyncIterator(generateUpdatedRoomTrigger(where.id));
  }
}
