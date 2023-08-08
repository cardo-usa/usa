import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSelect } from './theme-select.presenter';

type Story = StoryObj<typeof ThemeSelect>;

const meta = {
  component: ThemeSelect,
  argTypes: {},
} satisfies Meta<typeof ThemeSelect>;

export default meta;

export const Default: Story = {};
