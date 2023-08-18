import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { ReverseCard } from './reverse-card.presenter';

type Story = StoryObj<typeof ReverseCard>;

const meta: Meta<typeof ReverseCard> = {
  component: ReverseCard,
  argTypes: {
    color: {
      description: 'Color',
      control: {
        type: 'select',
      },
      options: ['blue', 'red', 'green', 'yellow', 'any'] as ComponentPropsWithoutRef<typeof ReverseCard>['color'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    color: 'blue',
  },
};
