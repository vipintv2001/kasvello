"use client";

import React, { useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { useSmoothScroll } from "./SmoothScrollProvider";

const ROW_1 = [
  "NEXT.JS ARCHITECTURE",
  "•",
  "HIGH-INTENT SEO",
  "•",
  "PERFORMANCE MARKETING",
  "•",
  "VIRAL MEDIA PRODUCTION",
  "•",
  "KASARAGOD TO THE WORLD",
  "•",
];

const ROW_2 = [
  "FOUNDER-DIRECT STRATEGY",
  "•",
  "ZERO VANITY METRICS",
  "•",
  "100 CORE WEB VITALS",
  "•",
  "48-HOUR CAMPAIGN DEPLOYMENT",
  "•",
  "ROI-BACKED GROWTH",
  "•",
];

export default function KineticMarquee() {
  const { velocity } = useSmoothScroll();
  const skewSpring = useSpring(0, { damping: 20, stiffness: 180 });

  useEffect(() => {
    // Clamp and apply velocity to skew angle
    const clampedVelocity = Math.max(-15, Math.min(15, velocity * 0.8));
    skewSpring.set(clampedVelocity);
  }, [velocity, skewSpring]);

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/[0.06] bg-[#040507] select-none">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-emerald-500/[0.04] blur-3xl pointer-events-none" />

      {/* Row 1: Left to Right with Velocity Skew */}
      <motion.div
        style={{ skewX: skewSpring }}
        className="flex whitespace-nowrap overflow-hidden py-2"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-6 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-white/30 uppercase shrink-0"
        >
          {[...ROW_1, ...ROW_1].map((text, idx) => (
            <span
              key={idx}
              className={`hover:text-emerald-400 transition-colors duration-200 ${
                text === "•" ? "text-emerald-400/60" : ""
              }`}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Row 2: Right to Left with Inverted Skew */}
      <motion.div
        style={{ skewX: skewSpring }}
        className="flex whitespace-nowrap overflow-hidden py-2"
      >
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 28,
          }}
          className="flex items-center gap-6 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-emerald-400/25 uppercase shrink-0"
        >
          {[...ROW_2, ...ROW_2].map((text, idx) => (
            <span
              key={idx}
              className={`hover:text-cyan-400 transition-colors duration-200 ${
                text === "•" ? "text-cyan-400/60" : ""
              }`}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
