import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum RoomGameStateEnum {
  WANTED = 'WANTED',
  READY = 'READY',
  IN_GAME = 'IN_GAME',
  FINISHED = 'FINISHED',
}

registerEnumType(RoomGameStateEnum, { name: 'RoomGameState' });
