import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.presenter';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  component: Header,
  argTypes: {
    accountSetting: {
      description: 'The account setting of the user.',
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    accountSetting: {
      iconEmoji: '🐰',
      iconBackgroundColor: 'orange',
      name: 'cute rabbit',
    },
  },
};
