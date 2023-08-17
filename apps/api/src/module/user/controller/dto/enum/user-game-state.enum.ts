import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum UserGameStateEnum {
  IN_GAME = 'IN_GAME',
  FINISHED = 'FINISHED',
}

registerEnumType(UserGameStateEnum, { name: 'UserGameState' });
