import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import AeonLogo from '@/asset/aeon-logo.png';
import AstroClubLogo from '@/asset/astro-club-logo.png';
import QuizRallyIcon from '@/asset/icon.png';
import { Image } from '@/component/common/image';
import { cn } from '@/util/tailwind';

type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'className' | 'children'>;

export const Footer = ({ ...props }: FooterProps): ReactNode => (
  <div className="-z-10 mt-[-600px] overflow-hidden pt-[684px]">
    <footer className="relative flex w-full flex-col items-stretch justify-start gap-5 bg-blue-3 px-10 py-12" {...props}>
      <ul
        className={cn(
          'relative flex flex-col items-stretch justify-start gap-10 pb-5 tablet:flex-row',
          "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-slate-6 after:content-['']",
        )}
      >
        <li className="flex flex-col items-center justify-start tablet:order-3 tablet:ml-auto">
          <Image src={QuizRallyIcon} width={128} alt="クイズラリーのロゴ" className="h-auto w-32" />
        </li>
        <li className="flex flex-col items-start justify-start gap-2">
          <Image src={AeonLogo} height={64} alt="イオンのロゴ" className="lg:h-16 h-14 w-auto" />
          <p>イオンモール水戸内原</p>
          <address className="not-italic text-slate-11">〒319-0317 茨城県水戸市内原2丁目1</address>
        </li>
        <li className="flex flex-col items-start justify-start gap-2">
          <Image src={AstroClubLogo} height={64} alt="茨城高専天文部のロゴ" className="lg:h-16 h-14 w-auto" />
          <p>茨城高専 天文部</p>
          <address className="not-italic text-slate-11">〒312-8508 茨城県ひたちなか市中根866</address>
        </li>
      </ul>
      <small className="text-center text-slate-11">©︎ 2023 Astronomy Club at NITIC</small>
      <div
        aria-hidden
        className="absolute left-1/2 top-[-200px] -z-50 aspect-square h-[684px] -translate-x-1/2 rounded-full bg-blue-7 blur-[200px]"
      />
    </footer>
  </div>
);
