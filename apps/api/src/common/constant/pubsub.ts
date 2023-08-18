import type { Room } from '@/module/room/domain/room.model';

// eslint-disable-next-line no-shadow
enum PubSubTrigger {
  UPDATED_ROOM = 'UPDATED_ROOM',
}

export const generateUpdatedRoomTrigger = (roomId: Room['id']): string => `${PubSubTrigger.UPDATED_ROOM}_${roomId}`;
