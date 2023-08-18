'use client';

import { UrqlProvider } from '@urql/next';
import { ssr, urqlClient } from '@/infra/urql';
import { RootPage } from '@/module/root/ui/page';

export const Root = () => (
  <UrqlProvider client={urqlClient} ssr={ssr}>
    <RootPage />
  </UrqlProvider>
);

export default Root;
