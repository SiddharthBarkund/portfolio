"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

const expTechMap: Record<string, string[]> = {
  wizlate: ["QA Testing", "Chatbot Validation", "User Experience", "Web Development"],
  thiranex: ["Python", "Pandas", "NumPy", "Machine Learning", "EDA", "Data Visualization"],
  "dream-tech": ["Python", "Workflow Automation", "OOP", "CLI Tooling", "Git"],
};

export function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExp = experiences.find((exp) => exp.id === activeId) || experiences[0];

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional experience that has shaped my expertise in AI and software development"
    >
      {/* Desktop Layout - Side-by-side Accordion */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
        {/* Left Column - Tabs (4 cols) */}
        <div className="col-span-4 space-y-3">
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-accent/5 border-accent shadow-sm shadow-accent/5"
                    : "border-card-border bg-card hover:border-accent/40"
                }`}
              >
                <div className="space-y-1">
                  <h4 className={`font-bold transition-colors ${isActive ? "text-accent" : "text-foreground"}`}>
                    {exp.company}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">{exp.role}</p>
                </div>
                <ArrowRight
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isActive ? "text-accent translate-x-1" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column - Detail Card (8 cols) */}
        <div className="col-span-8 h-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="h-full border-accent/20 bg-card/75 p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Detail Header */}
                  <div className="flex items-start justify-between border-b border-card-border/60 pb-5">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-foreground leading-tight">
                        {activeExp.role}
                      </h3>
                      <p className="flex items-center gap-1.5 text-accent font-semibold text-sm">
                        <Briefcase className="h-4 w-4" />
                        {activeExp.company}
                      </p>
                    </div>

                    <div className="text-right space-y-1 shrink-0">
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        <Calendar className="h-3.5 w-3.5" />
                        {activeExp.duration}
                      </span>
                      <p className="flex items-center gap-1 justify-end text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {activeExp.type}
                      </p>
                    </div>
                  </div>

                  {/* Bullet accomplishments */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      Key Accomplishments
                    </h4>
                    <ul className="space-y-3">
                      {activeExp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech stack badge list */}
                <div className="pt-6 border-t border-card-border/60 mt-6">
                  <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-3">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expTechMap[activeExp.id]?.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout - Collapsible vertical accordion stack */}
      <div className="lg:hidden space-y-4">
        {experiences.map((exp) => {
          const isOpen = exp.id === activeId;
          return (
            <div
              key={exp.id}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                isOpen ? "border-accent bg-accent/5 shadow-sm shadow-accent/5" : "border-card-border bg-card"
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => setActiveId(isOpen ? "" : exp.id)}
                className="w-full text-left p-5 flex items-center justify-between cursor-pointer"
              >
                <div className="space-y-1">
                  <h4 className={`font-bold transition-colors ${isOpen ? "text-accent" : "text-foreground"}`}>
                    {exp.company}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">{exp.role}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    isOpen ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {exp.duration}
                </span>
              </button>

              {/* Accordion Body Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 border-t border-card-border/40 pt-4 space-y-4">
                      {/* Sub-info */}
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 font-medium text-accent">
                          <Briefcase className="h-3.5 w-3.5" />
                          {exp.role}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.type}
                        </span>
                      </div>

                      {/* Accomplishments */}
                      <ul className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="pt-4 border-t border-card-border/40">
                        <div className="flex flex-wrap gap-1.5">
                          {expTechMap[exp.id]?.map((tech) => (
                            <Badge key={tech} variant="accent" className="text-[10px] px-2 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
