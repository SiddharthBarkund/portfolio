"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-20 px-4 sm:px-6 lg:px-8", className)}
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
              <span className="gradient-text">.</span>
            </h2>
            {subtitle && (
              <p className="mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg">
                {subtitle}
              </p>
            )}
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent-light to-accent-dark" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
