import BronzeCrown from '@usa/core/asset/crown/bronze-crown.svg';
import GoldCrown from '@usa/core/asset/crown/gold-crown.svg';
import SilverCrown from '@usa/core/asset/crown/silver-crown.svg';
import { Button } from '@usa/core/component/button';
import { Image } from '@usa/core/component/image';
import { cn } from '@usa/tailwind';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { UserIcon } from '@/component/user-icon';
import type { AccountSetting } from '@/model/account-setting';

type Props = {
  resultData: AccountSetting[];
  closeButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
};

const Result: FC<Props> = ({ resultData, closeButtonEvent }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 text-tomato-11">
      <p className="h-[5.5rem] text-6xl font-bold">Result</p>
      <div className="flex h-[14rem] space-x-10">
        <div className="flex h-full w-[6.5rem] flex-col items-center justify-end space-y-2">
          {resultData[1] && (
            <>
              <Image src={SilverCrown} alt="A crown logo for USA." height={36} priority className="h-9 w-auto" />
              <UserIcon emoji={resultData[1].iconEmoji} backgroundColor={resultData[1].iconBackgroundColor} size="7xl" />
              <p className="max-w-full truncate text-xl font-bold text-slate-12">{resultData[1].name}</p>
            </>
          )}
        </div>
        <div className="flex h-full w-40 flex-col items-center justify-end space-y-2">
          {resultData[0] && (
            <>
              <Image src={GoldCrown} alt="A crown logo for USA." height={40} priority className="h-10 w-auto" />
              <UserIcon emoji={resultData[0].iconEmoji} backgroundColor={resultData[0].iconBackgroundColor} size="8xl" />
              <p className="max-w-full truncate text-4xl font-bold text-slate-12">{resultData[0].name}</p>
            </>
          )}
        </div>
        <div className="flex h-full w-[6.5rem] flex-col items-center justify-end space-y-2">
          {resultData[2] && (
            <>
              <Image src={BronzeCrown} alt="A crown logo for USA." height={36} priority className="h-9 w-auto" />
              <UserIcon emoji={resultData[2].iconEmoji} backgroundColor={resultData[2].iconBackgroundColor} size="6xl" />
              <p className="max-w-full truncate text-xl font-bold text-slate-12">{resultData[2].name}</p>
            </>
          )}
        </div>
      </div>
      <ul className="flex h-[14.5rem] w-[50rem] flex-col items-start overflow-y-auto rounded-lg border-2 border-tomato-7 px-6 py-3">
        {resultData.map((r, index) => (
          <li key={r.name} className="flex w-full items-center justify-start space-x-3 p-2">
            {index === 0 && <Image src={GoldCrown} alt="A crown logo for USA." height={36} priority className="h-9 w-auto" />}
            {index === 1 && <Image src={SilverCrown} alt="A crown logo for USA." height={36} priority className="h-9 w-auto" />}
            {index === 2 && <Image src={BronzeCrown} alt="A crown logo for USA." height={36} priority className="h-9 w-auto" />}
            {index > 2 && <div className="h-9 w-9" />}
            <p
              className={cn(
                'text-slate-11',
                'text-xl font-bold',
                index === 0 ? 'text-amber-10' : '',
                index === 1 ? 'text-slate-10' : '',
                index === 2 ? 'text-brown-10' : '',
              )}
            >
              #{index + 1}
            </p>
            <UserIcon emoji={r.iconEmoji} backgroundColor={r.iconBackgroundColor} size="3xl" />
            <p className="text-2xl font-bold text-slate-12">{r.name}</p>
          </li>
        ))}
      </ul>
      <Button textColor="tomato" onClick={closeButtonEvent}>
        トップページに戻る
      </Button>
    </div>
  );
};

export { Result };
