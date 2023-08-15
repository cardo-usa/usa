import type { Meta, StoryObj } from '@storybook/react';
import { BookIcon } from './book-icon.presenter';

type Story = StoryObj<typeof BookIcon>;

const meta = {
  component: BookIcon,
  argTypes: {},
} satisfies Meta<typeof BookIcon>;

export default meta;

export const Default: Story = {};
