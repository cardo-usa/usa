import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@usa/core/component/button';
import { CheckIcon } from '@usa/core/icon/check-icon';
import { CloseIcon } from '@usa/core/icon/close-icon';
import { cn, tv } from '@usa/tailwind';
import { EmojiStyle } from 'emoji-picker-react';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { useState, type ComponentPropsWithoutRef, type FC } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { UserIcon } from '@/component/user-icon';
import type { AccountSetting } from '@/model/account-setting';
import { accountSettingAtom } from '@/state/account-setting/account-setting.atom';

const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

type Props = {
  closeButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
  cancelButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
};

type FormValue = {
  emoji: AccountSetting['iconEmoji'];
  name: string;
  backgroundColor: AccountSetting['iconBackgroundColor'];
};

const schema = z.object({
  emoji: z.string().min(1, { message: 'Please Select a Emoji.' }),
  name: z.string().min(3, { message: 'アカウント名は3~20文字です。' }).max(20, { message: 'アカウント名は3~20文字です。' }),
  backgroundColor: z.string(),
});

const backgroundColorVariant = tv({
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
    start: {
      true: 'rounded-l-lg',
      false: '',
    },
    end: {
      true: 'rounded-r-lg',
      false: '',
    },
  },
});

const colorList = [
  'tomato',
  'violet',
  'indigo',
  'cyan',
  'green',
  'orange',
  'brown',
  'amber',
] as const satisfies readonly AccountSetting['iconBackgroundColor'][];

const AccountSettingModal: FC<Props> = ({ closeButtonEvent, cancelButtonEvent }) => {
  const [AcountSetting, setAccountSetting] = useAtom(accountSettingAtom);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      emoji: AcountSetting.iconEmoji,
      name: AcountSetting.name,
      backgroundColor: AcountSetting.iconBackgroundColor,
    },
    resolver: zodResolver(schema),
  });

  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <form
      className="flex h-[36rem] w-[53rem] flex-col items-center space-y-8 rounded-2xl bg-pure px-10 py-8"
      onSubmit={handleSubmit((data) => {
        setAccountSetting({
          iconEmoji: data.emoji,
          name: data.name,
          iconBackgroundColor: data.backgroundColor,
        });
      })}
    >
      <div className="flex h-10 w-full items-center justify-end">
        <button
          type="button"
          className="group flex h-10 w-10 items-center justify-center rounded-full duration-200 hover:bg-slate-4"
          onClick={closeButtonEvent}
        >
          <CloseIcon className="h-8 w-8 fill-slate-12" />
        </button>
      </div>
      <div className="flex h-[9.5rem] w-full flex-col items-center space-y-4">
        <p className="h-[4.5rem] text-5xl font-bold leading-[4.5rem] text-tomato-11">アカウント設定</p>
        <p className="h-[3.75rem] w-full font-sans text-xl text-slate-11">
          アイコンとニックネームを設定します。
          <br />
          localStorageを削除すると設定がリセットされるため注意してください。
        </p>
      </div>
      <div className="flex h-[11.5rem] w-full justify-between px-8">
        <div className="flex h-full w-[26rem] flex-col items-start justify-center space-y-2 ">
          <div className="relative flex items-center space-x-[10px] px-[0.75rem] py-[0.5rem]">
            <label htmlFor="emoji" className="text-base font-bold text-slate-12">
              絵文字
            </label>
            <input
              id="emoji"
              {...register('emoji')}
              readOnly
              onClick={() => setPickerVisible(!pickerVisible)}
              className="h-[2.5rem] w-[2.5rem] cursor-pointer rounded-lg bg-slate-3 text-center text-2xl leading-[2.5rem] text-slate-12 shadow-inner"
            />
            <div className={cn('absolute left-28 z-10 shadow-lg', pickerVisible ? 'block' : 'hidden')}>
              <Picker
                onEmojiClick={(emojiData) => {
                  setPickerVisible(false);
                  setValue('emoji', emojiData.emoji, { shouldValidate: true });
                }}
                width={360}
                height={400}
                emojiStyle={EmojiStyle.TWITTER}
              />
            </div>
          </div>
          <div className="flex items-center space-x-[10px] px-[0.75rem] py-[0.5rem]">
            <label htmlFor="backgroundColor" className="text-base font-bold text-slate-12">
              背景色
            </label>
            <div className="flex">
              {colorList.map((color, index, array) => {
                const attayLength = array.length;
                return (
                  <button
                    type="button"
                    key={color}
                    onClick={() => {
                      setValue('backgroundColor', color, { shouldValidate: true });
                    }}
                    className={cn(
                      'flex h-[2.5rem] w-[2.5rem] items-center justify-center',
                      backgroundColorVariant({ backgroundColor: color, start: index === 0, end: index === attayLength - 1 }),
                    )}
                  >
                    {color === getValues('backgroundColor') && <CheckIcon className="h-6 w-6 fill-slate-12" />}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="relative flex items-center space-x-[10px] px-[0.75rem] py-[0.5rem]">
            <label htmlFor="backgroundColor" className="text-base font-bold text-slate-12">
              ニックネーム
            </label>
            <input
              type="text"
              {...register('name')}
              className="h-[2.5rem] w-[15rem] rounded-lg bg-slate-3 px-4 text-start text-base text-slate-12 shadow-inner"
            />
            {errors.name && <p className="absolute left-12 top-12 text-sm font-bold text-tomato-11">{errors.name.message}</p>}
          </div>
        </div>
        <div className="flex h-full w-[16rem] items-center justify-center">
          <UserIcon emoji={getValues('emoji')} backgroundColor={getValues('backgroundColor')} size="8xl" />
        </div>
      </div>
      <div className="flex h-14 w-full justify-between">
        <Button textColor="black" onClick={cancelButtonEvent}>
          キャンセル
        </Button>
        <Button textColor="tomato" type="submit">
          保存する
        </Button>
      </div>
    </form>
  );
};

export { AccountSettingModal };
