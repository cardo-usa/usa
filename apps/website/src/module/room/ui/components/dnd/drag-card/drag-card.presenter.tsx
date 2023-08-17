import { CardBack } from '#core/component/card/card-back';
import { DrawCard } from '#core/component/card/draw-card';
import { NumberCard } from '#core/component/card/number-card';
import { ReverseCard } from '#core/component/card/reverse-card';
import { SkipCard } from '#core/component/card/skip-card';
import { WildCard } from '#core/component/card/wild-card';
import { useDraggable } from '@dnd-kit/core';
import type { ComponentPropsWithoutRef, FC } from 'react';
import type { DragCardDataType } from '@/state/dnd-setting/dnd-setting.type';

type Props = {
  data: DragCardDataType;
  disabled: boolean;
} & ComponentPropsWithoutRef<'div'>;

const DragCard: FC<Props> = ({ data, disabled, className, ...other }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: data.isDeck ? 'deck' : data.id,
    data,
    disabled,
  });

  if (data.isDeck) {
    return (
      <div ref={setNodeRef} className="h-72 w-48">
        {!isDragging && (
          <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
            <CardBack className="h-72 w-48" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={setNodeRef} className="h-72 w-48" {...other}>
      {data.type === 'number' && !isDragging && (
        <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
          <NumberCard color={data.color} number={data.value} key={data.id} className="h-72 w-48 transition hover:z-50 hover:scale-110" />
        </div>
      )}
      {data.type === 'skip' && !isDragging && (
        <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
          <SkipCard color={data.color} key={data.id} className="h-72 w-48 transition hover:z-50 hover:scale-110" />
        </div>
      )}
      {data.type === 'reverse' && !isDragging && (
        <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
          <ReverseCard color={data.color} key={data.id} className="h-72 w-48 transition hover:z-50 hover:scale-110" />
        </div>
      )}
      {data.type === 'draw' && !isDragging && (
        <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
          <DrawCard color={data.color} key={data.id} className="h-72 w-48 transition hover:z-50 hover:scale-110" />
        </div>
      )}
      {data.type === 'wild' && !isDragging && (
        <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
          <WildCard color={data.color} key={data.id} className="h-72 w-48 transition hover:z-50 hover:scale-110" />
        </div>
      )}
    </div>
  );
};

export { DragCard };
