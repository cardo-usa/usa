import { type CardType, type CardColor } from '@/state/card-setting';
import { CardColor as ServerCordColor, CardType as ServerCardType, IconBackgroundColor } from '#/src/infra/graphql/generated/graphql';
import { type AccountSetting } from '#/src/model/account-setting';

const C2SBackgroundColor = {
  amber: IconBackgroundColor.Amber,
  brown: IconBackgroundColor.Brown,
  cyan: IconBackgroundColor.Cyan,
  green: IconBackgroundColor.Green,
  indigo: IconBackgroundColor.Indigo,
  orange: IconBackgroundColor.Orange,
  tomato: IconBackgroundColor.Tomato,
  violet: IconBackgroundColor.Violet,
} as const satisfies Record<AccountSetting['iconBackgroundColor'], string>;

const C2SCardColor = {
  red: ServerCordColor.Red,
  blue: ServerCordColor.Blue,
  green: ServerCordColor.Green,
  yellow: ServerCordColor.Yellow,
  any: ServerCordColor.Any,
} as const satisfies Record<CardColor, ServerCordColor>;

const C2SCardType = {
  number: ServerCardType.Number,
  skip: ServerCardType.Skip,
  reverse: ServerCardType.Reverse,
  draw: ServerCardType.Draw,
  wild: ServerCardType.Wild,
} as const satisfies Record<CardType, ServerCardType>;

export { C2SBackgroundColor, C2SCardColor, C2SCardType };
