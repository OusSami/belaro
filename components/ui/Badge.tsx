import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "blue" | "green";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center border-2 border-primary px-3 py-1 text-xs font-extrabold uppercase tracking-wider transition-colors shadow-hard -rotate-2",
        {
          "bg-card text-primary": variant === "default",
          "bg-accent text-primary": variant === "accent",
          "bg-accent-secondary text-white": variant === "blue",
          "bg-accent-tertiary text-primary": variant === "green",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
