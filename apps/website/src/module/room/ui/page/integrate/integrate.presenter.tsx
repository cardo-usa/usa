'use client';

import { useQuery } from '@urql/next';
import { FindRoomDocument, type FindRoomQuery, type FindRoomQueryVariables } from '#/src/infra/graphql/generated/graphql';

export const Integrate = () => {
  // Sample query
  const [{ data }] = useQuery<FindRoomQuery, FindRoomQueryVariables>({
    query: FindRoomDocument,
    variables: {
      where: { id: '64df3eb13fd4bc765b377329' },
    },
  });

  return <div>{JSON.stringify(data)}</div>;
};
