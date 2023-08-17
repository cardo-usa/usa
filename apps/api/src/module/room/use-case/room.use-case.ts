import type { Room } from '@/module/room/domain/room.model';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';

export interface RoomUseCaseInterface {
  verifyCanJoinRoom(roomId: string): Promise<boolean>;
  createRoom(userAccountSetting: UserAccountSetting): Promise<[Room, User]>;
}
