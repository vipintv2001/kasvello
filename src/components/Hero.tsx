"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Zap,
  Target,
  Code2,
  Activity,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Ambient Orange/Amber Radial Mesh Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[550px] bg-gradient-to-b from-[#FF5B00]/15 via-[#FFAA00]/8 to-transparent rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-[#FF5B00]/8 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-[#FFAA00]/8 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-subtle-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Elegant Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/50 hover:border-[#FF5B00]/40 transition-colors cursor-default"
        >
          <span className="p-1 rounded-full bg-[#FF5B00]/10 text-[#FF5B00]">
            <Flame className="w-3.5 h-3.5" />
          </span>
          <span className="text-slate-900 font-bold">Kasvello</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-slate-600">Creative Digital Growth Agency</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-slate-500 font-medium">Kasaragod, Kerala</span>
        </motion.div>

        {/* Refined Bold Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-[#0F172A] leading-[1.08] max-w-5xl mx-auto font-[family-name:var(--font-jakarta)]"
        >
          Ideas That Connect. <br />
          <span className="text-[#FF5B00]">Strategies That Grow.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Kasvello is a creative digital growth agency helping ambitious businesses scale through data-backed performance ads, high-intent SEO,
          modern websites, and engaging brand storytelling.{" "}
          <span className="text-slate-900 font-semibold underline decoration-[#FF5B00]/40 decoration-2 underline-offset-4">
            Local roots with digital reach.
          </span>
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#FF5B00] hover:bg-[#E04F00] shadow-lg shadow-[#FF5B00]/25 hover:shadow-[#FF5B00]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Claim Free Growth Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:border-slate-300 transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-[#FF5B00]" />
            <span>Explore Our Capabilities</span>
          </a>
        </motion.div>

        {/* Live Availability Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Currently accepting 3 growth partners for Q2-Q3 scaling</span>
        </motion.div>
      </div>

      {/* Trust & Credibility Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full mt-14"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
          {/* Pillar 1 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#FF5B00]/10 text-[#FF5B00] shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900 tracking-tight">Zero Vanity Metrics</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                Focused exclusively on qualified inquiries &amp; sales
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900 tracking-tight">Modern Next.js Stack</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                Sub-second load times &amp; 100 Core Web Vitals
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors">
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900 tracking-tight">Direct Founder Strategy</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                No handoffs to junior interns or account managers
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors">
            <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900 tracking-tight">48-Hour Kickoff</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                Agile, responsive turnaround without red tape
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
