"use client";

import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Roadmap } from "@/components/sections/Roadmap";
import { CareerGoals } from "@/components/sections/CareerGoals";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const ids = ["hero", "about", "experience", "skills", "projects", "achievements", "roadmap", "career-goals", "github", "contact"];
    const interval = setInterval(() => {
      const data = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, missing: true };
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return {
          id,
          top: rect.top + window.scrollY,
          height: rect.height,
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
          marginTop: style.marginTop,
          marginBottom: style.marginBottom,
        };
      });
      console.log("LAYOUT_INSTRUMENTATION:", JSON.stringify(data, null, 2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Roadmap />
      <CareerGoals />
      <GitHub />
      <Contact />
    </>
  );
}

