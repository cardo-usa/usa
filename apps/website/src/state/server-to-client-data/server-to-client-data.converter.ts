import type { IconBackgroundColor } from '#/src/infra/graphql/generated/graphql';

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

export { S2CBackgroundColor };
