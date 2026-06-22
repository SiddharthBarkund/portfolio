"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  BarChart3,
  Sparkles,
  Code2,
  Target,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { careerGoals } from "@/data/career-goals";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Brain,
  BarChart3,
  Sparkles,
  Code2,
};

export function CareerGoals() {
  return (
    <SectionWrapper
      id="career-goals"
      title="Career Goals"
      subtitle="The roles I'm working towards and the impact I want to make"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {careerGoals.map((goal, index) => {
          const Icon = iconMap[goal.icon] || Target;
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="glass-card glass-card-hover h-full p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark shadow-md shadow-accent/15">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-semibold">{goal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
