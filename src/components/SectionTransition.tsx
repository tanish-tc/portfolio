"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  const textY = useTransform(scrollYProgress, [0.2, 0.6], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div ref={ref} className="relative h-[60vh] overflow-hidden">
      {/* Light background (underneath) */}
      <div
        className="absolute inset-0"
        style={{
          background: "#f0f4f8",
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Dark overlay that wipes in */}
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{ clipPath }}
      />

      {/* Transition text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div className="text-center">
          <div className="font-mono text-xs uppercase tracking-[0.5em] text-white/30">
            entering
          </div>
          <div className="mt-2 font-mono text-4xl font-black tracking-tight text-white sm:text-6xl">
            Dark Mode
          </div>
          <div className="mt-2 font-mono text-sm text-white/20">
            // where the real work lives
          </div>
        </motion.div>
      </motion.div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
        }}
      />
    </div>
  );
}
