'use client';

import { notFound } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AccessMapSection } from './access-map-section';
import { AnswerExplanationSection } from './answer-explanation-section';
import { AnswerStatus } from './answer-status';
import { QuestionFormSection } from './question-form-section';
import { Image } from '@/component/common/image';
import type { Question } from '@/constant/question';
import { useAnswerStatuses } from '@/state/answer-status';
import { breakpoints } from '@/style/token';

type QuestionPageProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  question: Question;
  hashedToken?: string;
};

export const QuestionPage = ({ question, hashedToken, ...props }: QuestionPageProps): ReactNode => {
  const { answerStatuses } = useAnswerStatuses();
  const currentAnswerStatus = answerStatuses.find((status) => status.questionId === question.id);
  if (currentAnswerStatus === undefined) {
    notFound();
  }

  const isAnswered = currentAnswerStatus.isCorrect !== undefined;
  const isAnswerablePage = hashedToken === question.hashedToken;
  const shouldTransitionToAnswerablePage = !isAnswerablePage && !isAnswered;

  return (
    <section className="flex flex-col items-center gap-12 px-5 py-12 pt-0 laptop:px-48" {...props}>
      <div className="relative flex h-[360px] w-screen items-end justify-center p-3 tablet:h-[480px] tablet:justify-end tablet:p-5">
        <Image
          src={question.thumbnailSrc}
          sizes={`${breakpoints.desktop.mediaQuery} 1280px, 100vw`}
          alt={question.thumbnailAlt}
          priority
          fill
          className="pointer-events-none absolute -z-10 object-cover"
        />
        <h1 className="flex items-center gap-3 rounded-xl bg-blue-3 px-5 py-3">
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
            <path
              d="M23.1538 18.4143C23.1538 15.1356 22.6066 12.647 21.5167 10.9464C20.4223 9.24573 18.8601 8.39653 16.8257 8.39653C14.7322 8.39653 13.1587 9.23437 12.1029 10.9123C11.0494 12.5903 10.5158 15.0448 10.4999 18.2781V19.7971C10.4999 23.044 11.0335 25.5348 12.1029 27.265C13.1746 28.9951 14.764 29.858 16.8711 29.858C18.8896 29.858 20.4382 29.0065 21.5167 27.2968C22.5929 25.5916 23.1379 23.1371 23.1538 19.9333V18.4143ZM31.2211 19.7971C31.2211 22.8487 30.7148 25.5121 29.7066 27.7849C28.6962 30.06 27.3044 31.8833 25.5265 33.2593L30.8374 37.4735L25.933 41.6445L18.8601 35.9317C18.1971 36.0226 17.5341 36.068 16.8711 36.068C14.0692 36.068 11.5852 35.4186 9.41683 34.1198C7.24616 32.8211 5.55459 30.9615 4.34211 28.5433C3.12962 26.1274 2.50067 23.3482 2.45526 20.2035V18.4597C2.45526 15.2105 3.04788 12.3541 4.22858 9.89284C5.41154 7.42927 7.09858 5.52653 9.29195 4.18008C11.483 2.83591 13.9943 2.16382 16.8257 2.16382C19.614 2.16382 22.1002 2.8291 24.2823 4.15738C26.4688 5.48793 28.1649 7.38159 29.3797 9.83608C30.5899 12.2906 31.2052 15.1038 31.2211 18.2781V19.7971Z"
              className="fill-cyan-8"
            />
            <path
              d="M2.41212 8.41246C2.36444 8.41246 2.31221 8.40111 2.26453 8.37841C2.09651 8.29667 2.02385 8.09231 2.10559 7.92202C2.16009 7.81076 2.21458 7.6995 2.26907 7.59052C2.35535 7.42249 2.55971 7.35665 2.72773 7.44066C2.89575 7.52694 2.9616 7.73356 2.87759 7.90159C2.82309 8.00603 2.77087 8.11275 2.72092 8.21719C2.66188 8.3398 2.53927 8.41246 2.41212 8.41246ZM15.0092 6.91616C13.0225 6.91616 11.5716 7.68815 10.5748 9.27301C9.55987 10.8874 9.03764 13.3055 9.02402 16.4571V17.9738C9.02402 21.1436 9.54625 23.5935 10.5771 25.2624C11.5898 26.8994 13.0543 27.6964 15.0547 27.6964C16.9665 27.6964 18.3924 26.9085 19.4096 25.2942C20.4473 23.648 20.9808 21.2321 20.9967 18.1078V16.5911C20.9967 13.3964 20.4632 10.9441 19.4119 9.30934C18.3765 7.6995 16.937 6.91616 15.0092 6.91616ZM15.0547 28.3776C12.8295 28.3776 11.1288 27.4512 9.99809 25.6211C8.89914 23.8455 8.34285 21.273 8.34285 17.9738V16.4548C8.35874 13.1716 8.91503 10.6331 10.0004 8.90745C11.1152 7.13413 12.8022 6.23272 15.0092 6.23272C17.1572 6.23272 18.8306 7.14321 19.9841 8.93924C21.108 10.6876 21.6779 13.2624 21.6779 16.5911V18.1101C21.662 21.3661 21.0944 23.9046 19.9863 25.6597C18.8488 27.4626 17.189 28.3776 15.0547 28.3776ZM24.1165 40.1618C24.0416 40.1618 23.9644 40.1391 23.9031 40.0869L16.9438 34.4673C16.3171 34.549 15.6836 34.5876 15.0547 34.5876C12.2028 34.5876 9.63707 33.9155 7.42327 32.5918C5.20719 31.2635 3.45885 29.3403 2.22139 26.8767C0.990741 24.4245 0.343629 21.5681 0.298218 18.3871V16.6365C0.298218 15.2083 0.414017 13.8323 0.641074 12.5517C0.672862 12.3655 0.852237 12.2429 1.03615 12.2747C1.22234 12.3088 1.34495 12.4859 1.31089 12.6698C1.09065 13.9118 0.979389 15.2469 0.979389 16.6365V18.3825C1.0248 21.4546 1.64694 24.2111 2.8299 26.5679C4.00833 28.9157 5.67039 30.7458 7.77294 32.0037C9.87775 33.2639 12.3277 33.9042 15.0547 33.9042C15.6995 33.9042 16.3534 33.861 16.9983 33.7725C17.0914 33.7588 17.1845 33.7861 17.2571 33.8451L24.112 39.3785L28.4828 35.6616L23.4989 31.704C23.4149 31.6381 23.3672 31.5405 23.3695 31.4338C23.3695 31.3293 23.4172 31.2294 23.5012 31.1658C25.2268 29.833 26.5982 28.0347 27.5791 25.8232C28.5645 23.6049 29.0641 20.9642 29.0641 17.9738V16.4548C29.0482 13.3532 28.4419 10.5627 27.2567 8.16497C26.0783 5.78087 24.4071 3.91673 22.291 2.62705C20.1702 1.33737 17.7203 0.683442 15.0092 0.683442C12.255 0.683442 9.78012 1.34645 7.6526 2.64976C6.61949 3.28552 5.68855 4.05751 4.88931 4.9453C4.76216 5.08608 4.54645 5.09516 4.40795 4.97028C4.26717 4.84313 4.25809 4.62742 4.38297 4.48665C5.22763 3.5489 6.20851 2.73604 7.29612 2.06849C9.53263 0.697065 12.1279 0 15.0092 0C17.8452 0 20.4155 0.687983 22.6429 2.04351C24.8726 3.40131 26.6323 5.35855 27.8675 7.86299C29.0981 10.3538 29.7294 13.2442 29.7452 16.4548V17.9738C29.7452 21.0595 29.2253 23.7933 28.2013 26.1025C27.2385 28.2709 25.9125 30.0624 24.2573 31.436L29.2321 35.3823C29.3116 35.4481 29.3592 35.5435 29.3615 35.6457C29.3615 35.7479 29.3184 35.8455 29.2389 35.9136L24.3367 40.0824C24.2732 40.1346 24.196 40.1618 24.1165 40.1618Z"
              className="fill-blue-12"
            />
          </svg>
          <span className="text-lg font-bold text-slate-12 tablet:text-xl">ポテチを富士山に持っていくとどうなる？</span>
        </h1>
      </div>
      <p className="text-base text-slate-11">
        あなたは今、まだ開けていないポテトチップスの袋を持っています。さて、それを持ったまま富士山の麓から山頂まで登山した時、袋はどうなっているでしょうか？
      </p>
      {!shouldTransitionToAnswerablePage && (
        <>
          <QuestionFormSection question={question} answerStatus={currentAnswerStatus} />
          {currentAnswerStatus.isCorrect !== undefined && (
            <>
              <AnswerStatus isCorrect={currentAnswerStatus.isCorrect} />
              <AnswerExplanationSection answer={question.answer} />
            </>
          )}
        </>
      )}
      <AccessMapSection question={question} showAttention={shouldTransitionToAnswerablePage} />
    </section>
  );
};
