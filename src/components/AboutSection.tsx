"use client";

import {
  MapPin,
  Globe2,
  HeartHandshake,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: The Kasvello Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5B00]/10 border border-[#FF5B00]/20 text-[#FF5B00] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agency Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] font-[family-name:var(--font-jakarta)]">
              Local Roots. <br />
              <span className="text-[#FF5B00]">Digital Reach.</span>
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Kasvello was founded in <strong>Kasaragod, Kerala</strong> with a sharp, uncompromising conviction:
              regional and emerging businesses deserve world-class digital growth architectures — not outdated
              templates, inflated agency retainers, or vanity metrics.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              While our heritage and commercial empathy are deeply rooted in the vibrant entrepreneurial
              landscape of Malabar and Kerala, our digital reach operates without borders. We bridge the gap
              between grassroots business grit and international-caliber performance marketing, modern Next.js
              web engineering, and creative storytelling.
            </p>

            {/* Geographic Geo Badge */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-studio flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF5B00]/10 text-[#FF5B00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Headquarters</div>
                  <div className="text-xs text-slate-500">Kasaragod, Kerala • India</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] font-mono font-bold text-[#FF5B00]">12.5102° N, 75.0048° E</div>
                <div className="text-[11px] text-slate-500">Serving Kerala &amp; Global Brands</div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Beliefs & Vision */}
          <div className="lg:col-span-6 space-y-6">
            {/* What We Believe Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-studio hover:border-[#FF5B00]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-[family-name:var(--font-jakarta)]">
                  What We Believe
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Marketing isn&apos;t just about clicks, cosmetic likes, or algorithmic noise. True marketing
                is about forging an authentic bridge between an extraordinary product or service and the exact
                people who need it — engineered to produce measurable, recurring business revenue.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-studio hover:border-[#FF5B00]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#FF5B00]/10 text-[#FF5B00]">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-[family-name:var(--font-jakarta)]">
                  Our Vision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To empower forward-thinking businesses to scale far beyond their physical boundaries
                through relentless creative innovation, modern web engineering, and rigorous, data-backed digital
                performance strategy.
              </p>
            </div>

            {/* Guiding Operating Principles */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2.5">
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                Our Non-Negotiables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Revenue Over Hype</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF5B00] shrink-0" />
                  <span>Founder Accountability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
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
