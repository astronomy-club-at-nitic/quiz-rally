import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { PiCheckCircleLight } from 'react-icons/pi';

type CheckIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CheckIcon = ({ ...props }: CheckIconProps): ReactNode => <PiCheckCircleLight {...props} />;
