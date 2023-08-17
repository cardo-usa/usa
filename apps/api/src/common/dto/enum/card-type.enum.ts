import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum CardTypeEnum {
  NUMBER = 'NUMBER',
  SKIP = 'SKIP',
  REVERSE = 'REVERSE',
  DRAW = 'DRAW',
  WILD = 'WILD',
}

registerEnumType(CardTypeEnum, { name: 'CardType' });
