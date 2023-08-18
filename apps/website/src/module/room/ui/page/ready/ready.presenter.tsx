import { Button } from '@usa/core/component/button';
import type { FC } from 'react';
import { UserIcon } from '@/component/user-icon';
import { type AccountSetting } from '@/model/account-setting';

type Props = {
  isGameMaster: boolean;
  members: AccountSetting[];
  reopenEvent: VoidFunction;
  startEvent: VoidFunction;
};

const Ready: FC<Props> = ({ isGameMaster, members, reopenEvent, startEvent }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <p className="h-[5.5rem] text-6xl font-bold text-tomato-11">募集完了 !</p>
      <div className="flex max-w-[50rem] space-x-10 overflow-auto">
        {members.map((m) => (
          <div className="flex h-[8rem] w-[5.5rem] flex-col items-center justify-center space-y-2" key={m.name}>
            <UserIcon emoji={m.iconEmoji} backgroundColor={m.iconBackgroundColor} size="7xl" />
            <p className="max-w-[5.5rem] truncate font-sans text-2xl text-slate-12">{m.name}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-16">
        {isGameMaster && (
          <>
            <Button
              textColor="black"
              onClick={() => {
                reopenEvent();
              }}
            >
              募集を再開する
            </Button>
            <Button
              textColor="tomato"
              onClick={() => {
                startEvent();
              }}
            >
              ゲームを始める
            </Button>
          </>
        )}
        {!isGameMaster && <p className="font-sans text-lg text-slate-11">ゲームマスターがゲームを開始するまでお待ちください...</p>}
      </div>
    </div>
  );
};

export { Ready };
