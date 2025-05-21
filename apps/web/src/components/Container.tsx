import { tv, type VariantProps } from "tailwind-variants";

type ContainerProps = React.DetailsHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles>;

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={containerStyles({ className })}
      // style={{ maxWidth: '1380px' }}
      {...rest}
    >
      {children}
    </div>
  );
}

const containerStyles = tv({
  base: ["w-full mx-auto px-4 max-w-screen-xl"],
});
