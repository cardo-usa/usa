import type { Meta, StoryObj } from '@storybook/react';
import { SelectSubcard } from './select-subcard.presenter';

type Story = StoryObj<typeof SelectSubcard>;

const meta: Meta<typeof SelectSubcard> = {
  component: SelectSubcard,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    subcard: [-2, -1, 0, 1, 2, 3],
    closeSetter: () => {},
    closeValue: false,
    selectEvent: () => {},
  },
};
