import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { DrawCard } from './draw-card.presenter';

type Story = StoryObj<typeof DrawCard>;

const meta: Meta<typeof DrawCard> = {
  component: DrawCard,
  argTypes: {
    color: {
      description: 'Color',
      control: {
        type: 'select',
      },
      options: ['blue', 'red', 'green', 'yellow', 'any'] satisfies ComponentPropsWithoutRef<typeof DrawCard>['color'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    color: 'blue',
  },
};
