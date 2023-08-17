import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum GameStateEnum {
  IN_GAME = 'IN_GAME',
  FINISHED = 'FINISHED',
}

registerEnumType(GameStateEnum, { name: 'GameState' });
