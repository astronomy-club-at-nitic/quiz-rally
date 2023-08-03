import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BsQrCodeScan } from 'react-icons/bs';

type QrCodeIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const QrCodeIcon = ({ ...props }: QrCodeIconProps): ReactNode => <BsQrCodeScan {...props} />;
