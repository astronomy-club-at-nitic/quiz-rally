'use client';

import { notFound } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';
import { AnswerStatusIcon } from './answer-status-icon';
import { Image } from '@/component/common/image';
import type { Question } from '@/constant/question';
import { useAnswerStatuses } from '@/state/answer-status';
import { breakpoints } from '@/style/token';

type QuestionCardProps = Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'children'> & { question: Question };

export const QuestionCard = ({ question, ...props }: QuestionCardProps) => {
  const { answerStatuses } = useAnswerStatuses();
  const currentAnswerStatuses = answerStatuses.find((status) => status.questionId === question.id);
  if (currentAnswerStatuses === undefined) {
    notFound();
  }

  return (
    <div className="group w-72 overflow-hidden rounded-xl bg-slate-3 drop-shadow-xl tablet:w-96" {...props}>
      <Image
        src={question.thumbnail}
        height={256}
        sizes={`${breakpoints.laptop} 256px, 50vw`}
        alt={question.thumbnailAlt ?? '問題をイメージした画像。'}
        placeholder="blur"
        className="h-52 w-full object-cover tablet:h-64"
      />
      <div className="relative flex flex-col gap-1 p-8 pt-4 transition tablet:p-10 tablet:pt-6">
        <p className="text-slate-11">問題 {question.id}</p>
        <p className="text-lg font-semibold text-slate-12 group-hover:text-slate-11 group-hover:underline">{question.title}</p>
        <AnswerStatusIcon isCorrect={currentAnswerStatuses.isCorrect} className="absolute -top-16 right-2 z-10 rotate-12" />
      </div>
    </div>
  );
};
