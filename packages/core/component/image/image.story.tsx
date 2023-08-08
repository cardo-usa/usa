import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image.presenter';
import BrandIconImage from '#core/asset/brand/icon.webp';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    src: BrandIconImage,
    alt: 'The brand icon of this website.',
    width: 640,
    height: 640,
  },
};

export const WithBlur: Story = {
  args: {
    src: BrandIconImage,
    alt: 'The brand icon of this website.',
    width: 640,
    height: 640,
    placeholder: 'blur',
  },
};
