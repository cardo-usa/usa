import type { fonts } from '@usa/design-token';
import { Chango, M_PLUS_Rounded_1c } from 'next/font/google';

// HACK: Since SWC forces argument properties to be written in literals, fonts cannot be used interchangeably.
// Therefore, the consistency of variable is only ensured by generics.
const chango = Chango<(typeof fonts)['chango']['variable']>({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--chango',
});

const mPlusRounded1c = M_PLUS_Rounded_1c<(typeof fonts)['m-plus-rounded-1c']['variable']>({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--m-plus-rounded-1c',
});

export const fontFamily = [chango, mPlusRounded1c].map((font) => font.variable).join(' ');
