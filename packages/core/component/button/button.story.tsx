import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { Button } from './button.presenter';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    textColor: {
      description: 'Text color',
      control: {
        type: 'select',
      },
      options: ['tomato', 'black'] satisfies ComponentPropsWithoutRef<typeof Button>['textColor'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Button',
    textColor: 'tomato',
  },
};
