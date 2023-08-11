import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type CorrectIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CorrectIcon = ({ ...props }: CorrectIconProps): ReactNode => <svg {...props} />;
