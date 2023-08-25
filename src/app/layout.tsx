import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { BlessingModal } from '@/component/layout/blessing-modal';
import { Footer } from '@/component/layout/footer';
import { PageTransitionAnimationProvider } from '@/component/layout/page-transition-animation-provider';
import { ThemeProvider } from '@/component/layout/theme-provider';
import { fontFamily } from '@/font/family';
import { colors } from '@/style/token';
import { getBaseUrl } from '@/util/get-base-url';
import { cn } from '@/util/tailwind';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactNode => (
  <html lang="ja" suppressHydrationWarning>
    <head />
    <body className={cn(fontFamily, 'flex min-h-screen w-full flex-col items-stretch justify-between bg-blue-1 font-sans  text-slate-12')}>
      <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
        <PageTransitionAnimationProvider>
          <main>{children}</main>
        </PageTransitionAnimationProvider>
        <div className="fixed bottom-7 right-7">
          <BlessingModal />
        </div>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

export const generateMetadata = (): Metadata => {
  const title = 'QuizRally! | 茨城工業高等専門学校☆天文部 presents 宇宙旅行 in イオンモール水戸内原';
  const description =
    'イオンモール水戸内原と合同で開催するイベント「茨城工業高等専門学校☆天文部 presents 宇宙旅行 in イオンモール水戸内原」で開催される web クイズラリーです。ぜひ現地でクイズに挑戦してみてください！';

  return {
    metadataBase: getBaseUrl(),
    title: {
      default: title,
      template: '%s | QuizRally!',
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
      site: '@nitic_astronomy',
      creator: '@nitic_astronomy',
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: colors.light.blue['6'] },
      { media: '(prefers-color-scheme: dark)', color: colors.dark.blue['6'] },
    ],
  };
};
