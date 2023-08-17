import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum CardColorEnum {
  RED = 'RED',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  ANY = 'ANY',
}

registerEnumType(CardColorEnum, { name: 'CardColor' });
