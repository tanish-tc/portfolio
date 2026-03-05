"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { featuredProjects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from "lucide-react";

const AUTO_PLAY_INTERVAL = 6000;

export default function FeaturedWork() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const project = featuredProjects[current];

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      setProgress(0);
      if (direction === "next") {
        setCurrent((prev) => (prev + 1) % featuredProjects.length);
      } else {
        setCurrent(
          (prev) =>
            (prev - 1 + featuredProjects.length) % featuredProjects.length
        );
      }
    },
    []
  );

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          navigate("next");
          return 0;
        }
        return prev + 100 / (AUTO_PLAY_INTERVAL / 200);
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, navigate, current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setIsAutoPlaying(false);
        navigate("prev");
      }
      if (e.key === "ArrowRight") {
        setIsAutoPlaying(false);
        navigate("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <section ref={sectionRef} id="featured" className="relative">
      {/* Dark overlay transition */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: bgOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen bg-[#0a0a0a] py-20 lg:py-0">
        {/* Section header */}
        <motion.div
          className="px-8 pt-20 lg:px-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white/30">
            // flagship creations
          </h2>
          <div className="flex items-end justify-between">
            <h3 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">
              Engineering the Future
            </h3>
            <div className="mb-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="font-mono text-lg font-bold text-white/60">
                {featuredProjects.length}
              </span>
              <span className="font-mono text-xs text-white/30">flagship</span>
            </div>
          </div>
          <p className="mt-3 max-w-lg text-sm text-white/30">
            Explore a handpicked selection of my most transformative projects—each a testament to technical excellence, creative problem-solving, and measurable impact. These are not just builds; they are blueprints for the future.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="flex min-h-[80vh] items-center" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <div className="grid w-full grid-cols-1 gap-8 px-8 lg:grid-cols-2 lg:gap-16 lg:px-16">
            {/* Left: Text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Category pill */}
                <motion.span
                  className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-white/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.category}
                </motion.span>

                {/* Number */}
                <motion.span
                  className="mb-2 font-mono text-sm text-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {String(current + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                </motion.span>

                {/* Title */}
                <motion.h2
                  className="text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {project.title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  className="mt-3 text-xl text-white/40 sm:text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="mt-6 max-w-md text-sm leading-relaxed text-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="mt-6 flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {project.technologies.slice(0, 6).map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/40"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.04 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/40">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="mt-8 flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition-all"
                    style={{ backgroundColor: project.color }}
                    whileHover={{ scale: 1.05, gap: "12px" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Project
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/60 transition-all hover:border-white/30 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    GitHub
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right: Project visual */}
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id + "-visual"}
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{marginTop: 40}}
              >
                {/* Glow background */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-20 blur-[40px]"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
                  }}
                />

                {/* Card frame */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/60" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                      <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-center font-mono text-xs text-white/20">
                      {project.id}.dev
                    </div>
                  </div>

                  {/* Project gradient placeholder */}
                  <div
                    className={cn(
                      "relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-80 lg:h-96",
                      project.gradient
                    )}
                  >
                    {/* Animated grid inside */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }} />

                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div
                        className="text-8xl font-black text-white/20"
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 5 }}
                      >
                        {project.title.charAt(0)}
                      </motion.div>
                      <div className="mt-2 font-mono text-sm text-white/30">
                        {project.year}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating label */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-full border border-white/10 bg-black/80 px-4 py-2 font-mono text-xs text-white/50 backdrop-blur-sm"
                >
                  {project.technologies.length} technologies
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between px-8 pb-16 lg:px-16">
          {/* Pagination pills with auto-play progress */}
          <div className="flex items-center gap-3">
            {featuredProjects.map((_, idx) => (
              <motion.button
                key={idx}
                className={cn(
                  "relative h-2 overflow-hidden rounded-full transition-all duration-300",
                  idx === current
                    ? "w-12 bg-white/20"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
                onClick={() => {
                  setCurrent(idx);
                  setProgress(0);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {idx === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Keyboard hint + Arrow buttons */}
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[10px] text-white/15 sm:inline">
              ← → keys
            </span>
            <motion.button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
              onClick={() => {
                setIsAutoPlaying(false);
                navigate("prev");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
              onClick={() => {
                setIsAutoPlaying(false);
                navigate("next");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* "KEEP SCROLLING" indicator */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/20">
          keep scrolling
          <span>↓</span>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            animate={{
              width: `${((current + 1) / featuredProjects.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
