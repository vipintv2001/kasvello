"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShutterPreloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Only run on client mount
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 150);
          setTimeout(() => setIsRemoved(true), 1300);
          return 100;
        }
        // Organic acceleration step
        const step = Math.max(1, Math.floor((100 - prev) * 0.14));
        return Math.min(100, prev + step);
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[1000] pointer-events-none flex flex-col justify-between"
    >
      {/* 5 Architectural Vertical Shutters */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-auto">
        {[0, 1, 2, 3, 4].map((colIndex) => (
          <motion.div
            key={colIndex}
            initial={{ y: 0 }}
            animate={isDone ? { y: "-102%" } : { y: 0 }}
            transition={{
              duration: 0.95,
              ease: [0.87, 0, 0.13, 1],
              delay: colIndex * 0.07,
            }}
            className="h-full w-full bg-[#040507] border-r border-white/[0.04] relative flex flex-col justify-between p-6"
          >
            {/* Ambient Column Gradient Line */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-500/[0.04] to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Centered Minimal Brand & Kinetic Progress Counter */}
      <AnimatePresence>
        {!isDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            {/* SVG Geometric Monogram Line-Draw */}
            <div className="relative mb-8 w-20 h-20 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-emerald-400"
              >
                {/* Outer Diamond */}
                <motion.polygon
                  points="50,6 94,50 50,94 6,50"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="opacity-40"
                />
                {/* Inner Dynamic Growth Chevron / K-Prism */}
                <motion.path
                  d="M32 30V70M32 50L68 30M32 50L68 70"
                  stroke="url(#auroraGradientPreload)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient
                    id="auroraGradientPreload"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
            </div>

            {/* Typography & Coordinates */}
            <div className="text-center space-y-2">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold block">
                Kasvello • Growth Architecture
              </span>
              <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#f8fafc] tracking-tight">
                {String(progress).padStart(2, "0")}
                <span className="text-emerald-400 text-2xl ml-1 font-sans font-light">
                  %
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                12.5102° N, 75.0048° E • Initializing
              </div>
            </div>

            {/* Bottom Progress Bar Beam */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/[0.08] rounded-full mt-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
