import { type DropAnimation, useDndContext, DragOverlay } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { OverlayContents } from './overlay.presenter';

const DndOverlay = () => {
  const { active } = useDndContext();

  const dropAnimationConfig: DropAnimation = {
    keyframes({ transform }) {
      return [{ transform: CSS.Transform.toString(transform.initial) }, { transform: CSS.Transform.toString(transform.final) }];
    },
  };

  return (
    <DragOverlay dropAnimation={dropAnimationConfig}>
      <OverlayContents active={active} />
    </DragOverlay>
  );
};

export { DndOverlay };
