'use client';
import { useMutation } from '@urql/next';
import Carrot from '@usa/core/asset/brand/carrot.svg';
import BrandIcon from '@usa/core/asset/brand/icon.svg';
import BackgroundCards from '@usa/core/asset/top/bg-cards.svg';
import { Button } from '@usa/core/component/button';
import { BaseDialog } from '@usa/core/component/dialog';
import { Image } from '@usa/core/component/image';
import type { Route } from 'next';
import { useRouter } from 'next/navigation';
import { useState, type ReactNode, useEffect } from 'react';
import { AccountSettingModal } from '@/component/modal/account-setting';
import { type CreateRoomMutation, type CreateRoomMutationVariables, CreateRoomDocument } from '@/infra/graphql/generated/graphql';
import { CreateRoom } from '@/module/root/ui/components/modal/create-room';
import { ShareRoomUrl } from '@/module/root/ui/components/modal/share-room-url';
import { useAccountSetting } from '@/state/account-setting';
import { useAccountIdSettingMutator } from '#/src/state/account-setting/account-setting.hook';
import { C2SBackgroundColor } from '#/src/state/client-to-server-data';

const RootPage = (): ReactNode => {
  const Dialog = BaseDialog(<Button textColor="tomato">ゲームを始める</Button>);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<'accountSetting' | 'confirm' | 'shareUrl'>('accountSetting');
  const { setAccountIdSetting } = useAccountIdSettingMutator();

  const { accountSetting } = useAccountSetting();

  const [{ data }, updater] = useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument);

  const router = useRouter();

  useEffect(() => {
    if (data?.createRoom.id !== undefined) {
      setAccountIdSetting(data.createRoom.id);
    }
  }, [data?.createRoom.id, setAccountIdSetting]);

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
                updater({
                  accountSetting: {
                    name: accountSetting.name,
                    iconEmoji: accountSetting.iconEmoji,
                    iconBackgroundColor: C2SBackgroundColor[accountSetting.iconBackgroundColor],
                  },
                });
              }}
            />
          )}
          {state === 'shareUrl' && data !== undefined && (
            <ShareRoomUrl
              roomUrl={`https://cardo-usa.vercel.app/${data.createRoom.joiningRoom.id}`}
              closeButtonEvent={() => {
                setState('accountSetting');
                setOpen(false);
              }}
              inRoomButtonEvent={() => {
                router.push(`/${data.createRoom.joiningRoom.id}` as Route);
                setOpen(false);
                setState('accountSetting');
              }}
            />
          )}
          {state === 'shareUrl' && data === undefined && (
            <div className="flex h-[16rem] w-[32rem] items-center justify-center rounded-lg bg-pure">
              <p className="font-sans text-5xl text-slate-11">読み込み中...</p>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export { RootPage };
