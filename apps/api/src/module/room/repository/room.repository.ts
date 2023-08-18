import type { Room } from '@/module/room/domain/room.model';

export interface RoomRepositoryInterface {
  find(roomId: Room['id']): Promise<Room | null>;
  findMany(roomIds: Room['id'][]): Promise<Room[]>;
  create(): Promise<Room>;
  update(roomId: Room['id'], room: Partial<Omit<Room, 'id' | 'isWanted'>>): Promise<Room>;
  delete(roomId: Room['id']): Promise<Room>;
}
