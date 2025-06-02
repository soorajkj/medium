"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../utils";
import { tv, VariantProps } from "tailwind-variants";

type AvatarRootProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarRootStyles>;

function AvatarRoot(props: AvatarRootProps) {
  const { size = "md", className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarRootStyles({ size, className }))}
      {...rest}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-neutral-200 text-neutral-950 flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

const avatarRootStyles = tv({
  base: ["relative flex shrink-0 overflow-hidden rounded-full"],
  variants: {
    size: {
      xs: "size-6",
      sm: "size-8",
      md: "size-12",
      lg: "size-16",
      xl: "size-32",
    },
  },
});

const Avatar = { AvatarRoot, AvatarImage, AvatarFallback };

export { Avatar };
