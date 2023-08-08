import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './hero.presenter';

type Story = StoryObj<typeof Hero>;

const meta = {
  component: Hero,
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;

export const Default: Story = {};
