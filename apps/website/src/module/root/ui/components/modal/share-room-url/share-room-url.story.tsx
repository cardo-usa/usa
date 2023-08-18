import type { Meta, StoryObj } from '@storybook/react';
import { ShareRoomUrl } from './share-room-url.presenter';

type Story = StoryObj<typeof ShareRoomUrl>;

const meta: Meta<typeof ShareRoomUrl> = {
  component: ShareRoomUrl,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    closeButtonEvent: () => {
      console.log('close button clicked');
    },
    inRoomButtonEvent: () => {
      console.log('in room button clicked');
    },
    roomUrl: 'https://example.com',
  },
};
