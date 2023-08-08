'use client';

import { AnimatePresence } from 'framer-motion';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type PageTransitionAnimationProviderProps = ComponentPropsWithoutRef<typeof AnimatePresence>;

export const PageTransitionAnimationProvider = ({ children, ...props }: PageTransitionAnimationProviderProps): ReactNode => (
  <AnimatePresence mode="wait" onExitComplete={() => window?.scrollTo(0, 0)} {...props}>
    {children}
  </AnimatePresence>
);
