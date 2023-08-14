import type { fonts } from '@usa/design-token';
import { Noto_Sans } from 'next/font/google';

// HACK: Since SWC forces argument properties to be written in literals, fonts cannot be used interchangeably.
// Therefore, the consistency of variable is only ensured by generics.
const notoSans = Noto_Sans<(typeof fonts)['noto-sans']['variable']>({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--noto-sans',
});

export const fontFamily = [notoSans].map((font) => font.variable).join(' ');
