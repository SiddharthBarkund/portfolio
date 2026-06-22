import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  download?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  download,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3 text-sm",
    size === "lg" && "px-8 py-4 text-base",
    variant === "primary" &&
      "bg-accent text-white shadow-md shadow-accent/10 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
    variant === "secondary" &&
      "border border-card-border bg-card text-foreground backdrop-blur-sm hover:border-accent/30 hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98]",
    variant === "ghost" &&
      "text-muted-foreground hover:text-foreground hover:bg-muted",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
