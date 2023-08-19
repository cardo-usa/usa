import { CardBack } from '#core/component/card/card-back';
import { useDraggable } from '@dnd-kit/core';
import type { FC } from 'react';

type Props = {
  deckNum: number;
  isMyTarn: boolean;
};

const Deck: FC<Props> = ({ deckNum, isMyTarn }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: 'deck',
    data: {
      isDeck: true,
    },
    disabled: !isMyTarn,
  });

  return (
    <div className="relative h-72 w-48">
      {deckNum > 1 && (
        <div className="absolute left-0 top-0 -z-10">
          <CardBack className="h-72 w-48" />
        </div>
      )}
      {deckNum > 0 && (
        <div ref={setNodeRef} className="h-72 w-48 transition hover:scale-110">
          {!isDragging && (
            <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
              <CardBack className="h-72 w-48" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Deck };
