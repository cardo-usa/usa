import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { accountSettingAtom, accountIdSettingAtom } from './account-setting.atom';

export const useAccountSetting = () => {
  const accountSetting = useAtomValue(accountSettingAtom);

  return { accountSetting };
};

export const useAccountSettingMutator = () => {
  const setAccountSetting = useSetAtom(accountSettingAtom);

  return { setAccountSetting };
};

export const useAccountIdSettingValue = () => {
  const accountIdSetting = useAtomValue(accountIdSettingAtom);
  return { accountIdSetting };
};

export const useAccountIdSettingMutator = () => {
  const setAccountIdSetting = useSetAtom(accountIdSettingAtom);
  return { setAccountIdSetting };
};

export const useAccountIdSettingState = () => {
  const accountIdSetting = useAtom(accountIdSettingAtom);
  return accountIdSetting;
};
