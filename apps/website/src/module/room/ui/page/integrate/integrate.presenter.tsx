'use client';

import { UrqlProvider } from '@urql/next';
import { ssr, urqlClient } from '@/infra/urql';

export const Integrate = () => (
  <UrqlProvider client={urqlClient} ssr={ssr}>
    {/* TODO: ここで状態によって出しわけする */}
  </UrqlProvider>
);
