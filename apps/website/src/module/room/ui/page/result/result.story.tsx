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
      {
        iconEmoji: '🐹',
        iconBackgroundColor: 'cyan',
        name: 'nuko',
      },
      {
        iconEmoji: '🐰',
        iconBackgroundColor: 'green',
        name: 'mimi',
      },
    ],
    closeButtonEvent: () => {},
  },
};
