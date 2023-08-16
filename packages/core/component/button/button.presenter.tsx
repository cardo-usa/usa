import { cn, tv } from '@usa/tailwind';
import type { VariantProps } from '@usa/tailwind';
import { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';

const buttonVariant = tv({
  variants: {
    textColor: {
      tomato: 'text-tomato-11 outline outline-tomato-7',
      black: 'text-black',
    },
  },
});

type Props = {
  children: string;
  textColor: VariantProps<typeof buttonVariant>['textColor'];
} & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'chilren'>;

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(({ children, textColor, ...props }, ref) => (
  <button
    type="button"
    ref={ref}
    className={cn('rounded-lg border-tomato-7 bg-tomato-3 px-8 py-3 shadow-lg duration-200 hover:scale-105', buttonVariant({ textColor }))}
    {...props}
  >
    <p className="text-lg font-bold">{children}</p>
  </button>
));

Button.displayName = 'Button';

export { Button };
