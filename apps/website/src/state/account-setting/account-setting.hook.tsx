import { useAtomValue, useSetAtom } from 'jotai';
import { accountSettingAtom } from './account-setting.atom';

export const useAccountSetting = () => {
  const accountSetting = useAtomValue(accountSettingAtom);

  return { accountSetting };
};

export const useAccountSettingMutator = () => {
  const setAccountSetting = useSetAtom(accountSettingAtom);

  return { setAccountSetting };
};
