import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type QuestionCardProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export const QuestionCard = ({ ...props }: QuestionCardProps): ReactNode => (
  <div {...props}>
    <p>hoge</p>
  </div>
);
