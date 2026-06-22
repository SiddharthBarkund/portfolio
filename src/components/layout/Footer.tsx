"use client";

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-surface/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Branding */}
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark text-sm font-bold text-white">
              S
            </span>
            Siddharth Barkund
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SiddharthBarkund"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-barkund-707378264/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-card-border pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Siddharth Barkund. All rights reserved.</p>
          <p className="text-center font-medium text-foreground/80 mt-1">
            Turning data into intelligent solutions.
          </p>

        </div>
      </div>
    </footer>
  );
}
