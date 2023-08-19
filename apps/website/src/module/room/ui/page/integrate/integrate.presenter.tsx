'use client';

import { DndContext } from '@dnd-kit/core';
import { useMutation, useQuery } from '@urql/next';
import { type Route } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, type FC, useState } from 'react';
import { Deck } from '@/module/room/ui/components/dnd/deck';
import { Hand } from '@/module/room/ui/components/dnd/hand';
import { DndOverlay } from '@/module/room/ui/components/dnd/overlay';
import { TableCards } from '@/module/room/ui/components/dnd/table-cards';
import { PlayerList } from '@/module/room/ui/components/player-list';
import { SelectSubcard } from '@/module/room/ui/components/select-subcard';
import { Ready } from '@/module/room/ui/page/ready';
import { Result } from '@/module/room/ui/page/result';
import { Wanted } from '@/module/room/ui/page/wanted';
import { useRoomStatus } from '@/module/room/ui/state/room-status';
import { AccountSettingModal } from '#/src/component/modal/account-setting';
import {
  RoomGameState,
  Role,
  CardType,
  CardColor,
  JoinRoomDocument,
  UserGameState,
  UpdateRoomGameStateDocument,
  InitializeGameDocument,
  DrawCardFromDeckCardsDocument,
  PutHandCardToFieldCardsDocument,
  GetResultDocument,
  type JoinRoomMutation,
  type JoinRoomMutationVariables,
  type UpdateRoomGameStateMutation,
  type UpdateRoomGameStateMutationVariables,
  type InitializeGameMutation,
  type InitializeGameMutationVariables,
  type DrawCardFromDeckCardsMutation,
  type DrawCardFromDeckCardsMutationVariables,
  type PutHandCardToFieldCardsMutation,
  type PutHandCardToFieldCardsMutationVariables,
  type GetResultQuery,
  type GetResultQueryVariables,
} from '#/src/infra/graphql/generated/graphql';
import { useAccountIdSettingState } from '#/src/state/account-setting/account-setting.hook';
import { C2SBackgroundColor } from '#/src/state/client-to-server-data';
import { type DragCardDataType } from '#/src/state/dnd-setting';
import { S2CBackgroundColor } from '#/src/state/server-to-client-data';
import { S2CCardColor, S2CCardType } from '#/src/state/server-to-client-data/server-to-client-data.converter';

type Props = {
  roomId: string;
};

export const Integrate: FC<Props> = ({ roomId }) => {
  const roomStatus = useRoomStatus({ roomId });
  const [accountId, setAccountId] = useAccountIdSettingState();
  const router = useRouter();
  const [{ data: joinUserData }, setJoinRoom] = useMutation<JoinRoomMutation, JoinRoomMutationVariables>(JoinRoomDocument);
  const [, setWantedRoomState] = useMutation<UpdateRoomGameStateMutation, UpdateRoomGameStateMutationVariables>(UpdateRoomGameStateDocument);
  const [, setStartGame] = useMutation<InitializeGameMutation, InitializeGameMutationVariables>(InitializeGameDocument);
  const [, setDrawCard] = useMutation<DrawCardFromDeckCardsMutation, DrawCardFromDeckCardsMutationVariables>(DrawCardFromDeckCardsDocument);
  const [, setPutCard] = useMutation<PutHandCardToFieldCardsMutation, PutHandCardToFieldCardsMutationVariables>(PutHandCardToFieldCardsDocument);
  const [{ data: resultData }, getResult] = useQuery<GetResultQuery, GetResultQueryVariables>({
    query: GetResultDocument,
    variables: { where: { id: roomId } },
  });

  const [openSelectSubCard, setOpenSelectSubCard] = useState(false);
  const [selectSubCardEventData, setSelectSubCardEventData] = useState<{ handCardId: string; accountId: string }>({ accountId: '', handCardId: '' });

  useEffect(() => {
    if (joinUserData !== undefined) {
      setAccountId(joinUserData.joinRoom.id);
    }
  }, [joinUserData, setAccountId]);

  if (roomStatus === undefined) {
    return null;
  }

  const { attenders, gameState } = roomStatus;
  const accountRoomData = attenders.find((attender) => attender.id === accountId);

  const isJoined = attenders.some((attender) => attender.id === accountId);

  if (!isJoined) {
    return (
      <div className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black-9">
        <AccountSettingModal
          cancelButtonEvent={() => router.push('/' as Route)}
          closeButtonEvent={() => router.push('/' as Route)}
          submitButtonEvent={(iconEmoji, name, iconBackgroundColor) => {
            setJoinRoom({
              where: { id: roomId },
              data: {
                iconEmoji,
                name,
                iconBackgroundColor: C2SBackgroundColor[iconBackgroundColor],
              },
            });
          }}
        />
      </div>
    );
  }

  if (accountRoomData === undefined) {
    return null;
  }

  if (gameState === RoomGameState.Wanted) {
    return (
      <Wanted
        isGameMaster={accountRoomData.role === Role.GameMaster}
        roomId={roomId}
        members={attenders.map((attender) => ({
          iconEmoji: attender.iconEmoji,
          name: attender.name,
          iconBackgroundColor: S2CBackgroundColor[attender.iconBackgroundColor],
        }))}
        closeEvent={() => {
          setWantedRoomState({
            where: { id: roomId },
            data: {
              gameState: RoomGameState.Ready,
            },
          });
        }}
        leaveEvent={() => {}}
      />
    );
  }

  if (gameState === RoomGameState.Ready) {
    return (
      <Ready
        isGameMaster={accountRoomData.role === Role.GameMaster}
        members={attenders.map((attender) => ({
          iconEmoji: attender.iconEmoji,
          name: attender.name,
          iconBackgroundColor: S2CBackgroundColor[attender.iconBackgroundColor],
        }))}
        reopenEvent={() => {
          setWantedRoomState({
            where: { id: roomId },
            data: {
              gameState: RoomGameState.Wanted,
            },
          });
        }}
        startEvent={() => {
          setStartGame({
            where: { id: roomId },
          });
        }}
      />
    );
  }

  if (gameState === RoomGameState.InGame) {
    return (
      <DndContext
        id="index"
        onDragEnd={(e) => {
          const dragData = e.active.data.current as DragCardDataType | undefined;
          const dropAreaId = e.over?.id;
          const fieldCard = roomStatus.fieldCards[0];

          if (dropAreaId && dragData && fieldCard) {
            if (dragData.isDeck === true && dropAreaId === 'hand') {
              setDrawCard({
                where: { id: accountId },
              });
            }
            if (dragData.isDeck === false && dropAreaId === 'table') {
              if (dragData.type == 'wild') {
                setPutCard({
                  handCardId: dragData.id,
                  where: { id: accountId },
                });
              }
              if (dragData.type === 'number' && (dragData.color === S2CCardColor[fieldCard.color] || fieldCard.color === CardColor.Any)) {
                setPutCard({
                  handCardId: dragData.id,
                  where: { id: accountId },
                });
              } else if (
                dragData.type === 'number' &&
                fieldCard.type === CardType.Number &&
                (dragData.color === S2CCardColor[fieldCard.color] || dragData.value === fieldCard.number)
              ) {
                setPutCard({
                  handCardId: dragData.id,
                  where: { id: accountId },
                });
              }
              if (
                dragData.type === 'draw' &&
                (fieldCard.type === CardType.Draw || dragData.color === S2CCardColor[fieldCard.color] || fieldCard.color === CardColor.Any)
              ) {
                setSelectSubCardEventData({
                  handCardId: dragData.id,
                  accountId: accountId,
                });

                setOpenSelectSubCard(true);
              }
              if (
                dragData.type === 'skip' &&
                (fieldCard.type === CardType.Skip || dragData.color === S2CCardColor[fieldCard.color] || fieldCard.color === CardColor.Any)
              ) {
                setSelectSubCardEventData({
                  handCardId: dragData.id,
                  accountId: accountId,
                });
                setOpenSelectSubCard(true);
              }
              if (
                dragData.type === 'reverse' &&
                (fieldCard.type === CardType.Reverse || dragData.color === S2CCardColor[fieldCard.color] || fieldCard.color === CardColor.Any)
              ) {
                setPutCard({
                  handCardId: dragData.id,
                  where: { id: accountId },
                });
              }
            }
          }
        }}
      >
        <div className="flex h-screen w-full select-none flex-col items-center justify-end space-y-10">
          <div className="flex h-[28rem] items-center justify-center space-x-10">
            {/* <Log logData={dummyLog} /> */}
            <p className="h-28 w-60 rounded-xl text-center text-3xl font-bold leading-[7rem] outline outline-2 outline-slate-7">
              {accountRoomData.gameState === UserGameState.Finished && 'あがり!'}
              {accountRoomData.gameState !== UserGameState.Finished && (accountRoomData.isMyTurn ?? false ? 'あなたのターン' : '他の人のターン')}
            </p>
            <Deck deckNum={roomStatus.deckCards.length} isMyTarn={accountRoomData.isMyTurn ?? false} />
            <TableCards
              cards={roomStatus.fieldCards.map((card) => {
                if (card.type === CardType.Number) {
                  return {
                    id: card.id,
                    type: S2CCardType[card.type],
                    value: card.number ?? 0,
                    color: S2CCardColor[card.color],
                  };
                }

                return {
                  id: card.id,
                  type: S2CCardType[card.type],
                  color: S2CCardColor[card.color],
                  value: null,
                };
              })}
            />
            <PlayerList
              playerList={roomStatus.attenders.map((attender) => ({
                id: attender.id,
                handCount: attender.handCards.length,
                isTurn: attender.isMyTurn ?? false,
                iconEmoji: attender.iconEmoji,
                name: attender.name,
                iconBackgroundColor: S2CBackgroundColor[attender.iconBackgroundColor],
              }))}
            />
          </div>
          <Hand
            isMyTarn={accountRoomData.isMyTurn ?? false}
            cards={accountRoomData.handCards.map((card) => {
              if (card.type === CardType.Number) {
                return {
                  id: card.id,
                  type: S2CCardType[card.type],
                  value: card.number ?? 0,
                  color: S2CCardColor[card.color],
                };
              }

              return {
                id: card.id,
                type: S2CCardType[card.type],
                color: S2CCardColor[card.color],
                value: null,
              };
            })}
          />
        </div>
        {openSelectSubCard && (
          <SelectSubcard
            closeValue={false}
            closeSetter={setOpenSelectSubCard}
            subcard={[0, 1, 2, 3]}
            handCardId={selectSubCardEventData.handCardId}
            accountId={selectSubCardEventData.accountId}
          />
        )}
        <DndOverlay />
      </DndContext>
    );
  }

  if (roomStatus.gameState === RoomGameState.Finished) {
    getResult();
    if (resultData === undefined) {
      return (
        <div className="flex h-screen w-screen items-center justify-center text-6xl font-bold text-slate-11">
          <p>読み込み中...</p>
        </div>
      );
    }
    return (
      <Result
        resultData={resultData.getResult.map((r) => ({
          name: r.name,
          iconBackgroundColor: S2CBackgroundColor[r.iconBackgroundColor],
          iconEmoji: r.iconEmoji,
        }))}
        closeButtonEvent={() => router.push('/' as Route)}
      />
    );
  }

  return <div>{JSON.stringify(roomStatus)}</div>;
};
