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
    "border w-full rounded-full placeholder:text-neutral-500 px-4 py-2 h-11 border-neutral-100 text-neutral-950 text-sm font-normal  leading-none bg-neutral-100",
  ],
});
