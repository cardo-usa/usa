import type { Meta, StoryObj } from '@storybook/react';
import { LinkIcon } from './link-icon.presenter';

type Story = StoryObj<typeof LinkIcon>;

const meta = {
  component: LinkIcon,
  argTypes: {},
} satisfies Meta<typeof LinkIcon>;

export default meta;

export const Default: Story = {};
