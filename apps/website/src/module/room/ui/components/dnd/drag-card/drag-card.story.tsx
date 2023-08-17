import type { Meta, StoryObj } from '@storybook/react';
import { DragCard } from './drag-card.presenter';

type Story = StoryObj<typeof DragCard>;

const meta: Meta<typeof DragCard> = {
  component: DragCard,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    data: {
      isDeck: false,
      id: '1',
      color: 'red',
      type: 'number',
      value: 1,
    },
    disabled: false,
  },
};
