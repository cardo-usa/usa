import { Fira_Code, Noto_Sans } from 'next/font/google';

const firaCode = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const fontFamily = [firaCode, notoSans].map((font) => font.variable).join(' ');
