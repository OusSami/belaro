import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "accent" | "outline" | "ghost";
type ButtonSize = "sm" | "default" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-primary hover:bg-accent/90",
  outline: "bg-card text-primary hover:bg-muted",
  ghost: "bg-transparent border-transparent shadow-none hover:bg-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  default: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap font-black uppercase tracking-tight",
      "border-2 border-primary shadow-hard transition-all",
      "hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-y-0 active:shadow-none",
      "disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
