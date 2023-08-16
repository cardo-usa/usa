import type { Meta, StoryObj } from '@storybook/react';
import { CopyIcon } from './copy-icon.presenter';

type Story = StoryObj<typeof CopyIcon>;

const meta = {
  component: CopyIcon,
  argTypes: {},
} satisfies Meta<typeof CopyIcon>;

export default meta;

export const Default: Story = {};
