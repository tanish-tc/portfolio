"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Intersection observer for active section
  useEffect(() => {
    const sectionIds = ["hero", "achievements", "featured", "archive", "experience", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-4 left-1/2 z-[9999] -translate-x-1/2 transition-all duration-300",
        scrolled ? "top-3" : "top-5"
      )}
    >
      <motion.div
        layout
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "border-white/10 bg-black/70 shadow-2xl shadow-black/50"
            : "border-black/10 bg-white/70 shadow-lg shadow-black/5"
        )}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 font-mono text-sm font-bold tracking-tight transition-colors",
            scrolled ? "text-white" : "text-black"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Terminal size={16} />
          TANISH
        </motion.a>

        {/* Divider */}
        <div
          className={cn(
            "h-6 w-px transition-colors",
            scrolled ? "bg-white/20" : "bg-black/10"
          )}
        />

        {/* Links with active indicator */}
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <motion.a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                scrolled
                  ? isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                  : isActive
                  ? "text-black"
                  : "text-black/40 hover:text-black"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-full",
                    scrolled ? "bg-white/10" : "bg-black/5"
                  )}
                  layoutId="navActive"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          );
        })}

        {/* Resume Button */}
        <motion.a
          href="#"
          className={cn(
            "ml-1 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
            scrolled
              ? "bg-white text-black hover:bg-white/90"
              : "bg-black text-white hover:bg-black/80"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}
