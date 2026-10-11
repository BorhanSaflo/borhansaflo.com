import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "py-[3px] px-[6px] rounded-base whitespace-nowrap text-[0.8rem] border border-tag-border text-primary-ink",
  {
    variants: {
      variant: {
        tag: "bg-tag",
        title: "select-none flex items-center justify-center gap-[5px] no-underline bg-title-tag",
        titleLink:
          "select-none flex items-center justify-center gap-[5px] no-underline bg-title-tag pressable hover:bg-title-tag-hover",
      },
    },
    defaultVariants: {
      variant: "tag",
    },
  }
);

function Badge({
  className,
  variant,
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">({ className: cn(badgeVariants({ variant }), className) }, props),
    render,
  });
}

export { Badge, badgeVariants };
