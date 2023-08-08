import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from './profile.presenter';

type Story = StoryObj<typeof Profile>;

const meta = {
  component: Profile,
  argTypes: {},
} satisfies Meta<typeof Profile>;

export default meta;

export const Default: Story = {};
