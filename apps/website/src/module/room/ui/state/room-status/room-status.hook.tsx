// import { useQuery, useSubscription } from '@urql/next';
// import { useMemo } from 'react';
// import {
//   FindRoomDocument,
//   UpdatedRoomDocument,
//   type FindRoomQuery,
//   type FindRoomQueryVariables,
//   type UpdatedRoomSubscription,
//   type UpdatedRoomSubscriptionVariables,
//   type RoomWhereUniqueInput,
// } from '#/src/infra/graphql/generated/graphql';

// type Props = {
//   roomId: string;
// };

// const useRoomStatus = ({ roomId }: Props) => {
//   // Sample query
//   const [initialResult] = useQuery<FindRoomQuery, FindRoomQueryVariables>({
//     query: FindRoomDocument,
//     variables: {
//       where: { id: roomId },
//     },
//   });

//   // Sample subscription
//   const [updatedResult] = useSubscription<UpdatedRoomSubscription, UpdatedRoomSubscriptionVariables>({
//     query: UpdatedRoomDocument,
//     variables: {
//       where: { id: roomId },
//     },
//   });

//   const result = useMemo<RoomWhereUniqueInput | undefined>(() => {
//     if (initialResult.error) {
//       return undefined;
//     }
//     if (updatedResult.error) {
//       return undefined;
//     }
//     if (initialResult.data !== undefined) {
//       return initialResult.data.findRoom;
//     }
//     if (updatedResult.data !== undefined) {
//       return updatedResult.data;
//     }
//     return undefined;
//   }, [data, subscriptionData]);

//   console.log(result?.id);

//   return result;
// };

// export { useRoomStatus };
