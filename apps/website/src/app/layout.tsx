import { PageTransitionAnimationProvider } from '@usa/core/component/page-transition-animation-provider';
import { ThemeProvider } from '@usa/core/component/theme-provider';
import { fontFamily } from '@usa/core/font/family';
import { getBaseUrl } from '@usa/core/util/get-base-url';
import { colors } from '@usa/design-token';
import { cn } from '@usa/tailwind';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactNode => (
  <html lang="ja" suppressHydrationWarning>
    <head />
    <body className={cn(fontFamily, 'bg-tomato-1 font-sans')}>
      <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
        <PageTransitionAnimationProvider>
          <main className="min-h-screen">{children}</main>
        </PageTransitionAnimationProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

export const generateMetadata = (): Metadata => {
  const title = 'USA | UNO をベースとした全く新しいテーブルカードゲーム';
  const description = 'USA は UNO をベースとした全く新しいテーブルカードゲームです！ブラウザからリンクを共有してみんなで遊びましょう！';

  return {
    metadataBase: getBaseUrl(),
    title: {
      default: title,
      template: '%s | USA',
    },
    description,
    openGraph: {
      title,
      description,
      locale: 'ja_JP',
      url: getBaseUrl(),
    },
    twitter: {
      card: 'summary_large_image',
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: colors.light.tomato['7'] },
      { media: '(prefers-color-scheme: dark)', color: colors.dark.tomato['7'] },
    ],
  };
};
