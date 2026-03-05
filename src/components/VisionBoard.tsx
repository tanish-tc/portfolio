"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";
import { cn } from "@/lib/utils";

function DraggableAchievement({
  achievement,
  constraintsRef,
}: {
  achievement: (typeof achievements)[0];
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [zIdx, setZIdx] = useState(10);

  const cardStyles: Record<string, string> = {
    polaroid:
      "bg-white rounded-lg shadow-xl p-4 pb-12 border border-black/5 w-72",
    sticky:
      "rounded-sm shadow-lg p-5 w-64",
    badge:
      "bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-5 border-2 w-64",
    card:
      "bg-white rounded-xl shadow-xl p-5 border border-black/10 w-72",
  };

  const stickyColors: Record<string, string> = {
    "#f59e0b": "bg-amber-100",
    "#ef4444": "bg-red-50",
    "#10b981": "bg-emerald-50",
    "#8b5cf6": "bg-violet-50",
    "#3b82f6": "bg-blue-50",
  };

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        left: `${achievement.x}%`,
        top: `${achievement.y}%`,
        zIndex: zIdx,
      }}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragTransition={{
        bounceStiffness: 250,
        bounceDamping: 20,
      }}
      whileDrag={{
        scale: 1.08,
        rotate: 0,
        zIndex: 100,
        cursor: "grabbing",
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.2 },
      }}
      onMouseDown={() => setZIdx(50)}
      onMouseUp={() => setZIdx(20)}
      initial={{
        opacity: 0,
        scale: 0.5,
        rotate: achievement.rotation + (Math.random() - 0.5) * 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: achievement.rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: Math.random() * 0.3 + 0.2,
      }}
    >
      <div
        className={cn(
          cardStyles[achievement.type],
          achievement.type === "sticky" &&
            stickyColors[achievement.color]
        )}
        style={{
          borderColor:
            achievement.type === "badge"
              ? achievement.color + "40"
              : undefined,
        }}
      >
        {/* Polaroid style */}
        {achievement.type === "polaroid" && (
          <>
            <div
              className="mb-3 flex h-36 items-center justify-center rounded bg-gradient-to-br text-6xl"
              style={{
                background: `linear-gradient(135deg, ${achievement.color}15, ${achievement.color}30)`,
              }}
            >
              {achievement.emoji}
            </div>
            <h3 className="text-sm font-bold text-black">
              {achievement.title}
            </h3>
            <p className="mt-1 text-xs text-black/50">
              {achievement.subtitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-black/40">
              {achievement.description}
            </p>
          </>
        )}

        {/* Sticky note style */}
        {achievement.type === "sticky" && (
          <>
            <div className="mb-2 text-3xl">{achievement.emoji}</div>
            <h3 className="text-sm font-bold text-black/80">
              {achievement.title}
            </h3>
            <p
              className="mt-1 text-xs font-semibold"
              style={{ color: achievement.color }}
            >
              {achievement.subtitle}
            </p>
            <p className="mt-2 font-mono text-[10px] leading-relaxed text-black/40">
              {achievement.description}
            </p>
            {/* Tape decoration */}
            <div className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-1 bg-yellow-200/60" />
          </>
        )}

        {/* Badge style */}
        {achievement.type === "badge" && (
          <div className="text-center">
            <div
              className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
              style={{
                background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}40)`,
              }}
            >
              {achievement.emoji}
            </div>
            <h3 className="text-sm font-bold text-black">
              {achievement.title}
            </h3>
            <p
              className="mt-1 text-xs font-semibold"
              style={{ color: achievement.color }}
            >
              {achievement.subtitle}
            </p>
            <p className="mt-2 text-[10px] leading-relaxed text-black/40">
              {achievement.description}
            </p>
          </div>
        )}

        {/* Card style */}
        {achievement.type === "card" && (
          <>
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}40)`,
                }}
              >
                {achievement.emoji}
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">
                  {achievement.title}
                </h3>
                <p
                  className="text-xs font-semibold"
                  style={{ color: achievement.color }}
                >
                  {achievement.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-black/40">
              {achievement.description}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function VisionBoard() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative min-h-screen overflow-hidden py-20"
      style={{
        background: "#f0f4f8",
      }}
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }}
      />

      {/* Section header */}
      <motion.div
        className="relative z-20 mb-12 px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-black/30">
          // signature achievements
        </h2>
        <h3 className="mt-2 font-mono text-4xl font-black tracking-tight text-black/80 sm:text-5xl">
          A Legacy of Impact
        </h3>
        <p className="mt-3 max-w-lg font-mono text-sm text-black/40">
          Explore a curated showcase of my most defining moments—hackathon triumphs, patents, and engineering breakthroughs. Each milestone is a testament to relentless curiosity, technical mastery, and a drive to shape the future of technology.
        </p>
      </motion.div>

      {/* Draggable board */}
      <div
        ref={constraintsRef}
        className="relative mx-auto h-[700px] max-w-7xl px-4 sm:h-[750px]"
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute left-[25%] top-[15%] select-none text-6xl opacity-10"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          😊
        </motion.div>
        <motion.div
          className="absolute right-[20%] top-[70%] select-none text-5xl opacity-10"
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          ❤️
        </motion.div>

        {/* Doodle lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-5"
          viewBox="0 0 1200 800"
        >
          <path
            d="M100,200 Q300,100 500,250 T900,200"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M200,600 Q500,500 800,650"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          <circle cx="950" cy="150" r="40" fill="none" stroke="black" strokeWidth="2" />
          <path
            d="M1000,400 L1050,350 L1100,400 Z"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>

        {/* Achievement cards */}
        {achievements.map((achievement) => (
          <DraggableAchievement
            key={achievement.id}
            achievement={achievement}
            constraintsRef={constraintsRef}
          />
        ))}

        {/* "This is my wall" sticky */}
        <motion.div
          className="absolute right-[5%] top-[5%] -rotate-6 select-none rounded-lg bg-purple-500 px-6 py-4 text-white shadow-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <p className="font-mono text-sm font-bold" style={{ fontStyle: "italic" }}>
            This is my wall 📌
          </p>
        </motion.div>

        {/* "Under construction" note */}
        <motion.div
          className="absolute bottom-[5%] right-[10%] select-none rounded-lg bg-sky-100 px-5 py-4 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{ maxWidth: 220 }}
        >
          <p className="font-mono text-[10px] leading-relaxed text-black/50">
            Always building, always shipping.
            <br />
            Check out the work below 👇
          </p>
        </motion.div>
      </div>
    </section>
  );
}
