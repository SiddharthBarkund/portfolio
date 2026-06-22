"use client";

import { motion } from "framer-motion";
import { Award, Code2, Brain, BarChart3 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { certifications } from "@/data/certifications";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart3,
  Code2,
  Brain,
};

export function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications validating my expertise"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const Icon = cert.icon ? iconMap[cert.icon] : Award;
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="glass-card glass-card-hover flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  {Icon && <Icon className="h-6 w-6 text-accent" />}
                </div>
                <div>
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cert.date}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
