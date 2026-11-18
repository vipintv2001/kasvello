"use client";

import {
  Search,
  Compass,
  Layers,
  Rocket,
  LineChart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Discovery, Audience & Commercial Audit",
    icon: Search,
    description:
      "We begin by deconstructing your business model, customer lifetime value, competitor blindspots in Kerala and nationwide, and identifying your exact pipeline bottlenecks.",
    deliverable: "Growth Opportunity Audit & Competitor Benchmark Report",
    highlight: "Foundation First",
  },
  {
    step: "02",
    title: "Strategize",
    subtitle: "Channel Architecture & Unit Economics",
    icon: Compass,
    description:
      "No spray-and-pray tactics. We architect a bespoke omnichannel blueprint combining high-intent SEO, paid Meta/Google conversion funnels, and retention-focused brand positioning.",
    deliverable: "Full-Funnel Acquisition Roadmap & Budget Allocation Model",
    highlight: "Zero Guesswork",
  },
  {
    step: "03",
    title: "Create",
    subtitle: "High-Converting Creative & Next.js Assets",
    icon: Layers,
    description:
      "Our creative and engineering team builds scroll-stopping video ads, psychology-driven conversion copy, and lightning-fast Next.js landing pages engineered to convert visitors into inquiries.",
    deliverable: "Production Ad Creatives, Conversion Copy & Landing Systems",
    highlight: "Compelling Craft",
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Precision Deployment & Tracking Telemetry",
    icon: Rocket,
    description:
      "We launch campaigns with full server-side conversion API (CAPI) tracking, Google Analytics 4 telemetry, keyword indexing, and strict ad budget safety caps to eliminate accidental waste.",
    deliverable: "Multi-Platform Live Launch & Real-Time Tracking Integration",
    highlight: "48-Hour Execution",
  },
  {
    step: "05",
    title: "Optimize & Scale",
    subtitle: "Scientific A/B Testing & Pipeline Compounding",
    icon: LineChart,
    description:
      "We continuously analyze cost-per-lead, kill underperforming ad variations, scale winning audience segments, and compound organic rankings to systematically increase qualified inquiries.",
    deliverable: "Weekly KPI Reviews, Iterative Ad Testing & Scaling Playbook",
    highlight: "Continuous ROI",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="approach" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 5-Step Growth Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight font-[family-name:var(--font-jakarta)]">
            How We Turn Strategy Into Predictable Revenue.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested 5-phase growth framework that eliminates uncertainty and scales your business
            consistently from day one.
          </p>
        </div>

        {/* Stepped Timeline */}
        <div className="relative">
          {/* Central Connecting Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500/30 via-cyan-500/30 to-amber-500/30" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* Left Column (Desktop) / Main Card (if Even) */}
                  <div className="w-full md:w-1/2 md:pr-10 order-2 md:order-1">
                    {isEven ? (
                      <div className="p-6 sm:p-8 rounded-3xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 md:text-right">
                        <div className="flex items-center gap-2.5 mb-3 md:justify-end">
                          <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                            Phase {item.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                          <span className="text-[11px] font-mono font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
                            {item.highlight}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-[family-name:var(--font-jakarta)] mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xs font-semibold text-slate-400 mb-3 font-mono">
                          {item.subtitle}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-emerald-400 md:justify-end">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-semibold text-slate-400">
                            Deliverable: <span className="text-[#f8fafc]">{item.deliverable}</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full" />
                    )}
                  </div>

                  {/* Center Node / Step Indicator */}
                  <div className="relative z-10 shrink-0 mb-4 md:mb-0 order-1 md:order-2 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#080a0f] border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)] text-emerald-400 font-bold font-mono text-sm group-hover:bg-gradient-to-tr group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:text-[#040507] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300">
                    {item.step}
                  </div>

                  {/* Right Column (Desktop) / Main Card (if Odd) */}
                  <div className="w-full md:w-1/2 md:pl-10 order-3">
                    {!isEven ? (
                      <div className="p-6 sm:p-8 rounded-3xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300 text-left">
                        <div className="flex items-center gap-2.5 mb-3 justify-start">
                          <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                            Phase {item.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                          <span className="text-[11px] font-mono font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
                            {item.highlight}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-[family-name:var(--font-jakarta)] mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xs font-semibold text-slate-400 mb-3 font-mono">
                          {item.subtitle}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-cyan-400 justify-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="font-semibold text-slate-400">
                            Deliverable: <span className="text-[#f8fafc]">{item.deliverable}</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-[#080a0f] border border-white/[0.08] px-5 py-2.5 rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Ready to activate this growth framework for your brand?</span>
            <a
              href="#contact"
              className="text-emerald-400 font-bold hover:text-cyan-400 transition-colors ml-1 font-mono"
            >
              Start Discovery &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
