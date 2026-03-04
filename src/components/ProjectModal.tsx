"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { type Project } from "@/lib/data";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Escape key + body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal content */}
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close button */}
        <motion.button
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black/40 transition-colors hover:bg-black/10 hover:text-black"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={20} />
        </motion.button>

        {/* Escape hint */}
        <motion.div
          className="absolute left-4 top-4 z-20 rounded-md bg-black/5 px-2 py-1 font-mono text-[10px] text-black/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ESC to close
        </motion.div>

        {/* Header gradient */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <div
            className={`h-32 bg-gradient-to-br ${project.gradient}`}
          >
            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }} />
          </div>

          {/* Category badge floating on gradient */}
          <motion.div
            className="absolute bottom-4 left-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-black/60 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          {/* Title & Year */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
              {project.title}
            </h2>
          </motion.div>

          {/* Year block */}
          <motion.div
            className="mt-4 rounded-xl bg-gray-50 p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-mono text-sm text-black/40">
              {project.year}
            </span>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              {project.description}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-black/30">
              Technologies
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 text-xs font-medium text-black/60"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + idx * 0.03 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/30">
              Links <ExternalLink size={12} />
            </h4>
            <div className="divide-y divide-black/5 rounded-xl border border-black/10">
              {project.links.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  className="flex items-center justify-between px-4 py-3.5 text-sm text-black/60 transition-colors hover:bg-black/[0.02] hover:text-black"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + idx * 0.05 }}
                  whileHover={{ x: 2 }}
                >
                  <span className="font-medium">{link.label}</span>
                  <ArrowUpRight size={16} className="text-black/30" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
