import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type AnswerStatusIconProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export const AnswerStatusIcon = ({ ...props }: AnswerStatusIconProps): ReactNode => (
  <div {...props}>
    <p>hoge</p>
  </div>
);
