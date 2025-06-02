import { cn } from "@medium/design/utils";
import type { ComponentProps } from "react";
import {} from "@tiptap/react";

type ToolbarButtonProps = ComponentProps<"button"> & {};

export default function ToolbarButton(props: ToolbarButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={cn(
        "size-10 *:size-5 flex items-center justify-center rounded-md cursor-pointer disabled:cursor-auto disabled:opacity-20 text-white aria-checked:text-green-200",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
