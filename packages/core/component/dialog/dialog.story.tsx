import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { FC } from 'react';
import { BaseDialog } from './dialog.presenter';

const Button = <button role="button">button</button>;

type Props = { children: React.ReactNode };

const Dialog: FC<Props> = ({ children }) => {
  const D = BaseDialog(Button);
  const [open, setOpen] = useState(false);
  return (
    <D open={open} setOpen={setOpen}>
      {children}
    </D>
  );
};

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    children: (
      <div className="flex h-96 w-96 items-center justify-center rounded-lg bg-tomato-1">
        <p>Dialog</p>
      </div>
    ),
  },
};
