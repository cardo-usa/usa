import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum IconBackgroundColorEnum {
  TOMATO = 'TOMATO',
  VIOLET = 'VIOLET',
  INDIGO = 'INDIGO',
  CYAN = 'CYAN',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  BROWN = 'BROWN',
  AMBER = 'AMBER',
}

registerEnumType(IconBackgroundColorEnum, { name: 'IconBackgroundColor' });
