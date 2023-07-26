import { atomWithStorage } from 'jotai/utils';
import { questions } from '@/constant/question';
import { atomKeys } from '@/state/atom-keys';

export type AnswerStatuses = {
  questionId: string;
  choiceTitle: string | undefined;
  isCorrect: boolean | undefined;
}[];

export const AnswerStatusesAtom = atomWithStorage<AnswerStatuses>(
  atomKeys['answer-status'],
  questions.map((question) => ({ questionId: question.id, choiceTitle: undefined, isCorrect: undefined })),
);
