import type { Meta, StoryObj } from '@storybook/react';
import { Deck } from './deck.presenter';

type Story = StoryObj<typeof Deck>;

const meta: Meta<typeof Deck> = {
  component: Deck,
};

export default meta;

export const Default: Story = {
  args: {
    deckNum: 1,
  },
};
