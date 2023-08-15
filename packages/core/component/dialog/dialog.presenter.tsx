import * as Dialog from '@radix-ui/react-dialog';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';

type Props = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const BaseDialog: (TrigerButton: ReactNode) => FC<Props> = (TrigerButton) => {
  const Di: FC<Props> = ({ children, open, setOpen }) => (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{TrigerButton}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black-9" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[52] translate-x-[-50%] translate-y-[-50%]">{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
  return Di;
};

export { BaseDialog };
