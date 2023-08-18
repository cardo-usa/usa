import type { PubSubService } from '@/common/service/pubsub/pubsub.service';
import type { Room } from '@/module/room/domain/room.model';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';

export interface UserUseCaseInterface {
  find(userId: User['id']): Promise<User | null>;
  joinRoom(userAccountSetting: UserAccountSetting, roomId: Room['id']): Promise<User | null>;
  publishUpdatedRoomAttenders(roomId: Room['id'], publish: (roomAttenders: User[]) => Parameters<PubSubService['publish']>['1']): Promise<User[]>;
}
