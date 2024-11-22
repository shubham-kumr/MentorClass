"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export const DotPattern = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 bg-transparent",
        "[background-image:radial-gradient(#07080a_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]",
        isDark &&
          "[background-image:radial-gradient(#1f2937_1.5px,transparent_1.5px)]",
        className
      )}
      {...props}
    />
  )
}

