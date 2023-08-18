import type { Room } from '@/module/room/domain/room.model';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';

export interface RoomUseCaseInterface {
  findRoom(roomId: Room['id']): Promise<Room | null>;
  createRoom(userAccountSetting: UserAccountSetting): Promise<[Room, User]>;
  updateRoomGameState(roomId: Room['id'], gameState: Room['gameState']): Promise<Room>;
  verifyCanJoinRoom(roomId: Room['id']): Promise<boolean>;
  initializeGame(roomId: Room['id']): Promise<Room | null>;
}
