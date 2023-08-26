'use client';

import { useEffect, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import ReceptionMapImage from '@/asset/map/4.jpg';
import { Dialog, DialogContent, DialogTrigger } from '@/component/common/dialog';
import { Image } from '@/component/common/image';
import { ConfettiBallIcon } from '@/icon/confetti-ball-icon';
import { GiftIcon } from '@/icon/gift-icon';
import { useAnswerStatuses } from '@/state/answer-status';
import { breakpoints } from '@/style/token';

type BlessingModalProps = Omit<ComponentPropsWithoutRef<typeof Dialog>, 'children' | 'className' | 'open' | 'onOpenChange'>;

export const BlessingModal = ({ ...props }: BlessingModalProps): ReactNode => {
  const { answerStatuses } = useAnswerStatuses();
  const isAllCorrect = answerStatuses.every((status) => status.isCorrect);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isAllCorrect) {
      setOpen(true);
    }
  }, [isAllCorrect]);

  if (!isAllCorrect) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen {...props}>
      <DialogTrigger asChild>
        <button className="rounded-full bg-blue-3 p-3 shadow-lg transition hover:bg-blue-4">
          <GiftIcon className="h-7 w-7 fill-slate-12" />
        </button>
      </DialogTrigger>
      <DialogContent display="flex-col-center">
        <ConfettiBallIcon className="h-44 w-44 tablet:h-[280px] tablet:w-[280px]" />
        <p className="font-sans-rounded text-4xl font-extrabold tracking-widest text-tomato-9 laptop:text-5xl">おめでとう！</p>
        <p className="text-slate-11 tablet:w-[496px]">
          おめでとうございます！
          <br />
          すべてのクイズに正解したあなたには景品が贈られます！
          <br />
          以下に示す受付へ行き、スタッフにトップページを見せてください！
        </p>
        <Image
          src={ReceptionMapImage}
          width={496}
          sizes={`${breakpoints.tablet.mediaQuery} 496px, 100vw`}
          // TODO; alt 属性に地図の説明を含める
          alt="受付の場所を示した地図の画像。"
          placeholder="blur"
          className="w-full rounded-xl"
        />
      </DialogContent>
    </Dialog>
  );
};
