import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "../utils";

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyle>;

export function Input(props: InputProps) {
  const { className, ...rest } = props;

  return <input className={cn(inputStyle({ className }))} {...rest} />;
}

export const inputStyle = tv({
  base: [
    "border w-full placeholder:text-neutral-400 px-4 py-2 h-11 text-neutral-950 text-base font-normal leading-none outline-none bg-neutral-100 border-neutral-100",
  ],
});
