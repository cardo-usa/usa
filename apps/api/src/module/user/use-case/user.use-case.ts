import type { Room } from '@/module/room/domain/room.model';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';

export interface UserUseCaseInterface {
  findUser(userId: User['id']): Promise<User | null>;
  updateUserAccountSetting(userId: User['id'], userAccountSetting: Partial<UserAccountSetting>): Promise<User | null>;
  joinRoom(userAccountSetting: UserAccountSetting, roomId: Room['id']): Promise<User | null>;
}
