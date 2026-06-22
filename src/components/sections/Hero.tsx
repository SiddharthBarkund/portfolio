"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Download, Mail, Terminal, Cpu, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { ParticleGrid } from "@/components/ui/ParticleGrid";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "System: Initializing Agentic AI Context...",
  ]);

  useEffect(() => {
    const logs = [
      "Agent: Loading model 'Gemini-2.0-Flash'...",
      "Agent: Connected to 'PipeWise-AI' database.",
      "User: 'Query customer churn factors from dataset'",
      "Agent: Analyzing columns: ['churn', 'tenure', 'contract']",
      "Agent: Training Random Forest classifier...",
      "Agent: Feature Importance: tenure (42%), contract (28%)",
      "Agent: Churn prediction accuracy: 89.4%",
      "System: Completed processing. Visualization ready."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines((prev) => {
        const next = [...prev, logs[i]];
        if (next.length > 6) next.shift(); // Keep last 6 lines
        return next;
      });
      i = (i + 1) % logs.length;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background */}
      <ParticleGrid />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Name & Headline */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Hi, I&apos;m <span className="gradient-text">Siddharth Barkund</span>
              </h1>

              {/* Title & Typewriter */}
              <div className="text-xl font-semibold text-muted-foreground sm:text-2xl lg:text-3xl flex flex-wrap gap-2 items-center">
                <span>Exploring</span>
                <TypewriterEffect
                  sequences={[
                    "AI Agent Workflows",
                    2000,
                    "Machine Learning Models",
                    2000,
                    "Generative AI Systems",
                    2000,
                    "Data Science Analytics",
                    2000,
                  ]}
                  className="gradient-text font-bold"
                />
              </div>

              {/* Tagline */}
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
                Passionate about building AI-powered applications that solve
                real-world problems. Currently pursuing B.Tech in AI &amp; ML,
                focused on creating intelligent, automated systems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#projects");
                  }}
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="md" href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </div>

              {/* Tech Stack Horizontal Grid */}
              <div className="pt-8 border-t border-card-border/60">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["Python", "PyTorch", "TensorFlow", "FastAPI", "Next.js", "Scikit-Learn", "SQL"].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-lg border border-card-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-accent/40 hover:text-accent cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Simulated AI Terminal */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass-card overflow-hidden shadow-2xl relative border-card-border bg-card/60"
            >
              {/* Header of terminal */}
              <div className="flex items-center justify-between border-b border-card-border px-4 py-3 bg-muted/20">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs text-muted-foreground font-semibold">
                    ai-agent-sandbox.log
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Body of terminal */}
              <div className="p-5 font-mono text-xs text-foreground/90 space-y-2.5 min-h-[220px] bg-background/50">
                <AnimatePresence mode="popLayout">
                  {terminalLines.map((line, index) => {
                    const isSystem = line.startsWith("System:");
                    const isUser = line.startsWith("User:");
                    const isAgent = line.startsWith("Agent:");

                    let textColor = "text-muted-foreground";
                    if (isSystem) textColor = "text-emerald-500/90 dark:text-emerald-400/90";
                    if (isUser) textColor = "text-accent font-semibold";
                    if (isAgent) textColor = "text-foreground";

                    return (
                      <motion.div
                        key={line + index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start gap-2 ${textColor}`}
                      >
                        {isSystem && <CheckCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                        {!isSystem && <Cpu className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                        <span>{line}</span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* System status details */}
              <div className="flex items-center justify-between border-t border-card-border px-4 py-2 text-[10px] text-muted-foreground bg-muted/10 font-mono">
                <span>Accuracy: 89.4%</span>
                <span>Latency: 240ms</span>
                <span>Status: RUNNING</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="h-5 w-5 animate-scroll-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
