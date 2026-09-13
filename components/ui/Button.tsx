import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "accent" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "div" : "button";
    return (
      // @ts-ignore
      <Comp
        ref={ref as any}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          "border-2 border-primary rounded-none shadow-hard active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:-translate-y-1 hover:shadow-hard-lg",
          {
            "bg-primary text-primary-foreground": variant === "default",
            "bg-accent text-primary": variant === "accent",
            "bg-card text-primary": variant === "outline",
            "border-transparent shadow-none hover:shadow-none active:translate-x-0 active:translate-y-0 hover:bg-muted text-primary": variant === "ghost",
            "h-12 px-6 py-2": size === "default",
            "h-10 px-4 text-sm": size === "sm",
            "h-14 px-10 text-lg": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
