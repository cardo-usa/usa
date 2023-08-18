'use client';
import BrandLogo from '@usa/core/asset/brand/logo.svg';
import { BaseDialog } from '@usa/core/component/dialog';
import { Image } from '@usa/core/component/image';
import { Link } from '@usa/core/component/link';
import { BookIcon } from '@usa/core/icon/book-icon';
import { cn } from '@usa/tailwind';
import { useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { AccountSettingModal } from '@/component/modal/account-setting';
import { UserIcon } from '@/component/user-icon';
import type { AccountSetting } from '@/model/account-setting';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'> & {
  accountSetting: AccountSetting;
};

export const Header = ({ accountSetting, className, ...props }: HeaderProps): ReactNode => {
  const [settingOpen, setSettingOpen] = useState(false);
  const Dialog = BaseDialog(<UserIcon emoji={accountSetting.iconEmoji} backgroundColor={accountSetting.iconBackgroundColor} size="3xl" />);
  return (
    <header className={cn('flex w-screen items-center justify-between p-6', className)} {...props}>
      <nav aria-label="main navigation">
        <Link href="/">
          <Image src={BrandLogo} alt="A brand logo for USA." height={48} priority className="h-12 w-auto transition hover:opacity-70" />
          <span className="sr-only">トップ</span>
        </Link>
      </nav>
      <div className="flex items-center gap-6">
        <Link href="https://github.com/cardo-usa/usa/blob/main/doc/rule.md/" external className="group flex items-center gap-2">
          <BookIcon className="h-8 w-8 fill-slate-12 transition group-hover:opacity-70" />
          <span className="text-2xl font-bold text-slate-12 transition group-hover:opacity-70">Rule</span>
        </Link>
        <Dialog open={settingOpen} setOpen={setSettingOpen}>
          <AccountSettingModal
            closeButtonEvent={() => {
              setSettingOpen(false);
            }}
            cancelButtonEvent={() => {
              setSettingOpen(false);
            }}
            submitButtonEvent={() => {
              setSettingOpen(false);
            }}
          />
        </Dialog>
      </div>
    </header>
  );
};
