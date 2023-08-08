import { PageTransitionAnimationProvider } from '@usa/core/component/page-transition-animation-provider';
import { ThemeProvider } from '@usa/core/component/theme-provider';
import { fontFamily } from '@usa/core/font/family';
import { getBaseUrl } from '@usa/core/util/get-base-url';
import { colors } from '@usa/design-token';
import { cn } from '@usa/tailwind';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/module/root/ui/layout/footer';
import { Header } from '@/module/root/ui/layout/header';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactNode => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        fontFamily,
        'flex min-h-screen flex-col bg-purple-1 font-sans',
        'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-mauve-6 scrollbar-thumb-rounded-full hover:scrollbar-thumb-mauve-7',
        'bg-grid-light-purple-5/50 dark:bg-grid-dark-purple-5/50',
      )}
    >
      <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
        <Header className="fixed left-0 top-0 z-10 grow-0" />
        <PageTransitionAnimationProvider>
          <main className="min-h-full grow">{children}</main>
        </PageTransitionAnimationProvider>
        <Footer className="mt-24" />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

export const generateMetadata = (): Metadata => {
  const title = 'usa.studio | Provide accessible Web for everyone, everywhere.';
  const description =
    'This portfolio presents my projects and thoughts as a frontend developer who maximizes website accessibility from two perspectives: engineer and designer.';

  return {
    metadataBase: getBaseUrl(),
    title: {
      default: title,
      template: '%s | usa.studio',
    },
    description,
    openGraph: {
      title,
      description,
      locale: 'en_US',
      url: getBaseUrl(),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@usa3616',
      creator: '@usa3616',
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: colors.light.purple['7'] },
      { media: '(prefers-color-scheme: dark)', color: colors.dark.purple['7'] },
    ],
  };
};
