import { tv, type VariantProps } from "tailwind-variants";

export type ContainerProps = React.DetailsHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles>;

export function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={containerStyles({ className })} {...rest}>
      {children}
    </div>
  );
}

export const containerStyles = tv({
  base: ["w-full mx-auto px-6"],
});
