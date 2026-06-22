"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Timer } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { roadmapItems } from "@/data/roadmap";
import { cn } from "@/lib/utils";

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    label: "Completed",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  "in-progress": {
    icon: Timer,
    label: "In Progress",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/30",
  },
  upcoming: {
    icon: Circle,
    label: "Upcoming",
    color: "text-muted-foreground",
    bg: "bg-muted",
    border: "border-card-border",
  },
};

export function Roadmap() {
  const categories = [...new Set(roadmapItems.map((item) => item.category))];

  return (
    <SectionWrapper
      id="roadmap"
      title="Learning Roadmap"
      subtitle="Technologies and concepts I'm currently learning and planning to master"
    >
      <div className="space-y-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.4 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {roadmapItems
                .filter((item) => item.category === category)
                .map((item, index) => {
                  const config = statusConfig[item.status];
                  const StatusIcon = config.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.1 + index * 0.05,
                        duration: 0.3,
                      }}
                      className={cn(
                        "glass-card inline-flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-105",
                        config.border,
                        "border"
                      )}
                    >
                      <StatusIcon className={cn("h-4 w-4", config.color)} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        {Object.entries(statusConfig).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2 text-sm">
            <config.icon className={cn("h-4 w-4", config.color)} />
            <span className="text-muted-foreground">{config.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
