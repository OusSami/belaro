import * as React from "react"
import { cn } from "@/lib/utils"
import { SITE_NAME } from "@/lib/constants"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* A brutalist/editorial star/flower icon */}
        <path 
          d="M50 0L56.5 38.5L95 25L67 50L95 75L56.5 61.5L50 100L43.5 61.5L5 75L33 50L5 25L43.5 38.5L50 0Z" 
          fill="currentColor" 
        />
      </svg>
      <span className="font-black text-2xl tracking-tighter uppercase leading-none mt-1">
        {SITE_NAME}
      </span>
    </div>
  )
}
