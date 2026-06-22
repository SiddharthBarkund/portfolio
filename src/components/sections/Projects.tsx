"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: ProjectCategory[] = ["All", "AI/ML", "Web", "Automation"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!selectedProject || !selectedProject.screenshots) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => 
          prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => 
          prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A collection of AI-powered applications and tools I've built"
    >
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer",
              activeFilter === category
                ? "bg-accent text-white shadow-md shadow-accent/15"
                : "border border-card-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground backdrop-blur-sm"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              layout
            >
              <div 
                className={cn(
                  "glass-card glass-card-hover group flex h-full flex-col p-6 relative overflow-hidden",
                  project.screenshots && "cursor-pointer"
                )}
                onClick={() => {
                  if (project.screenshots && project.screenshots.length > 0) {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }
                }}
              >
                {/* Category badge & View Gallery hover state */}
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="accent">{project.category}</Badge>
                  {project.screenshots && (
                    <span className="flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="h-3.5 w-3.5" />
                      View Gallery
                    </span>
                  )}
                </div>

                {/* Title & description */}
                <h3 className="mb-2 text-lg font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div 
                  className="flex items-center gap-2 border-t border-card-border pt-4 mt-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.screenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-card/95 border border-card-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-card-border p-4 bg-background/50 backdrop-blur-md">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{selectedProject.title}</h3>
                  <p className="text-xs text-muted-foreground">Project Screenshots</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Main Image Slider */}
              <div className="relative flex-1 flex items-center justify-center bg-neutral-950 p-2 md:p-6 min-h-[300px] max-h-[60vh] group/slider">
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-lg select-none"
                />

                {/* Left/Right Navigation Buttons */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 border border-white/10 p-3 text-white/80 backdrop-blur-md transition-all hover:bg-black/85 hover:text-white hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 border border-white/10 p-3 text-white/80 backdrop-blur-md transition-all hover:bg-black/85 hover:text-white hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Counter Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-white/90 text-xs font-medium backdrop-blur-md">
                  {currentImageIndex + 1} / {selectedProject.screenshots.length}
                </div>
              </div>

              {/* Thumbnails Footer */}
              {selectedProject.screenshots.length > 1 && (
                <div className="border-t border-card-border p-4 bg-background/30 overflow-x-auto flex justify-center gap-3 animate-none">
                  {selectedProject.screenshots.map((screenshot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={cn(
                        "relative h-14 w-24 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 cursor-pointer",
                        currentImageIndex === idx
                          ? "border-accent scale-105 shadow-md shadow-accent/15"
                          : "border-card-border hover:border-accent/40 opacity-70 hover:opacity-100"
                      )}
                    >
                      <img
                        src={screenshot}
                        alt={`thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
