import { IconBackgroundColor } from '#/src/infra/graphql/generated/graphql';
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

export { C2SBackgroundColor };
