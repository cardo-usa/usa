'use client';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Header as HeaderPresenter } from './header.presenter';
import { useAccountSetting } from '@/state/account-setting';

export type HeaderProps = Omit<ComponentPropsWithoutRef<typeof HeaderPresenter>, 'accountSetting'>;

export const Header = ({ ...props }: HeaderProps): ReactNode => {
  const { accountSetting } = useAccountSetting();

  return <HeaderPresenter accountSetting={accountSetting} {...props} />;
};
