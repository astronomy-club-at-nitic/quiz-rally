import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { PartyPopperIcon } from '@/icon/party-popper-icon';

type AnswerStatusProps = Omit<ComponentPropsWithoutRef<'p'>, 'children' | 'className'> & {
  isCorrect: boolean;
};

export const AnswerStatus = ({ isCorrect, ...props }: AnswerStatusProps): ReactNode => (
  <p className="relative py-8 font-sans-rounded text-5xl font-extrabold tracking-widest" {...props}>
    {isCorrect ? (
      <>
        <PartyPopperIcon className="absolute -left-20 top-14 h-14 w-14" />
        <span className="mr-[-18px] whitespace-nowrap text-tomato-9">アタリ！</span>
        <PartyPopperIcon className="absolute -right-20 top-14 h-14 w-14 scale-x-[-1]" />
      </>
    ) : (
      <span className="text-cyan-9">ハズレ...</span>
    )}
  </p>
);
