import { atomWithStorage } from 'jotai/utils';
import type { AccountSetting } from '@/model/account-setting';
import { atomKeys } from '@/state/atom-keys';

export const initialAccountSetting = {
  iconEmoji: '🐰',
  iconBackgroundColor: 'orange',
  name: 'cute rabbit',
} as const satisfies AccountSetting;

export const accountSettingAtom = atomWithStorage<AccountSetting>(atomKeys['account-setting'], initialAccountSetting);

export const accountIdSettingAtom = atomWithStorage<string>(atomKeys['account-id-setting'], '');
