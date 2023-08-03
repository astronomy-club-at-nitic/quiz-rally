import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { QrCodeIcon } from '@/icon/qr-code-icon';
import { cn } from '@/util/tailwind';

type AttentionProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  outsideClass?: ComponentPropsWithoutRef<'div'>['className'];
};

export const Attention = ({ outsideClass, ...props }: AttentionProps): ReactNode => (
  <div className={cn('flex w-fit items-center gap-5 rounded-lg border-2 border-amber-6 bg-amber-3 p-5', outsideClass)} {...props}>
    <QrCodeIcon className="h-6 w-6 shrink-0 fill-slate-12" />
    <p className="text-sm text-slate-12 mobile:text-base">この問題に解答するには、以下の地図に示す場所に設置された QR コードを読み取ってください。</p>
  </div>
);
