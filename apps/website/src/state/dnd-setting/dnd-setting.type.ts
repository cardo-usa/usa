import type { CardDataType } from '@/state/card-setting';

type DragCardDataType =
  | {
      isDeck: true;
    }
  | ({
      isDeck: false;
    } & CardDataType);

export type { DragCardDataType };
