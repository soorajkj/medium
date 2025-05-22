import { icons as lucideIcons, type LucideProps } from "lucide-react";

export const icons = { ...lucideIcons };

export type IconTypes = keyof typeof icons;

export type IconProps = LucideProps & {
  name: IconTypes;
};

export function Icon(props: IconProps) {
  const { name, strokeWidth = 1, ...rest } = props;
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      aria-hidden={true}
      focusable={false}
      strokeWidth={strokeWidth}
      {...rest}
    />
  );
}
