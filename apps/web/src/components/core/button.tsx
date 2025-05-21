import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyle>;

export default function Button(props: ButtonProps) {
  const { type = "button", children, className, ...rest } = props;

  return (
    <button type={type} className={cn(buttonStyle({ className }))} {...rest}>
      {children}
    </button>
  );
}

const buttonStyle = tv({
  base: [
    "bg-neutral-950 text-white px-4 rounded-full py-2 text-base cursor-pointer hover:bg-neutral-900 disabled:opacity-50",
  ],
});
