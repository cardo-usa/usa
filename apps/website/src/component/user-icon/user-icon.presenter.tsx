import { type VariantProps, cn, tv } from '@usa/tailwind';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { AccountSetting } from '@/model/account-setting';

const userIconVariant = tv({
  variants: {
    backgroundColor: {
      tomato: 'bg-tomato-9',
      violet: 'bg-violet-9',
      indigo: 'bg-indigo-9',
      cyan: 'bg-cyan-9',
      green: 'bg-green-9',
      orange: 'bg-orange-9',
      brown: 'bg-brown-9',
      amber: 'bg-amber-9',
    } satisfies Record<AccountSetting['iconBackgroundColor'], string>,
    size: {
      sm: 'h-6 w-6 text-sm',
      md: 'h-6 w-6 text-base',
      lg: 'h-7 w-7 text-lg',
      xl: 'h-7 w-7 text-xl',
      '2xl': 'h-8 w-8 text-2xl',
      '3xl': 'h-12 w-12 text-3xl',
      '4xl': 'h-16 w-16 text-4xl',
      '5xl': 'h-20 w-20 text-5xl',
      '6xl': 'h-24 w-24 text-6xl',
      '7xl': 'h-28 w-28 text-7xl',
      '8xl': 'h-32 w-32 text-8xl',
      '9xl': 'h-44 w-44 text-9xl',
    },
  },
});

export type UserIconProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  emoji: AccountSetting['iconEmoji'];
  backgroundColor: AccountSetting['iconBackgroundColor'];
  size: VariantProps<typeof userIconVariant>['size'];
};

export const UserIcon = ({ emoji, backgroundColor, size = '3xl', ...props }: UserIconProps): ReactNode => (
  <div className={cn('h-fit w-fit overflow-hidden rounded-full', userIconVariant({ backgroundColor }))} {...props}>
    <span className={cn('pointer-events-none flex select-none items-center justify-center', userIconVariant({ size }))}>{emoji}</span>
  </div>
);
