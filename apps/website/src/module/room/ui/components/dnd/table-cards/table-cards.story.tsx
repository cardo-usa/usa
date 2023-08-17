import type { Meta, StoryObj } from '@storybook/react';
import { TableCards } from './table-cards.presenter';

type Story = StoryObj<typeof TableCards>;

const meta: Meta<typeof TableCards> = {
  component: TableCards,
};

export default meta;

export const Default: Story = {
  args: {
    cards: [
      {
        id: '1',
        type: 'number',
        color: 'red',
        value: 1,
      },
      {
        id: '2',
        type: 'number',
        color: 'blue',
        value: 2,
      },
      {
        id: '3',
        type: 'skip',
        color: 'green',
        value: null,
      },
      {
        id: '4',
        type: 'reverse',
        color: 'yellow',
        value: null,
      },
      {
        id: '5',
        type: 'draw',
        color: 'red',
        value: null,
      },
      {
        id: '6',
        type: 'number',
        color: 'red',
        value: 1,
      },
      {
        id: '7',
        type: 'number',
        color: 'blue',
        value: 2,
      },
      {
        id: '8',
        type: 'skip',
        color: 'green',
        value: null,
      },
      {
        id: '9',
        type: 'reverse',
        color: 'yellow',
        value: null,
      },
      {
        id: '10',
        type: 'draw',
        color: 'red',
        value: null,
      },
      {
        id: '11',
        type: 'skip',
        color: 'green',
        value: null,
      },
      {
        id: '12',
        type: 'reverse',
        color: 'yellow',
        value: null,
      },
      {
        id: '13',
        type: 'draw',
        color: 'red',
        value: null,
      },
    ],
  },
};
