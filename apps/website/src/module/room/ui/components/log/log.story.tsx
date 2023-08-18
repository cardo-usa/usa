import type { Meta, StoryObj } from '@storybook/react';
import { Log } from './log.presenter';

type Story = StoryObj<typeof Log>;

const meta: Meta<typeof Log> = {
  component: Log,
};

export default meta;

export const Default: Story = {
  args: {
    logData: [
      {
        type: 'number',
        name: 'player1',
        color: 'red',
        value: 1,
      },
      {
        type: 'number',
        name: 'player2',
        color: 'blue',
        value: 2,
      },
      {
        type: 'skip',
        name: 'player3',
        color: 'green',
      },
      {
        type: 'reverse',
        name: 'player4',
        color: 'yellow',
      },
      {
        type: 'draw',
        name: 'player5',
        color: 'red',
      },
      {
        type: 'wild',
        name: 'player6',
        color: 'any',
      },
    ],
  },
};
