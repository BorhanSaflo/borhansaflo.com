import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pill =
  "gap-[10px] py-[10px] px-[14px] rounded-base text-center font-semibold leading-none no-underline";

const buttonVariants = cva("flex items-center justify-center select-none pressable", {
  variants: {
    variant: {
      primary: `${pill} shadow-card bg-dark-primary text-secondary hover:bg-dark-secondary`,
      secondary: `${pill} bg-white border border-border shadow-card text-dark-primary hover:bg-light-secondary hover:border-border-muted`,
      transparent: `${pill} text-dark-primary hover:bg-edge-shade`,
      nav: `${pill} relative text-primary hover:bg-dark-secondary`,
      iconDark: "rounded-base text-primary hover:bg-dark-secondary",
      iconLight: "rounded-base p-[8px] text-dark-primary hover:bg-light-secondary",
      bare: "",
    },
  },
});

function Button({
  className,
  variant,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(
        "m-0 appearance-none border-0 bg-transparent [font-family:inherit] text-[length:inherit]",
        buttonVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
