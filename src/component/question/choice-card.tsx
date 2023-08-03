'use client';

import { type ComponentPropsWithRef, type ComponentPropsWithoutRef, type ReactNode, useRef } from 'react';
import { Image } from '@/component/common/image';
import type { Choice } from '@/constant/question';
import { breakpoints } from '@/style/token';
import { cn } from '@/util/tailwind';

type ChoiceCardProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
  choice: Choice;
  isSelected: boolean;
  isAnswered: boolean;
  inputProps?: Omit<ComponentPropsWithRef<'input'>, 'className' | 'id'>;
};

export const ChoiceCard = ({ choice, isSelected, isAnswered, inputProps, ...props }: ChoiceCardProps): ReactNode => {
  // TODO: if this isseu is fixed, useId can be used. (https://github.com/vercel/next.js/issues/53110)
  // Ref: https://github.com/vercel/next.js/pull/53216
  // const inputIdBase = useId();
  // const inputId = `${inputIdBase}-${choice.id}`;
  const inputId = `choice-card-input-${choice.id}`;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => {
        const inputElement = inputProps?.ref ? document.getElementById(inputId) : inputRef.current;
        inputElement?.click();
      }}
      className={cn(
        'group relative flex h-60 w-[90vw] cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-xl shadow-xl tablet:w-96',
        isAnswered && !isSelected && 'opacity-50',
        isAnswered && 'cursor-default',
      )}
      {...props}
    >
      <Image
        src={choice.thumbnailSrc}
        sizes={`${breakpoints.tablet.mediaQuery} 384px, 100vw`}
        alt={choice.thumbnailAlt}
        fill
        placeholder="blur"
        className="absolute object-cover"
      />
      <div className="absolute inset-0 flex h-full w-full items-end p-3">
        <div className="flex w-fit items-center gap-2 rounded-xl bg-blue-3 px-4 py-2">
          <input
            id={inputId}
            ref={inputRef}
            type="radio"
            value={choice.id}
            disabled={isAnswered}
            aria-checked={isSelected}
            className={cn(
              'peer h-4 w-4 cursor-pointer appearance-none rounded-full bg-slate-3 outline outline-2 -outline-offset-1 outline-slate-7 transition-all',
              'checked:m-0.5 checked:h-3 checked:w-3 checked:bg-blue-9 checked:outline-1 checked:outline-offset-[3px] checked:outline-blue-9',
              'disabled:cursor-default disabled:bg-slate-3 disabled:outline-slate-7 disabled:checked:bg-blue-9 disabled:checked:outline-blue-9',
              'group-hover:bg-slate-4 group-hover:outline-slate-8 group-hover:checked:bg-blue-9 group-hover:checked:outline-blue-9 group-hover:disabled:bg-slate-3 group-hover:disabled:outline-slate-7 group-hover:disabled:checked:bg-blue-9 group-hover:disabled:checked:outline-blue-9',
            )}
            {...inputProps}
          />
          <label htmlFor={inputId} className="cursor-pointer font-bold text-slate-12 peer-disabled:cursor-default">
            {choice.title}
          </label>
        </div>
      </div>
    </div>
  );
};
