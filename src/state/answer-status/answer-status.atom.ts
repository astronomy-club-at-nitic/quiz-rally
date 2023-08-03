import { atomWithStorage } from 'jotai/utils';
import { questions } from '@/constant/question';
import { atomKeys } from '@/state/atom-keys';

export type AnswerStatuses = {
  questionId: string;
  choiceId: string | undefined;
  isCorrect: boolean | undefined;
}[];

export const answerStatusesAtom = atomWithStorage<AnswerStatuses>(
  atomKeys['answer-status'],
  questions.map((question) => ({ questionId: question.id, choiceId: undefined, isCorrect: undefined })),
);
