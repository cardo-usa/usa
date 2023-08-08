import type { ReactNode } from 'react';
import { Hero } from '@/module/root/ui/page/hero';
import { Profile } from '@/module/root/ui/page/profile';

const RootPage = (): ReactNode => (
  <>
    <Hero />
    <Profile />
  </>
);

export default RootPage;
