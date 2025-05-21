import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "../../utils/cn";

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyle>;

export default function Input(props: InputProps) {
  const { className, ...rest } = props;

  return <input className={cn(inputStyle({ className }))} {...rest} />;
}

const inputStyle = tv({
  base: [
    "border rounded-md px-4 py-1 h-10 border-neutral-200 text-base font-normal leading-none",
  ],
});
