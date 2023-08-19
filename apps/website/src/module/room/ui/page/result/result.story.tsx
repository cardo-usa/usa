import type { Meta, StoryObj } from '@storybook/react';
import { Result } from './result.presenter';

type Story = StoryObj<typeof Result>;

const meta: Meta<typeof Result> = {
  component: Result,
};

export default meta;

export const Default: Story = {
  args: {
    roomId: '64e029b98c6af6d0de2af21e',
    closeButtonEvent: () => {},
  },
};
