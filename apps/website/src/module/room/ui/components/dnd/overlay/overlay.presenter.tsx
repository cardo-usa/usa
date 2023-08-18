import type { Active } from '@dnd-kit/core';
import { CardBack } from '@usa/core/component/card/card-back';
import { DrawCard } from '@usa/core/component/card/draw-card';
import { NumberCard } from '@usa/core/component/card/number-card';
import { ReverseCard } from '@usa/core/component/card/reverse-card';
import { SkipCard } from '@usa/core/component/card/skip-card';
import { WildCard } from '@usa/core/component/card/wild-card';
import type { FC } from 'react';
import { type DragCardDataType } from '@/state/dnd-setting/dnd-setting.type';

type Props = {
  active: Active | null;
};

const OverlayContents: FC<Props> = ({ active }) => {
  const dragData = active?.data.current as DragCardDataType | undefined;

  if (dragData === undefined) {
    return null;
  }

  if (dragData.isDeck) {
    return <CardBack className="h-72 w-48 cursor-grabbing" />;
  }

  switch (dragData.type) {
    case 'number':
      return <NumberCard color={dragData.color} number={dragData.value} className="h-72 w-48 cursor-grabbing " />;
    case 'skip':
      return <SkipCard color={dragData.color} className="h-72 w-48 cursor-grabbing " />;
    case 'reverse':
      return <ReverseCard color={dragData.color} className="h-72 w-48 cursor-grabbing " />;
    case 'draw':
      return <DrawCard color={dragData.color} className="h-72 w-48 cursor-grabbing " />;
    case 'wild':
      return <WildCard color={dragData.color} className="h-72 w-48 cursor-grabbing " />;
    default:
      return null;
  }
};

export { OverlayContents };
