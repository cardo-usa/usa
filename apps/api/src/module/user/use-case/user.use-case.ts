import type { Room } from '@/module/room/domain/room.model';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';

export interface UserUseCaseInterface {
  find(userId: User['id']): Promise<User | null>;
  updateAccountSetting(userId: User['id'], userAccountSetting: Partial<UserAccountSetting>): Promise<User | null>;
  joinRoom(userAccountSetting: UserAccountSetting, roomId: Room['id']): Promise<User | null>;
}
