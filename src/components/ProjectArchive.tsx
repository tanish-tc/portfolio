"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { archiveProjects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import ProjectModal from "./ProjectModal";

// ── 3D Tilt Card ───────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const heights = ["h-64", "h-80", "h-72", "h-96", "h-64", "h-80"];
  const height = heights[index % heights.length];

  return (
    <motion.div
      ref={cardRef}
      layoutId={`card-${project.id}`}
      className="group relative cursor-pointer break-inside-avoid mb-6"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500",
          height,
          "hover:border-white/15"
        )}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Gradient background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-70",
            project.gradient
          )}
        />

        {/* Content overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          {/* Top: Category & Year */}
          <div className="flex items-start justify-between">
            <motion.span
              className="rounded-full bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-sm"
              animate={isHovered ? { y: 0, opacity: 1 } : { y: -5, opacity: 0.7 }}
            >
              {project.category}
            </motion.span>
            <motion.span
              className="font-mono text-xs text-white/30"
              animate={isHovered ? { opacity: 1 } : { opacity: 0.5 }}
            >
              {project.year}
            </motion.span>
          </div>

          {/* Center: Large letter */}
          <motion.div
            className="flex items-center justify-center"
            animate={isHovered ? { scale: 1.1, opacity: 0.1 } : { scale: 1, opacity: 0.08 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[120px] font-black leading-none text-white">
              {project.title.charAt(0)}
            </span>
          </motion.div>

          {/* Bottom: Title & Subtitle */}
          <div>
            <motion.h3
              className="text-lg font-bold text-white sm:text-xl"
              animate={isHovered ? { y: -4 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="mt-1 text-sm text-white/40"
              animate={isHovered ? { y: -2, opacity: 1 } : { y: 0, opacity: 0.6 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.subtitle}
            </motion.p>

            {/* Tech pills — appear on hover */}
            <motion.div
              className="mt-3 flex flex-wrap gap-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/50 backdrop-blur-sm">
                  +{project.technologies.length - 3}
                </span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute right-4 top-4 h-8 w-8 rounded-full transition-all duration-300"
          style={{ backgroundColor: project.color }}
          animate={isHovered ? { scale: 1, opacity: 0.8 } : { scale: 0.5, opacity: 0 }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 0 1px ${project.color}30`,
          }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
}

// ── Main Archive Section ───────────────────────────────────────────────────────

export default function ProjectArchive() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(archiveProjects.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return archiveProjects;
    return archiveProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section
        ref={sectionRef}
        id="archive"
        className="relative bg-[#0a0a0a] px-4 py-20 sm:px-8 lg:px-16"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Section header */}
        <motion.div
          className="relative z-10 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white/30">
            // complete portfolio
          </h2>
          <div className="flex items-end gap-4">
            <h3 className="mt-2 font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">
              The Innovation Archive
            </h3>
            <motion.span
              className="mb-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </motion.span>
          </div>
          <p className="mt-3 max-w-lg text-sm text-white/30">
            Browse the full spectrum of my engineering journey—from ambitious prototypes to production systems at scale. Each project is a story of technical rigor, creative vision, and real-world impact.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="relative z-10 mb-12 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={cn(
                "relative rounded-full px-4 py-2 font-mono text-xs transition-all duration-300",
                activeFilter === cat
                  ? "text-white"
                  : "text-white/30 hover:text-white/60"
              )}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeFilter === cat && (
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20 bg-white/10"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid (CSS grid, no overlap) */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ gridAutoFlow: 'row dense' }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onSelect={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
