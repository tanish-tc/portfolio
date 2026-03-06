"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/tanish1608",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tanish00",
    icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "tv2291@nyu.edu",
    icon: Mail,
  },
];

// ── Magnetic hover CTA button ──────────────────────────────────────────────────

function MagneticCTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="mailto:hello@tanish.dev"
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get in Touch
      <ArrowUpRight size={18} />
    </motion.a>
  );
}

// ── Infinite Marquee ───────────────────────────────────────────────────────────

function InfiniteMarquee() {
  const text = "FOUNDING ENGINEER  ✦  10M+ USERS  ✦  4x HACKATHON CHAMPION  ✦  PATENT HOLDER  ✦  AI/ML + FULL-STACK  ✦  ";
  return (
    <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.02]">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className="text-[150px] font-black leading-none text-white sm:text-[200px]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] px-4 pb-8 pt-24 sm:px-8 lg:px-16"
    >
      {/* Infinite marquee background */}
      <InfiniteMarquee />

      {/* Content */}
      <div className="relative z-10">
        {/* Top section */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white/30">
            // contact
          </h2>
          <h3 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl">
            Let&apos;s Build
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              What&apos;s Next
            </span>
          </h3>
          <p className="mx-auto mt-6 max-w-md text-sm text-white/30">
            Looking for a founding engineer who ships fast, thinks in systems, and doesn&apos;t need hand-holding? Let&apos;s talk.
          </p>

          {/* Magnetic CTA Button */}
          <MagneticCTA />
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/40 transition-all hover:border-white/20 hover:text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.08 }}
            >
              <social.icon size={16} />
              {social.label}
              <ArrowUpRight
                size={12}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-mono text-xs text-white/20">
            <Terminal size={14} />
            <span>tanish.dev</span>
            <span className="text-white/10">|</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <motion.div
            className="font-mono text-xs text-white/20"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Built with Next.js + Framer Motion + Tailwind
          </motion.div>

          <div className="font-mono text-xs text-white/20">
            Designed & Engineered by Tanish
          </div>
        </div>
      </div>
    </footer>
  );
}
