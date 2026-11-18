"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Zap,
  Target,
  Code2,
  Activity,
  Flame,
} from "lucide-react";

// Dynamically import 3D Canvas with ssr: false so SEO / crawler HTML is immediate
const KasvelloCanvas = dynamic(() => import("./3d/KasvelloCanvas"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-24 flex flex-col justify-center overflow-hidden">
      {/* 3D WebGL Centerpiece: Morphing Growth Prism Ribbon */}
      <KasvelloCanvas />

      {/* Ambient Aurora Glow Radiance */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1000px] h-[600px] bg-gradient-to-b from-emerald-500/12 via-cyan-500/6 to-transparent rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-emerald-500/8 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-amber-500/6 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-obsidian-grid opacity-35 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
        {/* Kinetic Frosted Pill Badge with Animated Border Beam */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-xs sm:text-sm font-semibold text-slate-300 shadow-[0_0_20px_rgba(16,185,129,0.12)] hover:border-emerald-500/40 transition-colors cursor-default relative overflow-hidden group"
        >
          {/* Subtle Border Glow Shift */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <span className="p-1 rounded-full bg-emerald-500/15 text-emerald-400">
            <Flame className="w-3.5 h-3.5" />
          </span>
          <span className="text-[#f8fafc] font-bold">Kasvello</span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span className="text-slate-300">Creative Digital Growth Agency</span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span className="text-emerald-400 font-medium">Kasaragod, Kerala</span>
        </motion.div>

        {/* Refined Bold Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[#f8fafc] leading-[1.06] max-w-5xl mx-auto font-[family-name:var(--font-jakarta)]"
        >
          Ideas That Connect. <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
            Strategies That Grow.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Kasvello is a creative digital growth agency helping ambitious businesses scale through data-backed performance ads, high-intent SEO,
          modern websites, and engaging brand storytelling.{" "}
          <span className="text-[#f8fafc] font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">
            Local roots with digital reach.
          </span>
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-[#040507] bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Claim Free Growth Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#f8fafc] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl shadow-lg transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Explore Our Capabilities</span>
          </a>
        </motion.div>

        {/* Live Availability Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-7 flex items-center justify-center gap-2 text-xs font-mono text-slate-400"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping shadow-[0_0_8px_#10b981]" />
          <span>Currently accepting 3 growth partners for Q2-Q3 scaling</span>
        </motion.div>
      </div>

      {/* Trust & Credibility Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full mt-16 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#080a0f]/80 border border-white/[0.08] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {/* Pillar 1 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/[0.05]">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#f8fafc] tracking-tight">Zero Vanity Metrics</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                Focused exclusively on qualified inquiries &amp; sales
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/[0.05]">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#f8fafc] tracking-tight">Modern Next.js Stack</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                Sub-second load times &amp; 100 Core Web Vitals
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/[0.05]">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#f8fafc] tracking-tight">Direct Founder Strategy</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                No handoffs to junior interns or account managers
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/[0.05]">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#f8fafc] tracking-tight">48-Hour Kickoff</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                Agile, responsive turnaround without red tape
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
