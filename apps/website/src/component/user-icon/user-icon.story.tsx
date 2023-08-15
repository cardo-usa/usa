import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentPropsWithoutRef } from 'react';
import { UserIcon } from './user-icon.presenter';

type Story = StoryObj<typeof UserIcon>;

const meta: Meta<typeof UserIcon> = {
  component: UserIcon,
  argTypes: {
    emoji: {
      description: 'The emoji to be displayed.',
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      description: 'The background color of the icon.',
      control: {
        type: 'select',
      },
      options: ['tomato', 'violet', 'indigo', 'cyan', 'green', 'orange', 'brown', 'amber'] satisfies ComponentPropsWithoutRef<
        typeof UserIcon
      >['backgroundColor'][],
    },
    size: {
      description: 'The size of the icon.',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] satisfies ComponentPropsWithoutRef<
        typeof UserIcon
      >['size'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    emoji: '🐰',
    backgroundColor: 'tomato',
    size: '3xl',
  },
};
