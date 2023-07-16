import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonVariants = cva("py-2 px-6 tracking-wider rounded-lg duration-300", {
  variants: {
    color: {
      green: "bg-accent1 text-light  hover:bg-accent1/90",
      dark: "bg-dark text-light hover:bg-dark/90",
      light: "bg-light text-dark hover:bg-light/90",
      ghost: "bg-transparent text-dark hover:dark/10",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  placeholder: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  placeholder,
  color,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(buttonVariants({ color }))}
    >
      {placeholder}
    </Link>
  );
};

export default Button;
