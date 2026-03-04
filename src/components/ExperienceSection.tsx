"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences, type Experience as ExperienceType } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const typeLabels: Record<string, { label: string; color: string }> = {
  "full-time": { label: "Full-Time", color: "#3b82f6" },
  contract: { label: "Contract", color: "#f59e0b" },
  internship: { label: "Internship", color: "#10b981" },
  "open-source": { label: "Open Source", color: "#8b5cf6" },
};

function TimelineNode({
  experience,
  index,
  isInView,
  isExpanded,
  onToggle,
}: {
  experience: ExperienceType;
  index: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const typeInfo = typeLabels[experience.type];

  return (
    <motion.div
      className="relative grid grid-cols-[1fr_auto_1fr] gap-4 sm:gap-8"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Left side: Timeline info (even) or content (odd) */}
      {index % 2 === 0 ? (
        <>
          {/* Date & location - left aligned */}
          <motion.div
            className="flex flex-col items-end justify-start pt-2 text-right"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
          >
            <div className="font-mono text-sm font-semibold text-white/60">
              {experience.period}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-white/30">
              <MapPin size={10} />
              {experience.location}
            </div>
            <div
              className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: typeInfo.color + "15",
                color: typeInfo.color,
              }}
            >
              {typeInfo.label}
            </div>
          </motion.div>

          {/* Center: Node */}
          <TimelineDot experience={experience} index={index} isInView={isInView} />

          {/* Right: Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          >
            <ExperienceCard
              experience={experience}
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          </motion.div>
        </>
      ) : (
        <>
          {/* Left: Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          >
            <ExperienceCard
              experience={experience}
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          </motion.div>

          {/* Center: Node */}
          <TimelineDot experience={experience} index={index} isInView={isInView} />

          {/* Right: Date & location */}
          <motion.div
            className="flex flex-col items-start justify-start pt-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
          >
            <div className="font-mono text-sm font-semibold text-white/60">
              {experience.period}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-white/30">
              <MapPin size={10} />
              {experience.location}
            </div>
            <div
              className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: typeInfo.color + "15",
                color: typeInfo.color,
              }}
            >
              {typeInfo.label}
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

function TimelineDot({
  experience,
  index,
  isInView,
}: {
  experience: ExperienceType;
  index: number;
  isInView: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Connector line above */}
      {index > 0 && (
        <motion.div
          className="w-px"
          style={{ backgroundColor: experience.color + "30" }}
          initial={{ height: 0 }}
          animate={isInView ? { height: 40 } : { height: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
        />
      )}

      {/* Glowing dot */}
      <motion.div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-xl"
        style={{
          background: `radial-gradient(circle, ${experience.color}30, ${experience.color}10)`,
          boxShadow: `0 0 20px ${experience.color}20, 0 0 40px ${experience.color}10`,
        }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: index * 0.15 + 0.1,
        }}
        whileHover={{
          scale: 1.2,
          boxShadow: `0 0 30px ${experience.color}40, 0 0 60px ${experience.color}20`,
        }}
      >
        {/* Pulse ring - one-shot */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${experience.color}40` }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={isInView ? { scale: 1.6, opacity: 0 } : {}}
          transition={{
            duration: 1,
            delay: index * 0.3,
          }}
        />
        <span>{experience.emoji}</span>
      </motion.div>

      {/* Connector line below */}
      {index < experiences.length - 1 && (
        <motion.div
          className="w-px flex-1"
          style={{
            background: `linear-gradient(to bottom, ${experience.color}30, transparent)`,
            minHeight: 40,
          }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
        />
      )}
    </div>
  );
}

function ExperienceCard({
  experience,
  isExpanded,
  onToggle,
}: {
  experience: ExperienceType;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
      whileHover={{ y: -2 }}
      layout
    >
      {/* Top glow accent */}
      <div
        className="absolute left-0 right-0 top-0 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${experience.color}, transparent)`,
        }}
      />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-base font-bold text-white sm:text-lg">
              {experience.role}
            </h4>
            <div className="mt-1 flex items-center gap-2">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1 text-sm font-medium transition-colors hover:text-white"
                  style={{ color: experience.color }}
                >
                  {experience.company}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover/link:opacity-100"
                  />
                </a>
              ) : (
                <span
                  className="text-sm font-medium"
                  style={{ color: experience.color }}
                >
                  {experience.company}
                </span>
              )}
            </div>
          </div>

          {/* Expand button */}
          <motion.button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-colors hover:border-white/20 hover:text-white/60"
            onClick={onToggle}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={14} />
          </motion.button>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-white/40 sm:text-sm">
          {experience.description}
        </p>

        {/* Expandable highlights */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  <Sparkles size={10} />
                  Key Achievements
                </div>
                {experience.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-white/50"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: experience.color }}
                    />
                    {highlight}
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Mobile timeline (single column)
function MobileTimeline({
  experience,
  index,
  isInView,
  isExpanded,
  onToggle,
}: {
  experience: ExperienceType;
  index: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const typeInfo = typeLabels[experience.type];

  return (
    <motion.div
      className="relative flex gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Left: Timeline line & dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
          style={{
            background: `radial-gradient(circle, ${experience.color}30, ${experience.color}10)`,
            boxShadow: `0 0 15px ${experience.color}20`,
          }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", delay: index * 0.1 + 0.1 }}
        >
          {experience.emoji}
        </motion.div>
        {index < experiences.length - 1 && (
          <div
            className="flex-1 w-px"
            style={{
              background: `linear-gradient(to bottom, ${experience.color}20, transparent)`,
            }}
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="flex-1 pb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-white/40">
            {experience.period}
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: typeInfo.color + "15",
              color: typeInfo.color,
            }}
          >
            {typeInfo.label}
          </span>
        </div>
        <ExperienceCard
          experience={experience}
          isExpanded={isExpanded}
          onToggle={onToggle}
        />
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#0a0a0a] px-4 py-24 sm:px-8 lg:px-16"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[100px]" />

      {/* Section header */}
      <motion.div
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white/30">
          // experience
        </h2>
        <div className="mt-2 flex items-end gap-4">
          <h3 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">
            The Journey
          </h3>
          <motion.div
            className="mb-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Briefcase size={12} className="text-white/40" />
            <span className="font-mono text-xs text-white/40">
              {experiences.length} roles
            </span>
          </motion.div>
        </div>
        <p className="mt-3 max-w-lg text-sm text-white/30">
          From AI/ML research to full-stack engineering — a timeline of building,
          shipping, and scaling impactful software.
        </p>
      </motion.div>

      {/* Desktop: Alternating timeline */}
      <div className="relative z-10 hidden lg:block">
        <div className="mx-auto max-w-5xl space-y-2">
          {experiences.map((exp, idx) => (
            <TimelineNode
              key={exp.id}
              experience={exp}
              index={idx}
              isInView={isInView}
              isExpanded={expandedId === exp.id}
              onToggle={() => toggleExpand(exp.id)}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Single-column timeline */}
      <div className="relative z-10 lg:hidden">
        <div className="mx-auto max-w-lg">
          {experiences.map((exp, idx) => (
            <MobileTimeline
              key={exp.id}
              experience={exp}
              index={idx}
              isInView={isInView}
              isExpanded={expandedId === exp.id}
              onToggle={() => toggleExpand(exp.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <motion.div
        className="relative z-10 mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p className="font-mono text-xs text-white/20">
          ...and counting. Always building, always learning.
        </p>
      </motion.div>
    </section>
  );
}
