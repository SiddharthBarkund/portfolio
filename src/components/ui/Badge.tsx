import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-muted text-muted-foreground",
        variant === "accent" &&
          "bg-accent/10 text-accent dark:bg-accent/10 dark:text-accent",
        variant === "outline" &&
          "border border-card-border text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
