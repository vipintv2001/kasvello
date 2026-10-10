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
    <section id="approach" className="relative py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5B00]/10 border border-[#FF5B00]/20 text-[#FF5B00] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 5-Step Growth Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[family-name:var(--font-jakarta)]">
            How We Turn Strategy Into Predictable Revenue.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            A battle-tested 5-phase growth framework that eliminates uncertainty and scales your business
            consistently from day one.
          </p>
        </div>

        {/* Stepped Timeline */}
        <div className="relative">
          {/* Central Connecting Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-slate-200/80" />

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
                      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:text-right">
                        <div className="flex items-center gap-2.5 mb-3 md:justify-end">
                          <span className="text-[11px] font-bold tracking-widest text-[#FF5B00] uppercase">
                            Phase {item.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                            {item.highlight}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-jakarta)] mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xs font-semibold text-slate-500 mb-3">
                          {item.subtitle}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-[#FF5B00] md:justify-end">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5B00] shrink-0" />
                          <span className="font-semibold text-slate-700">
                            Deliverable: <span className="text-slate-900">{item.deliverable}</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full" />
                    )}
                  </div>

                  {/* Center Node / Step Indicator */}
                  <div className="relative z-10 shrink-0 mb-4 md:mb-0 order-1 md:order-2 flex items-center justify-center w-12 h-12 rounded-2xl bg-white border-2 border-[#FF5B00] shadow-md shadow-[#FF5B00]/20 text-[#FF5B00] font-bold font-mono text-sm group-hover:bg-[#FF5B00] group-hover:text-white transition-colors duration-300">
                    {item.step}
                  </div>

                  {/* Right Column (Desktop) / Main Card (if Odd) */}
                  <div className="w-full md:w-1/2 md:pl-10 order-3">
                    {!isEven ? (
                      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left">
                        <div className="flex items-center gap-2.5 mb-3 justify-start">
                          <span className="text-[11px] font-bold tracking-widest text-[#FF5B00] uppercase">
                            Phase {item.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                            {item.highlight}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-jakarta)] mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xs font-semibold text-slate-500 mb-3">
                          {item.subtitle}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-[#FF5B00] justify-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5B00] shrink-0" />
                          <span className="font-semibold text-slate-700">
                            Deliverable: <span className="text-slate-900">{item.deliverable}</span>
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
          <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ready to activate this growth framework for your brand?</span>
            <a
              href="#contact"
              className="text-[#FF5B00] font-bold hover:underline ml-1"
            >
              Start Discovery &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
