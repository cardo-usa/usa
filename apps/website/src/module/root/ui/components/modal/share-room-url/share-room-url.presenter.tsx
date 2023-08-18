import BrandIcon from '@usa/core/asset/brand/icon.svg';
import { Button } from '@usa/core/component/button';
import { Image } from '@usa/core/component/image';
import { CloseIcon } from '@usa/core/icon/close-icon';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { ShareLink } from '@/component/share-link';

type Props = {
  roomUrl: string;
  closeButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
  inRoomButtonEvent: ComponentPropsWithoutRef<'button'>['onClick'];
};

const ShareRoomUrl: FC<Props> = ({ roomUrl, inRoomButtonEvent, closeButtonEvent }) => (
  <div className="flex h-[45rem] w-[53rem] flex-col items-center space-y-8 rounded-2xl bg-pure px-10 py-8">
    <div className="flex h-10 w-full items-center justify-end">
      <button
        type="button"
        className="group flex h-10 w-10 items-center justify-center rounded-full duration-200 hover:bg-slate-4"
        onClick={closeButtonEvent}
      >
        <CloseIcon className="h-8 w-8 fill-slate-12" />
      </button>
    </div>
    <div>
      <Image src={BrandIcon} alt="A brand icon for USA." height={200} priority className="h-[12.5rem] w-auto" />
      <p className="h-24 font-chango text-6xl leading-[6rem] text-tomato-11">Let&apos;s USA!</p>
    </div>
    <p className="h-[90px] font-sans text-xl text-slate-11">
      ルームを作成しました。
      <br />
      参加者は生成されたURLにアクセスすることで、あなたのルームに参加することができます。
    </p>
    <ShareLink url={roomUrl} />
    <div className="flex h-12 justify-center">
      <Button textColor="tomato" onClick={inRoomButtonEvent}>
        ルームに入る
      </Button>
    </div>
  </div>
);

export { ShareRoomUrl };
