import { useQuery, useSubscription } from '@urql/next';
import { useMemo } from 'react';
import {
  FindRoomDocument,
  UpdatedRoomDocument,
  type FindRoomQuery,
  type FindRoomQueryVariables,
  type UpdatedRoomSubscription,
  type UpdatedRoomSubscriptionVariables,
} from '#/src/infra/graphql/generated/graphql';

type Props = {
  roomId: string;
};

const useRoomStatus = ({ roomId }: Props) => {
  const [initialResult] = useQuery<FindRoomQuery, FindRoomQueryVariables>({
    query: FindRoomDocument,
    variables: {
      where: { id: roomId },
    },
  });

  const [updatedResult] = useSubscription<UpdatedRoomSubscription, UpdatedRoomSubscription, UpdatedRoomSubscriptionVariables>({
    query: UpdatedRoomDocument,
    variables: {
      where: { id: roomId },
    },
  });

  const result = useMemo(() => {
    if (initialResult.error) {
      return undefined;
    }
    if (updatedResult.error) {
      return undefined;
    }
    if (initialResult.data !== undefined) {
      return initialResult.data.findRoom;
    }
    if (updatedResult.data !== undefined) {
      return updatedResult.data.updatedRoom;
    }
    return undefined;
  }, [initialResult, updatedResult]);

  return result;
};

export { useRoomStatus };
