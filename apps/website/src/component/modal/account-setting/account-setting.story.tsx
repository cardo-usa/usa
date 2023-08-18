import type { Meta, StoryObj } from '@storybook/react';
import { AccountSettingModal } from './account-setting.presenter';

type Story = StoryObj<typeof AccountSettingModal>;

const meta: Meta<typeof AccountSettingModal> = {
  component: AccountSettingModal,
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
  },
};
