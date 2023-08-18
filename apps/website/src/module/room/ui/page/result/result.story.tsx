import type { Meta, StoryObj } from '@storybook/react';
import { Result } from './result.presenter';

type Story = StoryObj<typeof Result>;

const meta: Meta<typeof Result> = {
  component: Result,
};

export default meta;

export const Default: Story = {
  args: {
    resultData: [
      {
        iconEmoji: '🐶',
        iconBackgroundColor: 'tomato',
        name: 'shio',
        rank: 1,
      },
      {
        iconEmoji: '🐱',
        iconBackgroundColor: 'violet',
        name: 'koutyuke',
        rank: 2,
      },
      {
        iconEmoji: '🐭',
        iconBackgroundColor: 'indigo',
        name: 'reo',
        rank: 5,
      },
      {
        iconEmoji: '🐹',
        iconBackgroundColor: 'cyan',
        name: 'nuko',
        rank: 4,
      },
      {
        iconEmoji: '🐰',
        iconBackgroundColor: 'green',
        name: 'mimi',
        rank: 3,
      },
    ],
    closeButtonEvent: () => {},
  },
};
