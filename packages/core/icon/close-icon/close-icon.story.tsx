import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon } from './close-icon.presenter';

type Story = StoryObj<typeof CloseIcon>;

const meta = {
  component: CloseIcon,
  argTypes: {},
} satisfies Meta<typeof CloseIcon>;

export default meta;

export const Default: Story = {};
