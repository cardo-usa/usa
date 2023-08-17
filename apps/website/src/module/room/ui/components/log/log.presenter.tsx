import type { FC } from 'react';
import type { CardColor, CardType } from '@/state/card-setting';

type LogDataTypes = {
  name: string;
  color: CardColor;
} & (
  | {
      type: 'number';
      value: number;
    }
  | {
      type: Exclude<CardType, 'number'>;
    }
);

type Props = {
  logData: LogDataTypes[];
};

const colorJp = {
  red: '赤',
  blue: '青',
  green: '緑',
  yellow: '黄',
  any: '任意',
} satisfies Record<CardColor, string>;

const Log: FC<Props> = ({ logData }) => {
  return (
    <div className="h-[25rem] w-64 rounded-xl px-6 py-5 outline outline-2 outline-slate-7">
      <p className=" font-sans text-2xl underline underline-offset-2 ">LOG</p>
      <div className="h-[20rem] w-full overflow-y-auto">
        {logData.map((data) => {
          switch (data.type) {
            case 'number':
              return (
                <p>
                  {data.name}: {colorJp[data.color]}色の{data.value}を出しました。
                </p>
              );
            case 'skip':
              return (
                <p>
                  {data.name}: {colorJp[data.color]}色のスキップカードを出しました。
                </p>
              );
            case 'reverse':
              return (
                <p>
                  {data.name}: {colorJp[data.color]}色のリバースカードを出しました。
                </p>
              );
            case 'draw':
              return (
                <p>
                  {data.name}: {colorJp[data.color]}色のドローカードを出しました。
                </p>
              );
            case 'wild':
              return (
                <>
                  <p>{data.name}: ワイルドカードを出しました。</p>
                  <p>
                    {data.name}: ワイルドカードの色を{colorJp[data.color]}色に指定しました。
                  </p>
                </>
              );
          }
        })}
      </div>
    </div>
  );
};

export { Log, type LogDataTypes };
