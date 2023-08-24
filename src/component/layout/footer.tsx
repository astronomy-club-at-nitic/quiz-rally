import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import AeonLogo from '@/asset/aeon-logo.png';
import AstroClubLogo from '@/asset/astro-club-logo.png';
import QuizRallyIcon from '@/asset/icon.png';
import { Image } from '@/component/common/image';
import { cn } from '@/util/tailwind';

type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children'>;

export const Footer = ({ className, ...props }: FooterProps): ReactNode => (
  <footer className={cn('relative flex w-full flex-col items-stretch justify-start gap-5 bg-blue-3 px-6 py-8', className)} {...props}>
    <ul className="flex flex-col items-stretch justify-start gap-10 tablet:flex-row">
      <li className="flex flex-col items-center justify-start tablet:order-3 tablet:ml-auto">
        <figure className="relative aspect-square w-32">
          <Image src={QuizRallyIcon} alt="クイズラリーのロゴ" className="w-full" />
        </figure>
      </li>
      <li className="flex flex-col items-start justify-start gap-2">
        <figure className="relative w-48">
          <Image src={AeonLogo} alt="イオンのロゴ" className="w-full" />
        </figure>
        <p>イオンモール水戸内原</p>
        <address className="not-italic text-slate-11">〒319-0317 茨城県水戸市内原2丁目1</address>
      </li>
      <li className="flex flex-col items-start justify-start gap-2">
        <figure className="relative aspect-square w-16">
          <Image src={AstroClubLogo} alt="茨城高専天文部のロゴ" className="w-full" />
        </figure>
        <p>茨城高専 天文部</p>
        <address className="not-italic text-slate-11">〒312-8508 茨城県ひたちなか市中根866</address>
      </li>
    </ul>
    <small className="text-center text-lg text-slate-11">©︎ 2023 Astronomy Club at NITIC</small>
  </footer>
);
