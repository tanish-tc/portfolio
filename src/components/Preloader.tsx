"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLogs = [
  { text: "$ npm run build", color: "text-green-400", delay: 0 },
  { text: "  ✓ Compiled successfully", color: "text-white/30", delay: 200 },
  { text: "  ✓ Loading modules...", color: "text-white/30", delay: 400 },
  { text: "  ✓ Framer Motion initialized", color: "text-white/30", delay: 600 },
  { text: "  ✓ Compiling animations...", color: "text-white/30", delay: 900 },
  { text: "  ✓ Resolving components...", color: "text-white/30", delay: 1200 },
  { text: "  ✓ Rendering layout...", color: "text-white/30", delay: 1500 },
  { text: "$ Portfolio ready", color: "text-cyan-400", delay: 1800 },
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Reveal terminal logs sequentially
  useEffect(() => {
    const timers = terminalLogs.map((log, idx) =>
      setTimeout(() => setVisibleLogs(idx + 1), log.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black"
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Terminal logs */}
          <div className="mb-8 w-72 space-y-1 font-mono text-xs">
            {terminalLogs.slice(0, visibleLogs).map((log, idx) => (
              <motion.div
                key={idx}
                className={log.color}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {log.text}
              </motion.div>
            ))}
            {visibleLogs < terminalLogs.length && (
              <motion.span
                className="text-green-400"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              >
                _
              </motion.span>
            )}
          </div>

          {/* Counter */}
          <motion.div
            className="relative font-mono text-8xl font-black tracking-tighter text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {Math.min(count, 100)}
            <span className="text-3xl text-white/30">%</span>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 h-[2px] w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              style={{ width: `${Math.min(count, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Status from counter */}
          <motion.div
            className="mt-4 font-mono text-xs text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {count < 30
              ? "loading modules..."
              : count < 60
              ? "compiling animations..."
              : count < 90
              ? "rendering components..."
              : "ready."}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
