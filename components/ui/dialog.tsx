"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";

function Dialog(props: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogClose(props: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close {...props} />;
}

function DialogContent({ className, children, ...props }: DialogPrimitive.Popup.Props) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] z-100 transition-opacity duration-250 ease-in-out data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
      <DialogPrimitive.Viewport className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-100">
        <DialogPrimitive.Popup
          className={cn(
            "outline-none z-101 transition-[opacity,transform] duration-200 ease-in-out data-[starting-style]:opacity-0 data-[starting-style]:transform-[translateY(30px)] data-[ending-style]:opacity-0 data-[ending-style]:transform-[translateY(30px)]",
            className
          )}
          {...props}>
          {children}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPrimitive.Portal>
  );
}

function DialogTitle(props: DialogPrimitive.Title.Props) {
  return <DialogPrimitive.Title {...props} />;
}

function DialogDescription(props: DialogPrimitive.Description.Props) {
  return <DialogPrimitive.Description {...props} />;
}

export { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle };
