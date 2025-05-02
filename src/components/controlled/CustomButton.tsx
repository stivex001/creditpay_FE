import React, { ButtonHTMLAttributes, FC } from "react";
import { Button as HeadlessButton } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Spinner } from "../shared/Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "transparent" | "white";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  label?: string;
  icon?: FC<React.ComponentProps<"svg">>;
}

const CustomButton: FC<ButtonProps> = ({
  label,
  children,
  className,
  type = "button",
  variant = "primary",
  size = "md",
  isLoading = false,
  icon: Icon,
  ...props
}) => {
  const baseStyles =
    "font-bold w-fit h-14 rounded-[20px] text-sm transition-all leading-[140%] flex items-center justify-center gap-x-1 capitalize duration-300 ease-in font-medium disabled:cursor-not-allowed cursor-pointer";
  const variants = {
    primary:
      "bg-[#142B71] text-white border-primary hover:bg-primary/80 active:bg-primary/90 disabled:bg-primary/30",
    secondary:
      "bg-gray-600 text-white hover:bg-secondary/80 active:bg-secondary/90 disabled:bg-secondary/30",
    danger:
      "bg-red-600 border-red-600 text-white hover:bg-red-500 active:bg-red-700 disabled:bg-red-700/30",
    transparent:
      "bg-transparent text-black/90 border hover:text-primary active:text-primary/90 disabled:bg-primary/30",
    white:
      " bg-white text-secondary border hover:text-primary active:text-primary/90 disabled:bg-primary/30",
  };
  const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-1.5 px-4 text-base",
    lg: "py-2.5 px-5 text-lg",
    xl: "py-3 px-6 text-xl",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    isLoading && "opacity-50 cursor-not-allowed ",
    className
  );

  return (
    <HeadlessButton
      type={type}
      className={classes}
      disabled={isLoading}
      {...props}
      // style={{zIndex: 9999999999999}}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Icon && <Icon className="mr-2" />}
          {children}
        </>
      )}
      {label}
    </HeadlessButton>
  );
};

export default CustomButton;
