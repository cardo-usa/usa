import type { Meta, StoryObj } from '@storybook/react';
import { CreateRoom } from './create-room.presenter';

type Story = StoryObj<typeof CreateRoom>;

const meta: Meta<typeof CreateRoom> = {
  component: CreateRoom,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    closeButtonEvent: () => {
      console.log('close button clicked');
    },
    cancelButtonEvent: () => {
      console.log('cancel button clicked');
    },
    createButtonEvent: () => {
      console.log('create button clicked');
    },
  },
};
