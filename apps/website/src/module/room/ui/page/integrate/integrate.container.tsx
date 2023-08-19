'use client';

import { UrqlProvider } from '@urql/next';
import { Integrate as IntegratePresenter } from './integrate.presenter';
import { ssr, urqlClient } from '@/infra/urql';

type Props = {
  roomId: string;
};

export const Integrate = ({ roomId }: Props) => (
  <UrqlProvider client={urqlClient} ssr={ssr}>
    <IntegratePresenter roomId={roomId} />
  </UrqlProvider>
);
