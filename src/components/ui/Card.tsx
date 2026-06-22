import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "glass-card-hover",
        glow && "pulse-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
