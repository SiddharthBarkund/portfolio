import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(selector: string) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const el = document.querySelector(selector);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 16;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
