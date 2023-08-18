import type { Meta, StoryObj } from '@storybook/react';
import { PlayerList } from './player-list.presenter';

type Story = StoryObj<typeof PlayerList>;

const meta: Meta<typeof PlayerList> = {
  component: PlayerList,
};

export default meta;

export const Default: Story = {
  args: {
    playerList: [
      {
        name: 'player1',
        id: '1',
        isTurn: true,
        iconEmoji: '🐶',
        iconBackgroundColor: 'tomato',
        handCount: 7,
      },
      {
        name: 'player2',
        id: '2',
        isTurn: false,
        iconEmoji: '🐱',
        iconBackgroundColor: 'cyan',
        handCount: 1,
      },
      {
        name: 'player3',
        id: '3',
        isTurn: false,
        iconEmoji: '🐭',
        iconBackgroundColor: 'green',
        handCount: 7,
      },
    ],
  },
};
