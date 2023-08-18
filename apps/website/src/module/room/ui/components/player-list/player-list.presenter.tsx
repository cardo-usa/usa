import { cn } from '@usa/tailwind';
import type { FC } from 'react';
import { UserIcon } from '@/component/user-icon';
import type { AccountSetting } from '@/model/account-setting';

type PlayerStatus = {
  id: string;
  handCount: number;
  isTurn: boolean;
} & AccountSetting;

type Props = {
  playerList: PlayerStatus[];
};

const PlayerList: FC<Props> = ({ playerList }) => {
  return (
    <div className="flex h-[25rem] w-64 flex-col space-y-2 overflow-y-auto py-2">
      {playerList.map((player) => (
        <div className="flex h-14 items-center space-x-2" key={`playerList-${player.id}`}>
          <div className="w-20">{player.handCount == 1 && <p className="font-chango text-lg text-tomato-11">USA!!</p>}</div>
          <div className={cn('h-auto  w-auto rounded-full', player.isTurn ? 'ring ring-tomato-7 ring-offset-4' : '')}>
            <UserIcon emoji={player.iconEmoji} backgroundColor={player.iconBackgroundColor} size="3xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">{player.name}</p>
            <p className="text-xs font-bold">手札: {player.handCount}枚</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { PlayerList, type PlayerStatus };
