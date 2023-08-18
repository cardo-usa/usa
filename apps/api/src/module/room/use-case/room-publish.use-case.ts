import type { PubSubService } from '@/common/service/pubsub/pubsub.service';
import type { Room } from '@/module/room/domain/room.model';

export interface RoomPublishUseCaseInterface {
  publishUpdatedRoom(roomId: Room['id'], publish: (room: Room) => Parameters<PubSubService['publish']>['1']): Promise<Room>;
}
