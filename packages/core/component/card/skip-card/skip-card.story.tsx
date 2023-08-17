import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { SkipCard } from './skip-card.presenter';

type Story = StoryObj<typeof SkipCard>;

const meta: Meta<typeof SkipCard> = {
  component: SkipCard,
  argTypes: {
    color: {
      description: 'Color',
      control: {
        type: 'select',
      },
      options: ['blue', 'red', 'green', 'yellow'] as ComponentPropsWithoutRef<typeof SkipCard>['color'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    color: 'blue',
  },
};
