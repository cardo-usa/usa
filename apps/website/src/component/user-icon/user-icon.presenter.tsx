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
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
});

export type UserIconProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  emoji: AccountSetting['iconEmoji'];
  backgroundColor: AccountSetting['iconBackgroundColor'];
  size: VariantProps<typeof userIconVariant>['size'];
};

export const UserIcon = ({ emoji, backgroundColor, size = '3xl', ...props }: UserIconProps): ReactNode => (
  <div className={cn('aspect-square h-fit w-fit overflow-hidden rounded-full', userIconVariant({ backgroundColor }))} {...props}>
    <span className={cn('pointer-events-none flex select-none items-center justify-center p-2 leading-none', userIconVariant({ size }))}>
      {emoji}
    </span>
  </div>
);
