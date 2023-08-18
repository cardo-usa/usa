import type { Meta, StoryObj } from '@storybook/react';
import { ShareLink } from './share-link.presenter';

type Story = StoryObj<typeof ShareLink>;

const meta: Meta<typeof ShareLink> = {
  component: ShareLink,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    url: 'https://example.com',
  },
};
