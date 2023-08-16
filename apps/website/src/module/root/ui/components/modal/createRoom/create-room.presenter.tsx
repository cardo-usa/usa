import { Button } from '@usa/core/component/button';
import { CloseIcon } from '@usa/core/icon/close-icon';
import type { ComponentPropsWithoutRef, FC } from 'react';

type Props = {
  closeButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
  cancelButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
  createButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
};

const CreateRoom: FC<Props> = ({ closeButtonEvent, cancelButtonEvent, createButtonEvent }) => {
  return (
    <div className="flex h-[25rem] w-[50rem] flex-col space-y-8 rounded-2xl bg-pure px-10 py-8">
      <div className="flex h-10 w-full items-center justify-end">
        <button
          type="button"
          className="group flex h-10 w-10 items-center justify-center rounded-full duration-200 hover:bg-slate-4"
          onClick={closeButtonEvent}
        >
          <CloseIcon className="h-8 w-8 fill-slate-12" />
        </button>
      </div>
      <div className="flex h-44 w-full flex-col items-center justify-center space-y-4">
        <p className="h-[4.5rem] text-5xl font-bold text-tomato-11">ルームを作成しますか？</p>
        <p className="h-[5.5rem] font-sans text-xl text-slate-11">
          ルームと招待用のURLを作成します。
          <br />
          参加者は生成されたURLにアクセスすることで、あなたのルームに入手することができます。
        </p>
      </div>
      <div className="flex h-14 w-full justify-between">
        <Button textColor="black" onClick={cancelButtonEvent}>
          キャンセル
        </Button>
        <Button textColor="tomato" onClick={createButtonEvent}>
          作成する
        </Button>
      </div>
    </div>
  );
};

export { CreateRoom };
