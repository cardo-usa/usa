import type { Room } from '@/module/room/domain/room.model';

// eslint-disable-next-line no-shadow
export enum PubSubTrigger {
  UPDATED_ROOM_ATTENDERS = 'UPDATED_ROOM_ATTENDERS',
}

export const generateUpdatedRoomAttendersTrigger = (roomId: Room['id']): string => `${PubSubTrigger.UPDATED_ROOM_ATTENDERS}_${roomId}`;
