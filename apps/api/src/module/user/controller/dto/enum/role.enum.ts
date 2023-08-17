import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum RoleEnum {
  GAME_MASTER = 'GAME_MASTER',
  GENERAL = 'GENERAL',
}

registerEnumType(RoleEnum, { name: 'Role' });
