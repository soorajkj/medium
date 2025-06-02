import { cn } from "@medium/design/utils";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface ToolbarSeparatorProps
  extends ComponentProps<"div">,
    VariantProps<typeof toolbarSeparatorStyle> {}

export default function ToolbarSeparator(props: ToolbarSeparatorProps) {
  const { orientation = "horizontal", className, ...rest } = props;

  return (
    <div
      role="separator"
      className={cn(toolbarSeparatorStyle({ orientation, className }))}
      {...rest}
    />
  );
}

const toolbarSeparatorStyle = tv({
  base: ["shrink-0 flex-1 relative bg-neutral-700"],
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
});
