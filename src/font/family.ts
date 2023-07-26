import { M_PLUS_Rounded_1c, Noto_Sans_JP } from 'next/font/google';

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['800'],
  subsets: ['latin'],
  variable: '--font-m-plus-rounded-1c',
});

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const fontFamily = [mPlusRounded1c, notoSansJp].map((font) => font.variable).join(' ');
