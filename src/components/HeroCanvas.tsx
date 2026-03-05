"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { stickers } from "@/lib/data";
import { cn } from "@/lib/utils";

// ── Idle-wobble sticker with physics drag ──────────────────────────────────────

function DraggableSticker({
  sticker,
  constraintsRef,
  index,
}: {
  sticker: (typeof stickers)[0];
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  index: number;
}) {
  // Each sticker gets a unique wobble cycle
  const wobbleDuration = 3 + index * 0.7;
  const wobbleDelay = index * 0.4;

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        left: `${sticker.x}%`,
        top: `${sticker.y}%`,
        zIndex: 10,
      }}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.15}
      dragTransition={{
        bounceStiffness: 300,
        bounceDamping: 20,
      }}
      whileDrag={{
        scale: 1.2,
        rotate: 0,
        zIndex: 50,
        cursor: "grabbing",
        filter: "brightness(1.1)",
      }}
      whileHover={{
        scale: sticker.scale * 1.15,
        rotate: 0,
        zIndex: 30,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, rotate: sticker.rotation + 180 }}
      animate={{
        opacity: 1,
        scale: sticker.scale,
        rotate: sticker.rotation,
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.12 + 0.5 },
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.12 + 0.5,
        },
        rotate: {
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.12 + 0.5,
        },
      }}
    >
      <div
        className={cn(
          "select-none rounded-2xl border-2 border-white/60 px-5 py-3 shadow-xl backdrop-blur-sm transition-all duration-300",
          "hover:shadow-2xl hover:border-white/80"
        )}
        style={{
          background: sticker.bg,
          boxShadow: `0 8px 32px ${sticker.color}30`,
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{sticker.emoji}</span>
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: sticker.color }}
          >
            {sticker.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Magnetic text that subtly follows cursor ───────────────────────────────────

function MagneticTitle({
  text,
  className,
  delayBase = 0,
}: {
  text: string;
  className?: string;
  delayBase?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.04;
    const deltaY = (e.clientY - centerY) * 0.04;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-wrap justify-center gap-x-4 gap-y-2", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex overflow-hidden">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={`${wordIdx}-${charIdx}`}
              initial={{ y: 120, rotateX: -90, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: delayBase + wordIdx * 0.15 + charIdx * 0.03,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

// ── Typing subtitle animation ──────────────────────────────────────────────────

function TypingSubtitle() {
  const roles = [
    "AI Architect & Innovator",
    "Full Stack Visionary",
    "Mentor & Technical Leader",
    "Systems Thinker",
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    const speed = isDeleting ? 40 : 70;

    if (!isDeleting && charIdx === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx, isDeleting, roleIdx]);

  return (
    <motion.p
      className="mx-auto mt-8 max-w-2xl font-mono text-lg text-black/60 dark:text-neutral-200 sm:text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      {roles[roleIdx].slice(0, charIdx)}
      <motion.span
        className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-black/40"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      />
    </motion.p>
  );
}

// ── Main Hero Section ──────────────────────────────────────────────────────────

export default function HeroCanvas() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const smoothY = useSpring(yParallax, { stiffness: 100, damping: 30 });

  // Parallax orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{
        paddingTop: "2rem",
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

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[60px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-400/10 blur-[60px]" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[50px]" />

      {/* Static gradient sweep */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
        }}
      />

      {/* Noise overlay (reduced blur) */}
      <div className="absolute inset-0 opacity-[0.008]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Drag constraints container */}
      <motion.div
        ref={constraintsRef}
        className="relative z-10 flex min-h-screen items-center justify-center px-4"
        style={{ y: smoothY, opacity: opacityFade, scale }}
      >
        <div className="relative w-full max-w-6xl text-center">
          {/* Greeting line */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-2 font-mono text-sm backdrop-blur-sm"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="relative inline-block h-2 w-2 rounded-full bg-green-500">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
            </span>
            <span className="text-black/60">
              <span className="text-green-600 font-semibold">~</span> available for world-class impact
            </span>
          </motion.div>

          {/* Main title — magnetic */}
          <MagneticTitle
            text="WELCOME TO"
            className="font-mono text-6xl font-black tracking-tighter text-black/20 sm:text-7xl md:text-8xl"
            delayBase={0.8}
          />

          <div className="relative mt-2">
            <MagneticTitle
              text="TANISH'S"
              className="font-mono text-7xl font-black tracking-tighter text-black sm:text-8xl md:text-[10rem] md:leading-none"
              delayBase={1.0}
            />
          </div>

          <MagneticTitle
            text="TERMINAL"
            className="mt-1 font-mono text-7xl font-black tracking-tighter text-black sm:text-8xl md:text-[10rem] md:leading-none"
            delayBase={1.2}
          />

          {/* Professor-level intro */}
          <div className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            <span>
              Welcome — I’m Tanish, your next transformative hire. Architect of intelligent systems. Builder of seamless, scalable products. Leader in AI and Full Stack innovation.<br /><br />
              My work fuses deep technical mastery with creative vision, delivering solutions that redefine what’s possible. If you seek a developer who elevates teams, mentors peers, and engineers the future—let’s connect.
            </span>
          </div>

          {/* Typing subtitle */}
          <TypingSubtitle />

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-black/30">
              keep scrolling
            </span>
            <motion.div
              className="h-12 w-[1px] bg-gradient-to-b from-black/20 to-transparent"
              animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </div>

        {/* Floating stickers with idle wobble */}
        {stickers.map((sticker, idx) => (
          <DraggableSticker
            key={sticker.id}
            sticker={sticker}
            constraintsRef={constraintsRef}
            index={idx}
          />
        ))}
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        className="absolute bottom-8 left-8 font-mono text-xs text-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div>LAT 40.8075° N</div>
        <div>LON 73.9626° W</div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 font-mono text-xs text-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div>© 2025</div>
        <div>v2.0.0</div>
      </motion.div>
    </section>
  );
}
