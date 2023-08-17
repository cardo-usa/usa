import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { UserObject } from './dto/object/user.object';
import { generateUpdatedRoomAttendersTrigger } from '@/common/constant/pubsub';
import { PubSubService } from '@/common/service/pubsub/pubsub.service';
import { RoomWhereUniqueInput } from '@/module/room/controller/dto/input/room-where-unique.input';
import type { User } from '@/module/user/domain/user.model';

@Resolver()
export class UserSubscription {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => [UserObject])
  async updatedRoomAttenders(@Args('where', { type: () => RoomWhereUniqueInput }) where: RoomWhereUniqueInput): Promise<AsyncIterator<User[]>> {
    return this.pubSubService.asyncIterator(generateUpdatedRoomAttendersTrigger(where.id));
  }
}
