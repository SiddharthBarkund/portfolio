"use client";

import { BarChart2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { githubProfile } from "@/data/github";

export function GitHub() {
  return (
    <SectionWrapper
      id="github"
      title="GitHub"
      subtitle="My open source contributions and active project repositories"
    >
      {/* Top Section: Custom Languages Graph Card on Left, Vercel Streak Image Card on Right */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 items-stretch">
        {/* Custom Language Graph Card */}
        <div className="glass-card p-6 border border-card-border flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-accent" />
              Most Used Languages
            </h3>

            {/* Segmented Progress Bar */}
            <div className="h-3 w-full rounded-full bg-muted/20 overflow-hidden flex mb-6">
              <div style={{ width: "47.0%", backgroundColor: "#DA5B0B" }} className="h-full" title="Jupyter Notebook: 47.0%" />
              <div style={{ width: "38.0%", backgroundColor: "#3572A5" }} className="h-full" title="Python: 38.0%" />
              <div style={{ width: "6.7%", backgroundColor: "#00B4AB" }} className="h-full" title="Dart: 6.7%" />
              <div style={{ width: "6.2%", backgroundColor: "#e34c26" }} className="h-full" title="HTML: 6.2%" />
              <div style={{ width: "2.1%", backgroundColor: "#f1e05a" }} className="h-full" title="JavaScript: 2.1%" />
            </div>

            {/* List of Languages with Percentage Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: "#DA5B0B" }} />
                  <span className="font-semibold text-foreground">Jupyter Notebook</span>
                </div>
                <span className="text-muted-foreground font-mono">47.0%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: "#3572A5" }} />
                  <span className="font-semibold text-foreground">Python</span>
                </div>
                <span className="text-muted-foreground font-mono">38.0%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: "#00B4AB" }} />
                  <span className="font-semibold text-foreground">Dart</span>
                </div>
                <span className="text-muted-foreground font-mono">6.7%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: "#e34c26" }} />
                  <span className="font-semibold text-foreground">HTML</span>
                </div>
                <span className="text-muted-foreground font-mono">6.2%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: "#f1e05a" }} />
                  <span className="font-semibold text-foreground">JavaScript</span>
                </div>
                <span className="text-muted-foreground font-mono">2.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vercel Streak Stats Card Container */}
        <div className="glass-card p-6 border border-card-border flex items-center justify-center min-h-[220px]">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubProfile.username}&theme=transparent&hide_border=true&stroke=7F56D9&background=00000000&ring=7F56D9&fire=7F56D9&currStreakNum=7F56D9&sideNums=94a3b8&sideLabels=94a3b8&currStreakLabel=7F56D9`}
            alt="GitHub Streak"
            className="max-w-full h-auto object-contain"
            width={495}
            height={195}
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}



