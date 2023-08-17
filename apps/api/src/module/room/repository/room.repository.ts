import type { Room } from '@/module/room/domain/room.model';

export interface RoomRepositoryInterface {
  find(roomId: Room['id']): Promise<Room | null>;
  findMany(roomIds: Room['id'][]): Promise<Room[]>;
  create(): Promise<Room>;
}
