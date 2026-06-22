"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Globe,
  TrendingUp,
  Zap,
  Layers,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { achievements } from "@/data/achievements";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Globe,
  TrendingUp,
  Zap,
  Layers,
};

export function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Key milestones and accomplishments in my journey"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon] || Sparkles;
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="glass-card glass-card-hover h-full p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
