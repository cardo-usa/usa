'use client';
import Carrot from '@usa/core/asset/brand/carrot.svg';
import BrandIcon from '@usa/core/asset/brand/icon.svg';
import BackgroundCards from '@usa/core/asset/top/bg-cards.svg';
import { Button } from '@usa/core/component/button';
import { BaseDialog } from '@usa/core/component/dialog';
import { Image } from '@usa/core/component/image';
import type { Route } from 'next';
import { useRouter } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { AccountSettingModal } from '@/component/modal/account-setting';
import { CreateRoom } from '@/module/root/ui/components/modal/create-room';
import { ShareRoomUrl } from '@/module/root/ui/components/modal/share-room-url';

const RootPage = (): ReactNode => {
  const Dialog = BaseDialog(<Button textColor="tomato">ゲームを始める</Button>);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<'accountSetting' | 'confirm' | 'shareUrl'>('accountSetting');
  const [roomId, setRoomId] = useState<string>('');

  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image src={BackgroundCards} alt="A background-cads svg file from USA" priority className="absolute bottom-0 left-0 h-[45rem]" />
      <div className="flex h-[35rem] flex-col items-center space-y-10">
        <Image src={BrandIcon} alt="A BrancIcon.svg from USA" priority className="-z-10 h-72" />
        <div className="flex flex-col items-center space-y-2">
          <div className="flex h-24 space-x-2">
            <p className="h-24 font-chango text-8xl text-tomato-11">USA</p>
            <Image src={Carrot} alt="A BrancIcon.svg from USA" priority className="h-24 w-24" />
          </div>
          <p className="text-xl font-bold text-slate-11">UNO をベースとした全く新しいテーブルカードゲーム</p>
        </div>
        <Dialog open={open} setOpen={setOpen}>
          {state === 'accountSetting' && (
            <AccountSettingModal
              closeButtonEvent={() => {
                setOpen(false);
              }}
              cancelButtonEvent={() => {
                setOpen(false);
              }}
              submitButtonEvent={() => {
                setState('confirm');
              }}
            />
          )}
          {state === 'confirm' && (
            <CreateRoom
              closeButtonEvent={() => {
                setOpen(false);
              }}
              cancelButtonEvent={() => {
                setOpen(false);
              }}
              createButtonEvent={() => {
                setState('shareUrl');
                setRoomId('123456789');
              }}
            />
          )}
          {state === 'shareUrl' && (
            <ShareRoomUrl
              roomUrl={`https://cardo-usa.vercel.app/${roomId}`}
              closeButtonEvent={() => {
                setState('accountSetting');
                setOpen(false);
              }}
              inRoomButtonEvent={() => {
                router.push(`/${roomId}` as Route);
                setRoomId('');
                setOpen(false);
                setState('accountSetting');
              }}
            />
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default RootPage;
