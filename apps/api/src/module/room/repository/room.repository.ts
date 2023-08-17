import type { Room } from '@/module/room/domain/room.model';

export interface RoomRepositoryInterface {
  find(roomId: string): Promise<Room | null>;
}
