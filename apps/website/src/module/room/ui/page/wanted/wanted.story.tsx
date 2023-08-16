import type { Meta, StoryObj } from '@storybook/react';
import { Wanted } from './wanted.presenter';

type Story = StoryObj<typeof Wanted>;

const meta: Meta<typeof Wanted> = {
  component: Wanted,
  argTypes: {
    isGameMaster: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    isGameMaster: false,
    members: [
      {
        iconEmoji: '🐶',
        iconBackgroundColor: 'tomato',
        name: 'shio',
      },
      {
        iconEmoji: '🐱',
        iconBackgroundColor: 'violet',
        name: 'koutyuke',
      },
      {
        iconEmoji: '🐭',
        iconBackgroundColor: 'indigo',
        name: 'reo',
      },
    ],
    roomId: '123456',
  },
};
