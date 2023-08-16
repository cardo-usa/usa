import { Button } from '@usa/core/component/button';
import type { FC } from 'react';
import { ShareLink } from '@/component/share-link';
import { UserIcon } from '@/component/user-icon';
import type { AccountSetting } from '@/model/account-setting';

type Props = {
  isGameMaster: boolean;
  members: AccountSetting[];
  roomId: string;
};

const Wanted: FC<Props> = ({ isGameMaster, members, roomId }) => {
  const shareUrl = `https://cardo-usa.vercel.app/${roomId}`;
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <div className="flex flex-col items-center space-y-4">
        <p className="h-[5.5rem] text-6xl font-bold text-tomato-11">募集中...</p>
        <ShareLink url={shareUrl} />
      </div>
      <div className="flex max-w-[50rem] space-x-10 overflow-auto">
        {members.map((m) => (
          <div className="flex h-[8rem] w-[5.5rem] flex-col items-center justify-center space-y-2" key={m.name}>
            <UserIcon emoji={m.iconEmoji} backgroundColor={m.iconBackgroundColor} size="7xl" />
            <p className="max-w-[5.5rem] truncate font-sans text-2xl text-slate-12">{m.name}</p>
          </div>
        ))}
        <div className="flex h-[8rem] w-[5.5rem] items-center justify-between">
          <div className="h-[14px] w-[14px] rounded-full bg-slate-9" />
          <div className="h-[14px] w-[14px] rounded-full bg-slate-9" />
          <div className="h-[14px] w-[14px] rounded-full bg-slate-9" />
        </div>
      </div>
      <div>
        {isGameMaster && (
          <Button textColor="tomato" onClick={() => {}}>
            締め切る
          </Button>
        )}
        {!isGameMaster && (
          <Button textColor="black" onClick={() => {}}>
            退室する
          </Button>
        )}
      </div>
    </div>
  );
};

export { Wanted };
