import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white hover:bg-brand-hover shadow-sm hover:shadow-md",
        outline:
          "border border-brand text-brand bg-transparent hover:bg-brand-soft",
        ghost: "text-brand hover:bg-brand-soft",
        dark: "bg-topbar text-white hover:bg-black",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-5 text-sm",
        lg: "h-auto min-h-10 px-5 py-3 text-xs font-semibold sm:h-[52px] sm:px-9 sm:py-0 sm:text-lg sm:font-medium",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
