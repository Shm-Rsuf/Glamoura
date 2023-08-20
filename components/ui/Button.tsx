import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/library/utils";
import React from "react";

export const buttonVariants = cva(
  "inline-block text-center px-4 py-2 rounded-lg border eq font-medium active:scale-110 disabled:border-gray disabled:text-dark/50 disabled:bg-gray disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        dark: "border-dark bg-dark text-white hover:border-dark/90 hover:bg-dark/90",

        outline:
          "border-dark bg-transparent text-dark hover:bg-dark hover:text-white",

        rose: "border-red bg-red text-white hover:bg-red/90 hover:border-red/90",

        valentine:
          "border-pink bg-pink text-dark hover:bg-pink/90 hover:border-pink/90",

        halloween:
          "border-orange bg-orange text-dark hover:bg-orange/90 hover:border-orange/90",

        success:
          "border-green bg-green text-dark hover:bg-green/90 hover:border-green/90",

        ocean:
          "border-blue bg-blue text-dark hover:bg-blue/90 hover:border-blue/90",

        violet:
          "border-violet bg-violet text-dark hover:bg-violet/90 hover:border-violet/90",

        ghost:
          "border-transparent bg-transparent text-dark hover:border-gray hover:bg-gray",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  type,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
