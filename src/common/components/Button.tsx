import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { cn } from "../helpers/tailwind.helper";

type Props = {
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & PropsWithChildren;
const Button: FC<Props> = ({
  children,
  className = "",
  disabled,
  size = "md",
  type = "button",
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(
        "rounded-full bg-gradient-to-r from-primary via-secondary to-extra px-2 py-1 text-sm uppercase tracking-widest shadow shadow-secondary transition-all hover:scale-105 active:scale-95 xs:px-4 xs:py-1.5 sm:px-6 sm:py-2",
        className,
        size === "lg" ? "py-2 sm:py-3" : "",
        size === "sm" ? "px-4 py-1.5" : "",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
