import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { NumberCard } from './number-card.presenter';

type Story = StoryObj<typeof NumberCard>;

const meta: Meta<typeof NumberCard> = {
  component: NumberCard,
  argTypes: {
    number: {
      description: 'Number',
      control: {
        type: 'number',
      },
    },
    color: {
      description: 'Color',
      control: {
        type: 'select',
      },
      options: ['blue', 'red', 'green', 'yellow', 'any'] satisfies ComponentPropsWithoutRef<typeof NumberCard>['color'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    number: 0,
    color: 'blue',
  },
};
