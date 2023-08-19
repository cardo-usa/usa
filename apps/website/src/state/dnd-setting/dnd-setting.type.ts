import type { CardDataType } from '@/state/card-setting';

type DragCardDataType =
  | {
      isDeck: true;
    }
  | ({
      isDeck: false;
    } & CardDataType);

type DropAreaDataType = {
  id: string;
};

export type { DragCardDataType, DropAreaDataType };
