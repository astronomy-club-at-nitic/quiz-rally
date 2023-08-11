import type { ReactNode } from 'react';
import { QuestionHeader } from '@/component/layout/question-header';

type QuestionIdLayoutProps = {
  children: ReactNode;
};

const QuestionIdLayout = ({ children }: QuestionIdLayoutProps): ReactNode => (
  <>
    <QuestionHeader outsideClass="fixed top-0 left-0" />
    {children}
  </>
);

export default QuestionIdLayout;
