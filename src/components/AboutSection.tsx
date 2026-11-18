"use client";

import {
  MapPin,
  Globe2,
  HeartHandshake,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import TextWordScrub from "./animations/TextWordScrub";
import ConstellationHub from "./animations/ConstellationHub";

export default function AboutSection() {
  const storyP1 =
    "Kasvello was founded in Kasaragod, Kerala with a sharp, uncompromising conviction: regional and emerging businesses deserve world-class digital growth architectures — not outdated templates, inflated agency retainers, or vanity metrics.";

  const storyP2 =
    "While our heritage and commercial empathy are deeply rooted in the vibrant entrepreneurial landscape of Malabar and Kerala, our digital reach operates without borders. We bridge the gap between grassroots business grit and international-caliber performance marketing, modern Next.js web engineering, and creative storytelling.";

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: The Kasvello Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agency Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight leading-[1.12] font-[family-name:var(--font-jakarta)]">
              Local Roots. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
                Digital Reach.
              </span>
            </h2>

            {/* Kinetic Word-Scrub Story Paragraph 1 */}
            <TextWordScrub
              text={storyP1}
              highlightWords={["Kasaragod,", "Kerala", "architectures", "revenue"]}
              className="text-base text-slate-300"
            />

            {/* Kinetic Word-Scrub Story Paragraph 2 */}
            <TextWordScrub
              text={storyP2}
              highlightWords={["Malabar", "Next.js", "marketing,", "storytelling."]}
              className="text-sm text-slate-400"
            />

            {/* Geographic Geo Badge */}
            <div className="p-5 rounded-2xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-xl shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#f8fafc]">Headquarters</div>
                  <div className="text-xs text-slate-400">Kasaragod, Kerala • India</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] font-mono font-bold text-emerald-400">
                  12.5102° N, 75.0048° E
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Serving Kerala &amp; Global Brands
                </div>
              </div>
            </div>

            {/* Interactive Connected Constellation Hub */}
            <div className="pt-4">
              <ConstellationHub />
            </div>
          </div>

          {/* Right Column: Core Beliefs & Vision */}
          <div className="lg:col-span-6 space-y-6 lg:pt-8">
            {/* What We Believe Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#f8fafc] font-[family-name:var(--font-jakarta)]">
                  What We Believe
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Marketing isn&apos;t just about clicks, cosmetic likes, or algorithmic noise. True marketing
                is about forging an authentic bridge between an extraordinary product or service and the exact
                people who need it — engineered to produce measurable, recurring business revenue.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#f8fafc] font-[family-name:var(--font-jakarta)]">
                  Our Vision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                To empower forward-thinking businesses to scale far beyond their physical boundaries
                through relentless creative innovation, modern web engineering, and rigorous, data-backed digital
                performance strategy.
              </p>
            </div>

            {/* Guiding Operating Principles */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl space-y-3">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Our Non-Negotiables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300 font-semibold font-mono">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Revenue Over Hype</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Founder Accountability</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Next-Gen Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
