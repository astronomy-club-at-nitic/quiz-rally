import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { HiGift } from 'react-icons/hi';

type GiftIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const GiftIcon = ({ ...props }: GiftIconProps): ReactNode => <HiGift {...props} />;
