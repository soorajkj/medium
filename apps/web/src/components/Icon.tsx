import { icons as lucideIcons, type LucideProps } from "lucide-react";

const icons = { ...lucideIcons };

export type IconTypes = keyof typeof icons;

type IconProps = LucideProps & {
  name: IconTypes;
};

export default function Icon(props: IconProps) {
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
