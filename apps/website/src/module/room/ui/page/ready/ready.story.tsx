import type { Meta, StoryObj } from '@storybook/react';
import { Ready } from './ready.presenter';

type Story = StoryObj<typeof Ready>;

const meta: Meta<typeof Ready> = {
  component: Ready,
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
  },
};
