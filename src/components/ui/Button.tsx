import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-400 text-white hover:bg-primary-500 focus-visible:ring-primary-400",
  secondary:
    "bg-secondary-400 text-white hover:bg-secondary-500 focus-visible:ring-secondary-400",
  outline:
    "border-2 border-primary-400 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-400",
  ghost:
    "text-foreground hover:bg-primary-50 focus-visible:ring-primary-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (props.as === "a") {
    const { as: _, ...anchorProps } = rest as Omit<ButtonAsAnchor, keyof ButtonBaseProps>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { as: _, ...buttonProps } = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

export default Button;
