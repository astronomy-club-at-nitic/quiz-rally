'use client';

import { type ComponentPropsWithoutRef, useCallback, useEffect, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { ChoiceCard } from './choice-card';
import type { Question } from '@/constant/question';
import { CheckIcon } from '@/icon/check-icon';
import { type AnswerStatuses, useAnswerStatusesMutator } from '@/state/answer-status';
import { digest } from '@/util/digest';
import { cn } from '@/util/tailwind';

type QuestionFormData = {
  choiceId: string;
};

type QuestionFormSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'> & {
  question: Question;
  answerStatus: AnswerStatuses[number];
};

export const QuestionFormSection = ({ question, answerStatus, ...props }: QuestionFormSectionProps): ReactNode => {
  const { setAnswerStatusesById } = useAnswerStatusesMutator();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isDirty },
  } = useForm<QuestionFormData>({
    defaultValues: answerStatus.choiceId !== undefined ? { choiceId: answerStatus.choiceId } : undefined,
  });

  const [selectingChoiceId] = watch(['choiceId']);

  const onSubmit = handleSubmit(
    useCallback(
      async (formData) => {
        const isCorrect = (await digest(formData.choiceId)) === question.answer.hashedChoiceId;

        setAnswerStatusesById(question.id, formData.choiceId, isCorrect);
      },
      [question, setAnswerStatusesById],
    ),
  );

  useEffect(() => {
    if (answerStatus.choiceId !== undefined) {
      setValue('choiceId', answerStatus.choiceId);
    }
  }, [answerStatus.choiceId, setValue]);

  return (
    <section className="flex flex-col gap-6" {...props}>
      <h2 className="text-2xl font-bold">解答の選択肢</h2>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-12">
        <fieldset className="flex flex-col flex-wrap gap-6 tablet:flex-row">
          {question.choices.map((choice) => (
            <ChoiceCard
              key={choice.id}
              choice={choice}
              isSelected={selectingChoiceId === choice.id}
              isAnswered={answerStatus.isCorrect !== undefined}
              inputProps={register('choiceId', {
                required: true,
              })}
            />
          ))}
        </fieldset>
        {answerStatus.isCorrect ?? (
          <button
            disabled={isDirty === false}
            className={cn(
              'group flex w-fit items-center gap-2 rounded-xl bg-blue-3 px-8 py-3 shadow-lg transition',
              'hover:bg-blue-4',
              'disabled:cursor-not-allowed disabled:bg-slate-4 disabled:shadow-none',
            )}
          >
            <span className="font-bold text-slate-12 transition group-disabled:text-slate-11">答える</span>
            <CheckIcon className="h-6 w-6 fill-slate-12 transition group-disabled:fill-slate-11" />
          </button>
        )}
      </form>
    </section>
  );
};
