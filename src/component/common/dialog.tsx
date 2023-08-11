'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef, type ComponentPropsWithRef, type ElementRef } from 'react';
import { CrossIcon } from '@/icon/cross-icon';
import { cn, tv } from '@/util/tailwind';

export const Dialog = DialogPrimitive.Root;

type DialogTriggerProps = Omit<ComponentPropsWithRef<typeof DialogPrimitive.Trigger>, 'className'>;

export const DialogTrigger = forwardRef<ElementRef<typeof DialogPrimitive.Trigger>, Omit<DialogTriggerProps, 'ref'>>(
  ({ children, ...props }, ref) => (
    <DialogPrimitive.Trigger ref={ref} {...props}>
      {children}
    </DialogPrimitive.Trigger>
  ),
);

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

type DialogOverlayProps = Omit<ComponentPropsWithRef<typeof DialogPrimitive.Overlay>, 'children' | 'className'>;

const DialogOverlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, Omit<DialogOverlayProps, 'ref'>>(({ ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    )}
    {...props}
  />
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogContentVariant = tv({
  variants: {
    display: {
      block: 'block',
      'flex-col-center': 'flex flex-col gap-6 justify-center items-center',
    },
  },
});

type DialogContentProps = Omit<ComponentPropsWithRef<typeof DialogPrimitive.Overlay>, 'className'> & {
  display?: keyof typeof dialogContentVariant.variants.display;
};

export const DialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, Omit<DialogContentProps, 'ref'>>(
  ({ display = 'block', children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-1/2 top-1/2 z-50 w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-blue-1 p-10 shadow-2xl tablet:w-auto',
          'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          dialogContentVariant({ display }),
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-6 top-6 rounded-full p-2 transition hover:bg-blue-4">
          <CrossIcon className="h-6 w-6 fill-slate-12" />
          <span className="sr-only">閉じる</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
);

DialogContent.displayName = DialogPrimitive.Content.displayName;
