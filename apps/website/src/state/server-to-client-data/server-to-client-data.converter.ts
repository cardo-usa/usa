import { type CardType, type CardColor } from '@/state/card-setting';
import type { CardColor as ServerCordColor, CardType as ServerCardType, IconBackgroundColor } from '#/src/infra/graphql/generated/graphql';

const S2CBackgroundColor = {
  AMBER: 'amber',
  BROWN: 'brown',
  CYAN: 'cyan',
  GREEN: 'green',
  INDIGO: 'indigo',
  ORANGE: 'orange',
  TOMATO: 'tomato',
  VIOLET: 'violet',
} as const satisfies Record<IconBackgroundColor, string>;

const S2CCardColor = {
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
  YELLOW: 'yellow',
  ANY: 'any',
} as const satisfies Record<ServerCordColor, CardColor>;

const S2CCardType = {
  NUMBER: 'number',
  SKIP: 'skip',
  REVERSE: 'reverse',
  DRAW: 'draw',
  WILD: 'wild',
} as const satisfies Record<ServerCardType, CardType>;

export { S2CBackgroundColor, S2CCardColor, S2CCardType };
