import { DrawCard } from '#core/component/card/draw-card';
import { NumberCard } from '#core/component/card/number-card';
import { ReverseCard } from '#core/component/card/reverse-card';
import { SkipCard } from '#core/component/card/skip-card';
import { WildCard } from '#core/component/card/wild-card';
import { useDroppable } from '@dnd-kit/core';
import { tv, cn } from '@usa/tailwind';
import type { FC } from 'react';
import type { CardDataType } from '@/state/card-setting';
import type { DragCardDataType } from '@/state/dnd-setting/dnd-setting.type';

type Props = {
  cards: CardDataType[];
};

const variants = tv({
  variants: {
    outline: {
      true: 'outline outline-2 outline-tomato-7',
      false: '',
    },
  },
});

const TableCards: FC<Props> = ({ cards }) => {
  const { isOver, active, setNodeRef } = useDroppable({
    id: 'table',
  });

  const activeData = active?.data.current as DragCardDataType | undefined;

  return (
    <div
      className={cn(
        'relative flex h-[24rem] w-[20rem] items-center justify-center space-x-[-12rem] rounded-xl',
        variants({ outline: isOver && activeData?.isDeck === false }),
      )}
      ref={setNodeRef}
    >
      {cards.map((card) => (
        <>
          {card.type === 'number' && <NumberCard color={card.color} number={card.value} className="h-72 w-48" key={card.id} />}
          {card.type === 'skip' && <SkipCard color={card.color} key={card.id} className="h-72 w-48" />}
          {card.type === 'reverse' && <ReverseCard color={card.color} key={card.id} className="h-72 w-48" />}
          {card.type === 'draw' && <DrawCard color={card.color} key={card.id} className="h-72 w-48" />}
          {card.type === 'wild' && <WildCard color={card.color} key={card.id} className="h-72 w-48" />}
        </>
      ))}
    </div>
  );
};

export { TableCards };
