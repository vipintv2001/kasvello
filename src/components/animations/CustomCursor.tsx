"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag" | "card">("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer trailing ring
  const springX = useSpring(mouseX, { damping: 25, stiffness: 220, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const card = target.closest("[data-cursor='card']");

      if (card) {
        setCursorType("card");
        setCursorLabel((card as HTMLElement).dataset.cursorLabel || "EXPLORE");
      } else if (interactive) {
        setCursorType("hover");
        setCursorLabel("");
      } else {
        setCursorType("default");
        setCursorLabel("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const isHovered = cursorType === "hover";
  const isCard = cursorType === "card";

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isCard ? 84 : isHovered ? 48 : 34,
          height: isCard ? 84 : isHovered ? 48 : 34,
          backgroundColor: isCard
            ? "rgba(16, 185, 129, 0.2)"
            : isHovered
            ? "rgba(6, 182, 212, 0.15)"
            : "rgba(255, 255, 255, 0.04)",
          borderColor: isCard
            ? "rgba(16, 185, 129, 0.6)"
            : isHovered
            ? "rgba(6, 182, 212, 0.7)"
            : "rgba(255, 255, 255, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="fixed top-0 left-0 rounded-full border backdrop-blur-[2px] flex items-center justify-center pointer-events-none"
      >
        {isCard && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#10b981] uppercase select-none">
            {cursorLabel}
          </span>
        )}
      </motion.div>

      {/* Inner Pin Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isCard ? 0 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#06b6d4" : "#10b981",
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none shadow-[0_0_10px_#10b981]"
      />
    </div>
  );
}
