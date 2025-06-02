import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import * as SlotPrimitive from "@radix-ui/react-slot";
import { cn } from "../utils";

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyle> & {
    asChild?: boolean;
  };

export function Button(props: ButtonProps) {
  const {
    asChild = false,
    iconOnly = false,
    type = "button",
    children,
    variant = "gray",
    size = "md",
    width = "auto",
    className,
    ...rest
  } = props;

  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return (
    <Comp
      type={type}
      className={cn(buttonStyle({ variant, size, width, iconOnly, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export const buttonStyle = tv({
  base: [
    "inline-flex justify-center items-center rounded-none text-base cursor-pointer disabled:opacity-50 transition border border-transparent gap-2",
  ],
  variants: {
    size: {
      sm: "h-8 py-1.5 px-3 text-sm font-light rounded-3xl",
      md: "h-10 py-2 px-3 text-sm font-light",
      lg: "h-12 py-2 px-3 text-sm font-light",
    },
    width: {
      full: "w-full",
      auto: "w-auto",
    },
    iconOnly: {
      true: "aspect-square p-0",
      false: "aspect-auto",
    },
    variant: {
      outline: "border-neutral-800",
      gray: "bg-neutral-100 text-neutral-700",
      transparent: "bg-transparent hover:bg-neutral-100",
      red: "bg-red-600 text-white",
      green: "bg-green-600 text-white",
      dark: "bg-neutral-950 text-white",
    },
  },
});
