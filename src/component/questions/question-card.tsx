import type { FC, ComponentPropsWithoutRef } from 'react';
import { AnswerStatusIcon } from './answer-status-icon';
import type { AnswerStatusIconProps } from './answer-status-icon';
import { Image } from '@/component/common/image';
import type { Question } from '@/constant/question';
import { cn } from '@/util/tailwind';

type CardProps = ComponentPropsWithoutRef<'div'> &
  Pick<Question, 'title' | 'thumbnailSrc' | 'thumbnailAlt' | 'id'> &
  Pick<AnswerStatusIconProps, 'status'>;

export const QuestionCard: FC<CardProps> = ({ id, title, thumbnailAlt, thumbnailSrc, status, className, ...props }) => (
  <div className={cn('flex flex-col items-center overflow-hidden rounded-xl bg-slate-3', className)} {...props}>
    <Image {...thumbnailSrc} alt={thumbnailAlt} className="h-64 w-full object-cover" />
    <div className="relative flex flex-col items-stretch justify-start gap-2 px-8 py-6">
      <AnswerStatusIcon status={status} className="absolute -top-16 right-2 z-10 rotate-12" />
      <hgroup className="flex flex-col items-stretch justify-start gap-2">
        <p className="text-slate-11">問題{id}</p>
        <h2 className="text-lg">{title}</h2>
      </hgroup>
    </div>
  </div>
);
