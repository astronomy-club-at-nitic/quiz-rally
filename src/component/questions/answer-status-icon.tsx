import type { ComponentPropsWithoutRef } from 'react';
import { CorrectIcon } from '@/icon/correct-icon';
import { IncorrectIcon } from '@/icon/incorrect-icon';
import { cn } from '@/util/tailwind';

export type AnswerStatusIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'> & {
  isCorrect: boolean | undefined;
};

export const AnswerStatusIcon = ({ isCorrect, className, ...props }: AnswerStatusIconProps) =>
  isCorrect ? (
    <>
      <CorrectIcon className={cn('aspect-square h-24 w-24', className)} {...props} />
      <p className="sr-only">正解</p>
    </>
  ) : isCorrect === false ? (
    <>
      <IncorrectIcon className={cn('aspect-square h-24 w-24', className)} {...props} />
      <p className="sr-only">不正解</p>
    </>
  ) : (
    <p className="sr-only">未回答</p>
  );
