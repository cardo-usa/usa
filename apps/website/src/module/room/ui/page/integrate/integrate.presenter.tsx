'use client';

import { useQuery } from '@urql/next';
import { FindRoomDocument, type FindRoomQuery, type FindRoomQueryVariables } from '#/src/infra/graphql/generated/graphql';

type Props = {
  roomId: string;
};

export const Integrate = ({ roomId }: Props) => {
  // Sample query
  const [{ data }] = useQuery<FindRoomQuery, FindRoomQueryVariables>({
    query: FindRoomDocument,
    variables: {
      where: { id: roomId },
    },
  });

  return <div>{JSON.stringify(data)}</div>;
};
