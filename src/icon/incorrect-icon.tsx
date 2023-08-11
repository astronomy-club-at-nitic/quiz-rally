import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type IncorrectIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const IncorrectIcon = ({ ...props }: IncorrectIconProps): ReactNode => <svg {...props} />;
