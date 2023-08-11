import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from '@/component/common/link';
import { ArrowLeftIcon } from '@/icon/arrow-left-icon';
import { cn } from '@/util/tailwind';

type QuestionHeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children' | 'className'> & {
  outsideClass?: ComponentPropsWithoutRef<'header'>['className'];
};

export const QuestionHeader = ({ outsideClass, ...props }: QuestionHeaderProps): ReactNode => (
  <nav className={cn('z-10 flex w-full items-center bg-blue-3/50 p-3 backdrop-blur-md tablet:px-8 tablet:py-4', outsideClass)} {...props}>
    <Link href="/" className="rounded-full p-2 transition hover:bg-blue-4">
      <ArrowLeftIcon className="h-5 w-5 fill-slate-12" />
      <span className="sr-only">クイズ一覧に戻る</span>
    </Link>
  </nav>
);
