import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Answer } from '@/constant/question';

type AnswerExplanationSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  answer: Answer;
};

export const AnswerExplanationSection = ({ answer, ...props }: AnswerExplanationSectionProps): ReactNode => (
  <section className="flex flex-col gap-7" {...props}>
    <h2 className="text-xl font-bold text-slate-12 tablet:text-2xl">解答と解説</h2>
    <div className="flex flex-col gap-4">
      <p className="flex items-center gap-3">
        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          <path
            d="M38.8589 40H30.6751L27.4219 31.5365H12.5288L9.45388 40H1.47314L15.985 2.74048H23.941L38.8589 40ZM25.0081 25.2591L19.8745 11.433L14.8412 25.2591H25.0081Z"
            className="fill-cyan-8"
          />
          <path
            d="M9.70884 12.3309L10.7134 9.75178M12.6979 4.65727L14.5119 0H22.4679L37.3857 37.2595H29.202L25.9488 28.796H11.0557L7.98073 37.2595H0L7.28196 18.5627M23.5349 22.5186L18.4014 8.69254L13.368 22.5186H23.5349Z"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-blue-12"
          />
        </svg>
        <span className="text-lg font-bold text-slate-12 tablet:text-xl">{answer.title}</span>
      </p>
      <p className="text-base text-slate-11">{answer.content}</p>
    </div>
  </section>
);
