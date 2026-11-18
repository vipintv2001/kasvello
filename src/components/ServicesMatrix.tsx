"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Star,
  ShieldCheck,
  Play,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  Layers,
} from "lucide-react";
import SpotlightCard from "./animations/SpotlightCard";

// Dynamic 3D WebGL Topology Canvas (ssr: false)
const TopologyCanvas = dynamic(() => import("./3d/TopologyCanvas"), {
  ssr: false,
});

export interface BentoService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  text: string;
  category: string;
  deliverables: string[];
  strategicImpact: string;
  timeline: string;
}

export const bentoServices: BentoService[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Design & Development",
    tagline: "Sub-Second Next.js Growth Platforms",
    text: "High-speed, mobile-first websites designed to turn visitors into paying enquiries.",
    category: "Engineering",
    deliverables: [
      "Custom Next.js App Router Architecture",
      "High-Converting Dedicated Landing Pages",
      "Mobile-Responsive Dynamic UX/UI",
      "100/100 Core Web Vitals Optimization",
      "SEO Metadata & Structured Schema Setup",
      "Website Security & Hosting Management",
    ],
    strategicImpact:
      "Cuts bounce rates by up to 60% and maximizes conversion rates through instantaneous static loading.",
    timeline: "10 to 21 business days sprint",
  },
  {
    id: "performance-ads",
    number: "02",
    title: "Performance Marketing",
    tagline: "High-ROI Paid Funnels (Meta & Google)",
    text: "Targeted Meta & Google ad campaigns engineered for positive ROI and lead generation.",
    category: "Acquisition",
    deliverables: [
      "Meta Ads (Targeted Instagram & Facebook Ads)",
      "Google Search & Performance Max Campaigns",
      "High-Intent Lead Generation Ad Funnels",
      "Server-Side Conversion API (CAPI) Telemetry",
      "Dynamic Retargeting Sequences",
      "Continuous Bid & Budget Spend Optimization",
    ],
    strategicImpact:
      "Strict unit economics tracking ensuring positive return on ad spend (ROAS) before scaling budgets.",
    timeline: "Rapid kickoff within 48 to 72 hours",
  },
  {
    id: "content-video",
    number: "03",
    title: "Content & Video Marketing",
    tagline: "High-Retention Storytelling & Viral Reels",
    text: "High-retention short-form reels, brand promos, and ad creatives that grab attention in 3 seconds.",
    category: "Media Production",
    deliverables: [
      "High-Retention Instagram Reels & Shorts",
      "Brand Promotional & Commercial Video Editing",
      "Conversion Video Ad Creative Iterations",
      "Psychology-Driven Scriptwriting & Hooks",
      "Punchy Captions & Audio Strategy",
      "Multi-Format Content Repurposing",
    ],
    strategicImpact:
      "Captures fleeting customer attention, sparks viral social sharing, and builds high brand affinity.",
    timeline: "Weekly content drops & fast turnarounds",
  },
  {
    id: "seo",
    number: "04",
    title: "Search Engine Optimization (SEO)",
    tagline: "First-Page Google Organic Authority",
    text: "Dominate local search in Kerala and capture high-intent buyers looking for your exact services.",
    category: "Organic Search",
    deliverables: [
      "Local SEO & Kasaragod/Kerala Geo-Targeting",
      "Google Business Profile (GBP) 3-Pack Rank",
      "Technical SEO & Schema Rich Snippets",
      "High-Intent Buyer Keyword Mapping",
      "On-Page Optimization & Internal Linking",
      "Conversion-Oriented Local Content Creation",
    ],
    strategicImpact:
      "Permanently captures ready-to-buy searchers without recurring pay-per-click ad expenditures.",
    timeline: "Compound results (Initial traction in 45–60 days)",
  },
  {
    id: "social",
    number: "05",
    title: "Social Media Marketing",
    tagline: "Community Building & Brand Authority",
    text: "Creative storytelling and community building that turns passive followers into active brand advocates.",
    category: "Organic Social",
    deliverables: [
      "Bespoke Social Media Channel Playbook",
      "Monthly Aesthetic Grid & Content Calendar",
      "Interactive Carousel & Story Sequencing",
      "Community Comment & DM Inquiry Funnels",
      "Audience Growth & Influencer Collaborations",
      "Monthly Engagement & Reach Diagnostics",
    ],
    strategicImpact:
      "Transforms your social presence into a vibrant commercial hub that consistently attracts inquiries.",
    timeline: "Ongoing weekly content management",
  },
  {
    id: "branding",
    number: "06",
    title: "Creative Branding",
    tagline: "Authoritative Visual Identity Systems",
    text: "Memorable visual identity systems including logos, business stationery, and brand guidelines.",
    category: "Design System",
    deliverables: [
      "Iconic Logo Design & Wordmark Crafting",
      "Color Palette, Typography & Graphic Toolkits",
      "Visiting Cards & Business Stationery",
      "Brochures, Catalogues & Print Assets",
      "Brand Guidelines & Visual Style Manual",
      "Social Media Graphic Templates & Presets",
    ],
    strategicImpact:
      "Commands premium brand positioning and instills immediate trust from the first customer touchpoint.",
    timeline: "Structured 2-week branding sprint",
  },
];

export default function ServicesMatrix() {
  const [selectedService, setSelectedService] = useState<BentoService | null>(null);
  const [hoveredServiceId, setHoveredServiceId] = useState<string>("web-dev");

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Dynamic 3D WebGL Topology Background */}
      <TopologyCanvas activeServiceId={hoveredServiceId} />

      {/* Ambient Aurora Glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight font-[family-name:var(--font-jakarta)]">
            Everything You Need To Dominate &amp; Scale.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Six integrated, revenue-focused capabilities engineered with modern technology, rich creative
            craft, and transparent execution.
          </p>
        </div>

        {/* 3D Spatial Deck Grid with Spotlight Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* ============================================================== */}
          {/* Card 1: Web Design & Development (Browser Mockup) */}
          {/* ============================================================== */}
          <div
            onMouseEnter={() => setHoveredServiceId("web-dev")}
            onClick={() => setSelectedService(bentoServices[0])}
            className="cursor-pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.2)"
              cursorLabel="INSPECT"
              className="h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    Web Systems
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">01</span>
                </div>

                {/* Real Interactive Graphic: Minimal Browser Mockup */}
                <div className="rounded-xl border border-white/[0.08] bg-[#040507]/90 p-3 shadow-inner mb-5">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="bg-white/[0.04] px-3 py-0.5 rounded-md border border-white/[0.08] text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      kasvello.in
                    </div>
                    <div className="w-4" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-20 bg-white/20 rounded" />
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        Next.js App
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="pt-1 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                        <Zap className="w-2.5 h-2.5" /> 100/100 Core Web Vitals
                      </div>
                      <span className="text-[9px] font-semibold text-cyan-400 font-mono">Sub-second</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-emerald-400 transition-colors font-[family-name:var(--font-jakarta)]">
                  {bentoServices[0].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoServices[0].text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">
                <span>View Full Deliverables</span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-emerald-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ============================================================== */}
          {/* Card 2: Performance Marketing (Analytical Ad Card) */}
          {/* ============================================================== */}
          <div
            onMouseEnter={() => setHoveredServiceId("performance-ads")}
            onClick={() => setSelectedService(bentoServices[1])}
            className="cursor-pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.2)"
              cursorLabel="INSPECT"
              className="h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    Paid Growth
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">02</span>
                </div>

                {/* Real Interactive Graphic: Analytics Ad Card */}
                <div className="rounded-xl border border-white/[0.08] bg-[#040507]/90 p-3 shadow-inner mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-300">Meta &amp; Google Ads</span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      Active Funnel
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-2.5">
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.06]">
                      <div className="text-[9px] text-slate-500 font-medium">Verified ROAS</div>
                      <div className="text-sm font-extrabold text-cyan-400 font-mono">4.1x Return</div>
                    </div>
                    <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.06]">
                      <div className="text-[9px] text-slate-500 font-medium">Inquiry Lift</div>
                      <div className="text-sm font-extrabold text-emerald-400 font-mono">+340% Leads</div>
                    </div>
                  </div>

                  {/* Mini Graph Bar Visualization */}
                  <div className="flex items-end gap-1.5 h-8 bg-white/[0.02] p-1 rounded-lg border border-white/[0.05]">
                    <div className="flex-1 bg-white/10 h-2 rounded-t" />
                    <div className="flex-1 bg-white/20 h-3 rounded-t" />
                    <div className="flex-1 bg-cyan-500/40 h-4 rounded-t" />
                    <div className="flex-1 bg-cyan-500/70 h-6 rounded-t" />
                    <div className="flex-1 bg-cyan-400 h-7 rounded-t shadow-[0_0_8px_#06b6d4]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-cyan-400 transition-colors font-[family-name:var(--font-jakarta)]">
                  {bentoServices[1].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoServices[1].text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                <span>View Full Deliverables</span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-cyan-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ============================================================== */}
          {/* Card 3: Content & Video Marketing (Reels Mockup) */}
          {/* ============================================================== */}
          <div
            onMouseEnter={() => setHoveredServiceId("content-video")}
            onClick={() => setSelectedService(bentoServices[2])}
            className="cursor-pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.2)"
              cursorLabel="INSPECT"
              className="h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    High-Retention Media
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">03</span>
                </div>

                {/* Real Interactive Graphic: Stylized Mobile Reel Mockup */}
                <div className="rounded-xl border border-white/[0.08] bg-[#040507]/90 p-3 shadow-inner mb-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide font-mono">
                        Brand Reel
                      </span>
                    </div>
                    <Volume2 className="w-3 h-3 text-slate-500" />
                  </div>

                  <div className="my-2 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-2">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                      <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-bold text-white">Attention-Hooked Video</div>
                      <div className="text-[9px] text-slate-400 font-mono">98.4k Views • 4.2k Shares</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-1 pt-1 opacity-70">
                    <div className="h-1.5 w-1 bg-purple-400 rounded" />
                    <div className="h-3 w-1 bg-purple-400 rounded" />
                    <div className="h-2 w-1 bg-white rounded" />
                    <div className="h-4 w-1 bg-purple-400 rounded" />
                    <div className="h-2.5 w-1 bg-white rounded" />
                    <div className="h-3.5 w-1 bg-purple-400 rounded" />
                    <div className="h-1.5 w-1 bg-white rounded" />
                    <div className="h-3 w-1 bg-purple-400 rounded" />
                    <div className="h-2 w-1 bg-white rounded" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-purple-400 transition-colors font-[family-name:var(--font-jakarta)]">
                  {bentoServices[2].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoServices[2].text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-purple-400 transition-colors">
                <span>View Full Deliverables</span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-purple-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ============================================================== */}
          {/* Card 4: Search Engine Optimization (Google SERP Mockup) */}
          {/* ============================================================== */}
          <div
            onMouseEnter={() => setHoveredServiceId("seo")}
            onClick={() => setSelectedService(bentoServices[3])}
            className="cursor-pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.2)"
              cursorLabel="INSPECT"
              className="h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    Organic Dominance
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">04</span>
                </div>

                {/* Real Interactive Graphic: Google Search Result Mockup */}
                <div className="rounded-xl border border-white/[0.08] bg-[#040507]/90 p-3 shadow-inner mb-5">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-[8px]">
                      G
                    </span>
                    <span className="truncate">https://yourbrand.com</span>
                    <span className="text-slate-600">•</span>
                    <span className="font-bold text-emerald-400 font-mono">Position #1</span>
                  </div>

                  <div className="text-xs font-bold text-blue-400 truncate mb-1">
                    Leading Brand in Kerala | Official Site
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-amber-400 mb-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-slate-300 font-mono">4.9</span>
                    <span className="text-slate-500">(128+ verified reviews)</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-[9px] bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded text-slate-300 font-medium">
                      Google 3-Pack Verified
                    </span>
                    <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold font-mono">
                      Zero Ad Spend
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-blue-400 transition-colors font-[family-name:var(--font-jakarta)]">
                  {bentoServices[3].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoServices[3].text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-blue-400 transition-colors">
                <span>View Full Deliverables</span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-blue-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ============================================================== */}
          {/* Card 5: Social Media Marketing (Instagram Profile Mockup) */}
          {/* ============================================================== */}
          <div
            onMouseEnter={() => setHoveredServiceId("social")}
            onClick={() => setSelectedService(bentoServices[4])}
            className="cursor-pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(236, 72, 153, 0.2)"
              cursorLabel="INSPECT"
              className="h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    Social Presence
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">05</span>
                </div>

                {/* Real Interactive Graphic: Social Profile Card Mockup */}
                <div className="rounded-xl border border-white/[0.08] bg-[#040507]/90 p-3 shadow-inner mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-0.5">
                        <div className="w-full h-full bg-[#040507] rounded-full flex items-center justify-center font-bold text-[10px] text-white">
                          K
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white flex items-center gap-1">
                          @yourbrand <ShieldCheck className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
                        </div>
                        <div className="text-[8px] text-slate-400">Active Community</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-extrabold text-pink-400 font-mono">+12.4k Reach</span>
                    </div>
                  </div>

                  <div className="flex gap-2 py-1 justify-between">
                    {["Drop", "Story", "Reviews", "BTS"].map((story) => (
                      <div key={story} className="flex flex-col items-center gap-0.5">
                        <div className="w-6 h-6 rounded-full border border-pink-500/50 bg-white/[0.04] p-0.5 flex items-center justify-center text-[7px] font-bold text-slate-300 font-mono">
                          {story[0]}
                        </div>
                        <span className="text-[7px] text-slate-400">{story}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-pink-400 transition-colors font-[family-name:var(--font-jakarta)]">
                  {bentoServices[4].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoServices[4].text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-pink-400 transition-colors">
                <span>View Full Deliverables</span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-pink-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ============================================================== */}
          {/* Card 6: Creative Branding (Design Palette Swatches) */}
          {/* ============================================================== */}
          <div
            onMouseEnter={() => setHoveredServiceId("branding")}
            onClick={() => setSelectedService(bentoServices[5])}
            className="cursor-pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.2)"
              cursorLabel="INSPECT"
              className="h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                    Brand Systems
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">06</span>
                </div>

                {/* Real Interactive Graphic: Designer Palette Grid */}
                <div className="rounded-xl border border-white/[0.08] bg-[#040507]/90 p-3 shadow-inner mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-300">Typography &amp; Color System</span>
                    <span className="text-[9px] font-mono text-slate-500">v2.0</span>
                  </div>

                  <div className="bg-white/[0.03] p-2 rounded-lg border border-white/[0.06] mb-2 flex items-baseline justify-between">
                    <span className="text-base font-extrabold text-[#f8fafc] tracking-tight">
                      Aa Bb Gg
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">Plus Jakarta Sans</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="bg-[#10b981] rounded-md p-1.5 text-center text-[#040507] text-[8px] font-mono font-bold shadow-sm">
                      #10B981
                    </div>
                    <div className="bg-[#06b6d4] rounded-md p-1.5 text-center text-[#040507] text-[8px] font-mono font-bold shadow-sm">
                      #06B6D4
                    </div>
                    <div className="bg-[#040507] border border-white/20 rounded-md p-1.5 text-center text-slate-200 text-[8px] font-mono font-bold">
                      #040507
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-amber-400 transition-colors font-[family-name:var(--font-jakarta)]">
                  {bentoServices[5].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {bentoServices[5].text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-amber-400 transition-colors">
                <span>View Full Deliverables</span>
                <div className="p-1.5 rounded-lg bg-white/[0.04] group-hover:bg-amber-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Selected Service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#080a0f] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 tracking-wide uppercase">
                    Capability {selectedService.number} • {selectedService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-[family-name:var(--font-jakarta)]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Subtitle & Summary */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] my-4">
                <div className="text-xs font-bold text-slate-300">Strategy Overview:</div>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                  {selectedService.text}
                </p>
              </div>

              {/* Full Deliverables Checklist */}
              <div className="mt-5">
                <h4 className="text-sm font-bold text-[#f8fafc] uppercase tracking-wider mb-3">
                  Scope of Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Impact & Turnaround */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-slate-200 block mb-1">
                    Revenue &amp; Growth Impact:
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {selectedService.strategicImpact}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-slate-200 block mb-1">
                    Estimated Kickoff / Turnaround:
                  </span>
                  <p className="text-slate-400 leading-relaxed">{selectedService.timeline}</p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Close Details
                </button>
                <a
                  href={`#contact?service=${encodeURIComponent(selectedService.title)}`}
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#040507] bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Request Strategy For This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
