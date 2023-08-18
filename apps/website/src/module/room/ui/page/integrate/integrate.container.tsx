'use client';

import { UrqlProvider } from '@urql/next';
import { Integrate as IntegratePresenter } from './integrate.presenter';
import { ssr, urqlClient } from '@/infra/urql';

export const Integrate = () => (
  <UrqlProvider client={urqlClient} ssr={ssr}>
    <IntegratePresenter />
  </UrqlProvider>
);
