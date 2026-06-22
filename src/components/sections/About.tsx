"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, BookOpen, Brain, MessageSquareCode, Cpu } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { useRef } from "react";

const interests = [
  "Machine Learning",
  "Computer Vision",
  "Data Science",
  "Intelligent Agents",
  "MLOps",
];

const stats = [
  { label: "Projects Built", value: "6+" },
  { label: "Technologies", value: "20+" },
  { label: "Internships", value: "3" },
  { label: "Certifications", value: "10+" },
];

const pillars = [
  {
    title: "AI & Machine Learning Engineering",
    description: "Developing and deploying predictive analytics, computer vision models, and deep learning algorithms using PyTorch and Scikit-Learn to uncover insights from raw structured and unstructured data.",
    icon: Brain,
  },
  {
    title: "Generative AI & Agentic Workflows",
    description: "Designing RAG systems, building multilingual customer-facing chatbots, and orchestrating autonomous agentic pipelines using Gemini, OpenAI APIs, and Playwright automation frameworks.",
    icon: MessageSquareCode,
  },
  {
    title: "Full-Stack AI Integration",
    description: "Bridging the gap between ML models and user interfaces. Building highly responsive, scalable backends (FastAPI/Flask) integrated with modern Next.js client-side experiences.",
    icon: Cpu,
  },
];

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.6, 1, 1, 1, 0.6]
  );
  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["50%", "16px", "16px", "50%"]
  );

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Driven by curiosity and a passion for building intelligent systems"
    >
      <div className="space-y-16">
        {/* Main layout: Image left, Content right */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Profile Image — 5 columns on desktop */}
          <div
            ref={imageRef}
            className="flex justify-center lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative w-full max-w-[380px]">
              {/* Ambient glow */}
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent blur-2xl"
                style={{ opacity: imgOpacity }}
              />

              {/* Image container with scroll-linked zoom */}
              <motion.div
                className="relative overflow-hidden border-2 border-accent/20 shadow-2xl shadow-accent/5"
                style={{ scale, opacity: imgOpacity, borderRadius }}
              >
                <img
                  src="/profile.png"
                  alt="Siddharth Barkund"
                  width={380}
                  height={506}
                  className="block w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Content — 7 columns on desktop */}
          <div className="space-y-8 lg:col-span-7">
            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <p className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>
                  I&apos;m passionate about building AI-powered applications that
                  solve real-world problems — from multilingual chatbots and
                  intelligent data analysis tools to autonomous testing agents. I
                  believe in the transformative potential of AI and am committed to
                  making technology more accessible and impactful.
                </span>
              </p>
              <p className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>
                  Currently, I&apos;m deepening my knowledge in Deep Learning and
                  working on AI applications, while preparing for AI/ML
                  internships and AI Engineer roles. I thrive at the intersection
                  of research and engineering — turning ideas into working
                  products.
                </span>
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="h-full"
                >
                  <Card className="flex h-full flex-col items-center justify-center text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                    <div className="text-2xl font-bold gradient-text sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Areas of Interest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="transition-all duration-300 hover:border-accent/30">
                <h3 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
                  Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, i) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                      className="inline-flex items-center rounded-lg bg-accent/5 border border-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:scale-105 cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* What I Do - Pillars Section */}
        <div className="pt-12 border-t border-card-border">
          <div className="mb-8 text-left">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              What I Do
            </h3>
            <p className="mt-2 text-muted-foreground">
              Building the foundations of enterprise intelligence through core tech capabilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <Card className="h-full flex flex-col items-start p-6 text-left transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
