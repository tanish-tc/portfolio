"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const pointerRef = useRef(false);
  const coordsRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    let running = true;
    function pointerLoop() {
      if (!running) return;
      const { x, y } = coordsRef.current;
      const el = document.elementFromPoint(x, y);
      let pointer = false;
      if (el) {
        pointer =
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          el.closest("a") !== null ||
          el.closest("button") !== null ||
          (el as HTMLElement).style?.cursor === "pointer" ||
          (el as HTMLElement).style?.cursor === "grab";
      }
      if (pointerRef.current !== pointer) {
        pointerRef.current = pointer;
        setIsPointer(pointer);
      }
      requestAnimationFrame(pointerLoop);
    }
    requestAnimationFrame(pointerLoop);
    return () => {
      running = false;
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999] mix-blend-difference"
        style={{ x, y }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      >
        <div className="relative -left-2 -top-2 h-4 w-4 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99998] mix-blend-difference"
        style={{ x, y }}
        animate={{
          opacity: isVisible ? 0.5 : 0,
          scale: isPointer ? 2 : 1,
        }}
        transition={{ scale: { duration: 0.3 }, opacity: { duration: 0.2 } }}
      >
        <div className="relative -left-5 -top-5 h-10 w-10 rounded-full border border-white/50" />
      </motion.div>
    </>
  );
}
