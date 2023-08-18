import { VerifyCanJoinRoomDocument, type VerifyCanJoinRoomQuery, type VerifyCanJoinRoomQueryVariables } from '@/infra/graphql/generated/graphql';
import { getClient } from '@/infra/urql';
import { Integrate } from '@/module/room/ui/page/integrate';

type RoomIdPageProps = {
  params: {
    roomId: string;
  };
};

const RoomIdPage = async ({ params }: RoomIdPageProps): Promise<JSX.Element> => {
  const { data, error } = await getClient().query<VerifyCanJoinRoomQuery, VerifyCanJoinRoomQueryVariables>(VerifyCanJoinRoomDocument, {
    where: {
      id: params.roomId,
    },
  });

  if (data === null || data?.verifyCanJoinRoom === false) {
    console.error(error);
    throw new Error("You can't join this room cause it does not exist or it is not wanted.");
  }

  return <Integrate roomId={params.roomId} />;
};

export default RoomIdPage;
