import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { HiArrowLeft } from 'react-icons/hi';

type ArrowLeftIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const ArrowLeftIcon = ({ ...props }: ArrowLeftIconProps): ReactNode => <HiArrowLeft {...props} />;
