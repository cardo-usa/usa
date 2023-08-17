import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { WildCard } from './wild-card.presenter';

type Story = StoryObj<typeof WildCard>;

const meta: Meta<typeof WildCard> = {
  component: WildCard,
  argTypes: {
    color: {
      description: 'Color',
      control: {
        type: 'select',
      },
      options: ['blue', 'red', 'green', 'yellow', 'black'] satisfies ComponentPropsWithoutRef<typeof WildCard>['color'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    color: 'blue',
  },
};
