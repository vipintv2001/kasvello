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

const advantages = [
  {
    icon: UserCheck,
    title: "Founder-Led Dedication",
    description:
      "Your campaigns and growth systems are architected and executed directly by passionate founders. No bait-and-switch handoffs to junior interns or account managers who don't know your business.",
    highlight: "100% Founder Oversight",
  },
  {
    icon: BarChart3,
    title: "Zero Fluff & Vanity Jargon",
    description:
      "We refuse to hide behind meaningless 'brand impressions' or cosmetic reach numbers. We measure and report exclusively on qualified customer inquiries, phone calls, booked appointments, and revenue.",
    highlight: "Qualified Pipeline Focus",
  },
  {
    icon: Cpu,
    title: "Next-Gen Tech Architecture",
    description:
      "While legacy firms build on bloated WordPress templates clogged with 40 plugins, we deploy bespoke Next.js and React architectures with sub-second speeds and flawless Core Web Vitals.",
    highlight: "Sub-Second Next.js Stack",
  },
  {
    icon: Sliders,
    title: "Budget-Conscious Agility",
    description:
      "Custom growth strategies engineered around your exact commercial stage. We iterate in hours, not months, eliminating the bureaucratic overhead and retainer bloat of old-school agencies.",
    highlight: "Zero Bureaucracy",
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
    <section id="why-kasvello" className="relative py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5B00]/10 border border-[#FF5B00]/20 text-[#FF5B00] text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>The Modern Startup Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[family-name:var(--font-jakarta)]">
            Why Ambitious Brands Choose Kasvello.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            In an industry crowded with bloated retainers and fabricated case studies, Kasvello represents
            the new standard: lean, radically transparent, high-speed growth engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#FF5B00]/10 text-[#FF5B00] group-hover:bg-[#FF5B00] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#FF5B00] bg-[#FF5B00]/10 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-jakarta)] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-studio">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#FF5B00] tracking-wider uppercase">
              Clear Differentiation
            </span>
            <h3 className="text-2xl font-bold text-[#0F172A] mt-1 font-[family-name:var(--font-jakarta)]">
              Traditional Legacy Agencies vs. Kasvello
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-700 w-1/4">Focus Area</th>
                  <th className="py-4 px-4 font-bold text-slate-500 w-3/8">
                    Traditional Agencies
                  </th>
                  <th className="py-4 px-4 font-bold text-[#FF5B00] w-3/8 bg-[#FF5B00]/5 rounded-t-xl">
                    The Kasvello Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{row.aspect}</td>
                    <td className="py-4 px-4 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-900 font-semibold bg-[#FF5B00]/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.kasvello}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full commercial transparency. No hidden markups or retainers without ROI.</span>
            </div>
            <a
              href="#contact"
              className="text-[#FF5B00] hover:text-[#E04F00] font-bold transition-colors inline-flex items-center gap-1"
            >
              Discuss your growth requirements &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
