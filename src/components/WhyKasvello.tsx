"use client";

import {
  UserCheck,
  BarChart3,
  Cpu,
  Sliders,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SpotlightCard from "./animations/SpotlightCard";

const advantages = [
  {
    icon: UserCheck,
    title: "Founder-Led Dedication",
    description:
      "Your campaigns and growth systems are architected and executed directly by passionate founders. No bait-and-switch handoffs to junior interns or account managers who don't know your business.",
    highlight: "100% Founder Oversight",
    color: "rgba(16, 185, 129, 0.2)",
    accentText: "text-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Zero Fluff & Vanity Jargon",
    description:
      "We refuse to hide behind meaningless 'brand impressions' or cosmetic reach numbers. We measure and report exclusively on qualified customer inquiries, phone calls, booked appointments, and revenue.",
    highlight: "Qualified Pipeline Focus",
    color: "rgba(6, 182, 212, 0.2)",
    accentText: "text-cyan-400",
  },
  {
    icon: Cpu,
    title: "Next-Gen Tech Architecture",
    description:
      "While legacy firms build on bloated WordPress templates clogged with 40 plugins, we deploy bespoke Next.js and React architectures with sub-second speeds and flawless Core Web Vitals.",
    highlight: "Sub-Second Next.js Stack",
    color: "rgba(245, 158, 11, 0.2)",
    accentText: "text-amber-400",
  },
  {
    icon: Sliders,
    title: "Budget-Conscious Agility",
    description:
      "Custom growth strategies engineered around your exact commercial stage. We iterate in hours, not months, eliminating the bureaucratic overhead and retainer bloat of old-school agencies.",
    highlight: "Zero Bureaucracy",
    color: "rgba(168, 85, 247, 0.2)",
    accentText: "text-purple-400",
  },
];

const comparisonData = [
  {
    aspect: "Campaign Execution",
    traditional: "Passed down to inexperienced junior trainees",
    kasvello: "Strategized & deployed directly by founders",
  },
  {
    aspect: "Performance Reporting",
    traditional: "Vague PDF graphs focused on impressions & clicks",
    kasvello: "Real-time dashboard tracking leads & verified revenue",
  },
  {
    aspect: "Web Technology",
    traditional: "Slow, insecure WordPress with 30+ plugin vulnerabilities",
    kasvello: "Lightning-fast static Next.js with 100 Core Web Vitals",
  },
  {
    aspect: "Turnaround Speed",
    traditional: "2–4 weeks of bureaucratic meetings and approvals",
    kasvello: "Agile 48-hour campaign deployment & rapid iteration",
  },
  {
    aspect: "Pricing & Contracts",
    traditional: "Inflated retainers with locked-in 12-month lockups",
    kasvello: "Transparent, performance-first, ROI-justified engagement",
  },
];

export default function WhyKasvello() {
  return (
    <section id="why-kasvello" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4 font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>The Modern Startup Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight font-[family-name:var(--font-jakarta)]">
            Why Ambitious Brands Choose Kasvello.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            In an industry crowded with bloated retainers and fabricated case studies, Kasvello represents
            the new standard: lean, radically transparent, high-speed growth engineering.
          </p>
        </div>

        {/* 4 Pillars Interactive Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={index}
                spotlightColor={item.color}
                cursorLabel="ADVANTAGE"
                className="group"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f8fafc] font-[family-name:var(--font-jakarta)] mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
              Clear Differentiation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f8fafc] mt-1 font-[family-name:var(--font-jakarta)]">
              Traditional Legacy Agencies vs. Kasvello
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="py-4 px-4 font-bold text-slate-300 w-1/4">Focus Area</th>
                  <th className="py-4 px-4 font-bold text-slate-500 w-3/8">
                    Traditional Agencies
                  </th>
                  <th className="py-4 px-4 font-bold text-emerald-400 w-3/8 bg-emerald-500/[0.04] border-x border-t border-emerald-500/20 rounded-t-xl font-mono">
                    The Kasvello Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#f8fafc]">{row.aspect}</td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-200 font-semibold bg-emerald-500/[0.04] border-x border-emerald-500/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.kasvello}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full commercial transparency. No hidden markups or retainers without ROI.</span>
            </div>
            <a
              href="#contact"
              className="text-emerald-400 hover:text-cyan-400 font-bold transition-colors inline-flex items-center gap-1 font-mono"
            >
              Discuss your growth requirements &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
