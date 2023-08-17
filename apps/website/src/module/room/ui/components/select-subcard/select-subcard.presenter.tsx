'use client';
import { CardBack } from '#core/component/card/card-back';
import { NumberCard } from '#core/component/card/number-card';
import { useState, type FC, type Dispatch, type SetStateAction } from 'react';

type Props = {
  subcard: number[];
  closeValue: boolean;
  closeSetter: Dispatch<SetStateAction<boolean>>;
  selectEvent: (value: number) => void;
};

const SelectSubcard: FC<Props> = ({ subcard, closeSetter, closeValue, selectEvent }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [selectValue, setSelectValue] = useState<number | null>(null);

  return (
    <div className="absolute left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-end space-y-12 bg-black-9 p-8">
      <p className="h-[4.5rem] w-[28rem] rounded-lg bg-tomato-1 text-center text-3xl font-bold leading-[4.5rem] text-slate-12">Select Sub Card!</p>
      <div className="grid h-[38.5rem] w-[52rem] grid-cols-3 grid-rows-2 items-center justify-items-center gap-[2.5rem]">
        {subcard.map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => {
              if (!isSelect) {
                setIsSelect(true);
                setSelectValue(value);
                selectEvent(value);
                window.setTimeout(() => {
                  closeSetter(closeValue);
                }, 1500);
              }
            }}
          >
            {selectValue !== value && <CardBack className="h-64 w-48" />}
            {selectValue === value && <NumberCard color="any" number={value} className="h-64 w-48" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export { SelectSubcard };
