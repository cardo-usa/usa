import { useDroppable } from '@dnd-kit/core';
import { tv, cn } from '@usa/tailwind';
import type { FC } from 'react';
import { DragCard } from '@/module/room/ui/components/dnd/drag-card';
import type { CardDataType } from '@/state/card-setting';
import { type DragCardDataType } from '@/state/dnd-setting/dnd-setting.type';

type Props = {
  cards: CardDataType[];
  isMyTarn: boolean;
};

const variants = tv({
  variants: {
    cardSpace: {
      0: '-space-x-0',
      1: '-space-x-20',
      2: '-space-x-32',
      3: '-space-x-36',
    },
    border: {
      true: 'outline outline-2 outline-tomato-7',
      false: '',
    },
  },
});

const Hand: FC<Props> = ({ cards, isMyTarn }) => {
  const { isOver, active, setNodeRef } = useDroppable({
    id: 'hand',
  });

  const activeData = active?.data.current as DragCardDataType | undefined;

  let cardNum: 0 | 1 | 2 | 3;

  switch (Math.trunc(cards.length / 4)) {
    case 0:
      cardNum = 0;
      break;
    case 1:
      cardNum = 1;
      break;
    case 2:
      cardNum = 2;
      break;
    default:
      cardNum = 3;
      break;
  }

  return (
    <div
      className={cn(
        'flex h-64 w-[80vw] touch-none justify-center overflow-hidden rounded-t-xl pt-8',
        variants({ cardSpace: cardNum, border: isOver && activeData?.isDeck === true }),
      )}
      ref={setNodeRef}
    >
      {cards.map((card) => (
        <DragCard data={{ isDeck: false, ...card }} disabled={!isMyTarn} key={card.id} />
      ))}
    </div>
  );
};

export { Hand };
