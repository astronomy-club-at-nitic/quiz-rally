import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Attention } from './attention';
import { Image } from '@/component/common/image';
import type { Question } from '@/constant/question';
import { MapPinIcon } from '@/icon/map-pin-icon';
import { breakpoints } from '@/style/token';

type AccessMapSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  question: Question;
  showAttention?: boolean;
};

export const AccessMapSection = ({ question, showAttention = false, ...props }: AccessMapSectionProps): ReactNode => (
  <section className="flex flex-col gap-6" {...props}>
    {showAttention && <Attention outsideClass="mx-auto" />}
    <h2 className="flex items-center gap-1">
      <MapPinIcon className="h-7 w-7 fill-slate-12 tablet:h-8 tablet:w-8" />
      <span className="text-xl font-bold text-slate-12 tablet:text-2xl">地図</span>
    </h2>
    <Image
      src={question.mapImageSrc}
      height={1024}
      sizes={`${breakpoints.desktop.mediaQuery} 1280px, 100vw`}
      alt={question.mapImageAlt}
      placeholder="blur"
      className="rounded-xl"
    />
  </section>
);
