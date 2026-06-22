"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Brain,
  Layers,
  Library,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Brain,
  Layers,
  Library,
  Database,
  Wrench,
  Sparkles,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="The tools and technologies I use to bring ideas to life"
    >
      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer",
                activeCategory === category.id
                  ? "bg-accent text-white shadow-md shadow-accent/15"
                  : "border border-card-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground backdrop-blur-sm"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {active.skills.map((skill, index) => {
            const Icon = iconMap[active.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="glass-card glass-card-hover p-4 border border-card-border hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                  {Icon && <Icon className="h-4.5 w-4.5" />}
                </div>
                <span className="font-semibold text-sm text-foreground">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
