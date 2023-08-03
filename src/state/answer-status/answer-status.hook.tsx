import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { answerStatusesAtom } from './answer-status.atom';

export const useAnswerStatuses = () => {
  const answerStatuses = useAtomValue(answerStatusesAtom);

  return { answerStatuses };
};

export const useAnswerStatusesMutator = () => {
  const setAnswerStatuses = useSetAtom(answerStatusesAtom);

  const setAnswerStatusesById = useCallback(
    (questionId: string, choiceId: string, isCorrect: boolean) => {
      setAnswerStatuses((answerStatuses) =>
        answerStatuses.map((answerStatus) => (answerStatus.questionId === questionId ? { questionId, choiceId, isCorrect } : answerStatus)),
      );
    },
    [setAnswerStatuses],
  );

  return { setAnswerStatusesById };
};
