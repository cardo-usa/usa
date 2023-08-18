import type { Meta, StoryObj } from '@storybook/react';
import { CardBack } from './card-back.presenter';

type Story = StoryObj<typeof CardBack>;

const meta: Meta<typeof CardBack> = {
  component: CardBack,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
