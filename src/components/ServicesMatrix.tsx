"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Video,
  Search,
  Share2,
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  Play,
  Volume2,
  Star,
  ShieldCheck,
  Zap,
  BarChart2,
  Layers,
} from "lucide-react";

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

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF5B00]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5B00]/10 border border-[#FF5B00]/20 text-[#FF5B00] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[family-name:var(--font-jakarta)]">
            Everything You Need To Dominate &amp; Scale.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Six integrated, revenue-focused capabilities engineered with modern technology, rich creative
            craft, and transparent execution.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ============================================================== */}
          {/* Card 1: Web Design & Development (Browser Mockup) */}
          {/* ============================================================== */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(bentoServices[0])}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#FF5B00] bg-[#FF5B00]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Web Systems
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">01</span>
              </div>

              {/* Real Interactive Graphic: Minimal Browser Mockup */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-inner mb-5">
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="bg-white px-3 py-0.5 rounded-md border border-slate-200 text-[10px] font-mono text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    kasvello.in
                  </div>
                  <div className="w-4" />
                </div>

                {/* Browser Mockup Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-20 bg-slate-200 rounded" />
                    <span className="text-[9px] font-bold text-white bg-slate-900 px-2 py-0.5 rounded-full">
                      Next.js App
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-200/80 rounded" />
                  <div className="h-2 w-3/4 bg-slate-200/80 rounded" />
                  <div className="pt-1 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded">
                      <Zap className="w-2.5 h-2.5" /> 100/100 Core Web Vitals
                    </div>
                    <span className="text-[9px] font-semibold text-[#FF5B00]">Sub-second</span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors font-[family-name:var(--font-jakarta)]">
                {bentoServices[0].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {bentoServices[0].text}
              </p>
            </div>

            {/* Bottom Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#FF5B00] transition-colors">
              <span>View Full Deliverables</span>
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FF5B00]/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* Card 2: Performance Marketing (Analytical Ad Card) */}
          {/* ============================================================== */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(bentoServices[1])}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Paid Growth
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">02</span>
              </div>

              {/* Real Interactive Graphic: Analytics Ad Card */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-inner mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-700">Meta &amp; Google Ads</span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    Active Funnel
                  </span>
                </div>

                {/* Key Metrics Badges */}
                <div className="grid grid-cols-2 gap-2 mb-2.5">
                  <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                    <div className="text-[9px] text-slate-400 font-medium">Verified ROAS</div>
                    <div className="text-sm font-extrabold text-[#FF5B00]">4.1x Return</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                    <div className="text-[9px] text-slate-400 font-medium">Inquiry Lift</div>
                    <div className="text-sm font-extrabold text-emerald-600">+340% Leads</div>
                  </div>
                </div>

                {/* Mini Graph Bar Visualization */}
                <div className="flex items-end gap-1.5 h-8 bg-white p-1 rounded-lg border border-slate-200/60">
                  <div className="flex-1 bg-slate-200 h-2 rounded-t" />
                  <div className="flex-1 bg-slate-300 h-3 rounded-t" />
                  <div className="flex-1 bg-[#FF5B00]/40 h-4 rounded-t" />
                  <div className="flex-1 bg-[#FF5B00]/70 h-6 rounded-t" />
                  <div className="flex-1 bg-[#FF5B00] h-7 rounded-t" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors font-[family-name:var(--font-jakarta)]">
                {bentoServices[1].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {bentoServices[1].text}
              </p>
            </div>

            {/* Bottom Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#FF5B00] transition-colors">
              <span>View Full Deliverables</span>
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FF5B00]/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* Card 3: Content & Video Marketing (Reels Mockup) */}
          {/* ============================================================== */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(bentoServices[2])}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  High-Retention Media
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">03</span>
              </div>

              {/* Real Interactive Graphic: Stylized Mobile Reel Mockup */}
              <div className="rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 text-white shadow-inner mb-5 relative overflow-hidden">
                <div className="flex items-center justify-between pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wide">
                      Brand Reel
                    </span>
                  </div>
                  <Volume2 className="w-3 h-3 text-slate-400" />
                </div>

                {/* Center Video Play Simulation */}
                <div className="my-2 py-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2">
                  <div className="p-2 rounded-full bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/40">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-white">Attention-Hooked Video</div>
                    <div className="text-[9px] text-slate-300">98.4k Views • 4.2k Shares</div>
                  </div>
                </div>

                {/* Soundwave Visualizer Bars */}
                <div className="flex items-center justify-between gap-1 pt-1 opacity-70">
                  <div className="h-1.5 w-1 bg-[#FF5B00] rounded" />
                  <div className="h-3 w-1 bg-[#FF5B00] rounded" />
                  <div className="h-2 w-1 bg-white rounded" />
                  <div className="h-4 w-1 bg-[#FF5B00] rounded" />
                  <div className="h-2.5 w-1 bg-white rounded" />
                  <div className="h-3.5 w-1 bg-[#FF5B00] rounded" />
                  <div className="h-1.5 w-1 bg-white rounded" />
                  <div className="h-3 w-1 bg-[#FF5B00] rounded" />
                  <div className="h-2 w-1 bg-white rounded" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors font-[family-name:var(--font-jakarta)]">
                {bentoServices[2].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {bentoServices[2].text}
              </p>
            </div>

            {/* Bottom Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#FF5B00] transition-colors">
              <span>View Full Deliverables</span>
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FF5B00]/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* Card 4: Search Engine Optimization (Google SERP Mockup) */}
          {/* ============================================================== */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(bentoServices[3])}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Organic Dominance
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">04</span>
              </div>

              {/* Real Interactive Graphic: Google Search Result Mockup */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-inner mb-5">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-[8px]">
                    G
                  </span>
                  <span className="truncate">https://yourbrand.com</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-bold text-emerald-600">Position #1</span>
                </div>

                <div className="text-xs font-bold text-blue-700 truncate hover:underline mb-1">
                  Leading Brand in Kerala | Official Site
                </div>

                <div className="flex items-center gap-1 text-[10px] text-amber-500 mb-1.5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-700">4.9</span>
                  <span className="text-slate-400">(128+ verified reviews)</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-[9px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium">
                    Google 3-Pack Verified
                  </span>
                  <span className="text-[9px] bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded font-bold">
                    Zero Ad Spend
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors font-[family-name:var(--font-jakarta)]">
                {bentoServices[3].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {bentoServices[3].text}
              </p>
            </div>

            {/* Bottom Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#FF5B00] transition-colors">
              <span>View Full Deliverables</span>
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FF5B00]/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* Card 5: Social Media Marketing (Instagram Profile Mockup) */}
          {/* ============================================================== */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(bentoServices[4])}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Social Presence
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">05</span>
              </div>

              {/* Real Interactive Graphic: Social Profile Card Mockup */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-inner mb-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-0.5">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-[10px] text-slate-900">
                        K
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                        @yourbrand <ShieldCheck className="w-3 h-3 text-blue-500 fill-blue-50" />
                      </div>
                      <div className="text-[8px] text-slate-500">Active Community</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-extrabold text-[#FF5B00]">+12.4k Reach</span>
                  </div>
                </div>

                {/* Aesthetic Story Circles */}
                <div className="flex gap-2 py-1 justify-between">
                  {["Drop", "Story", "Reviews", "BTS"].map((story) => (
                    <div key={story} className="flex flex-col items-center gap-0.5">
                      <div className="w-6 h-6 rounded-full border border-pink-400 bg-white p-0.5 flex items-center justify-center text-[7px] font-bold text-slate-600">
                        {story[0]}
                      </div>
                      <span className="text-[7px] text-slate-500">{story}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors font-[family-name:var(--font-jakarta)]">
                {bentoServices[4].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {bentoServices[4].text}
              </p>
            </div>

            {/* Bottom Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#FF5B00] transition-colors">
              <span>View Full Deliverables</span>
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FF5B00]/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* Card 6: Creative Branding (Design Palette Swatches) */}
          {/* ============================================================== */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(bentoServices[5])}
            className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-studio hover:border-[#FF5B00]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Brand Systems
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">06</span>
              </div>

              {/* Real Interactive Graphic: Designer Palette Grid */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-inner mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-700">Typography &amp; Color System</span>
                  <span className="text-[9px] font-mono text-slate-400">v2.0</span>
                </div>

                {/* Typography Specimen */}
                <div className="bg-white p-2 rounded-lg border border-slate-200/60 mb-2 flex items-baseline justify-between">
                  <span className="text-base font-extrabold text-[#0F172A] tracking-tight">
                    Aa Bb Gg
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">Plus Jakarta Sans</span>
                </div>

                {/* Swatches Grid */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="bg-[#FF5B00] rounded-md p-1.5 text-center text-white text-[8px] font-mono font-bold shadow-sm">
                    #FF5B00
                  </div>
                  <div className="bg-[#0F172A] rounded-md p-1.5 text-center text-white text-[8px] font-mono font-bold shadow-sm">
                    #0F172A
                  </div>
                  <div className="bg-[#F8F9FA] border border-slate-300 rounded-md p-1.5 text-center text-slate-700 text-[8px] font-mono font-bold">
                    #F8F9FA
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors font-[family-name:var(--font-jakarta)]">
                {bentoServices[5].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {bentoServices[5].text}
              </p>
            </div>

            {/* Bottom Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#FF5B00] transition-colors">
              <span>View Full Deliverables</span>
              <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FF5B00]/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Modal for Selected Service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#FF5B00]/10 text-[#FF5B00]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FF5B00] tracking-wide uppercase">
                    Capability {selectedService.number} • {selectedService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[family-name:var(--font-jakarta)]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Subtitle & Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 my-4">
                <div className="text-xs font-bold text-slate-700">Strategy Overview:</div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {selectedService.text}
                </p>
              </div>

              {/* Full Deliverables Checklist */}
              <div className="mt-5">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Scope of Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5B00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Impact & Turnaround */}
              <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-slate-800 block mb-1">
                    Revenue &amp; Growth Impact:
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedService.strategicImpact}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block mb-1">
                    Estimated Kickoff / Turnaround:
                  </span>
                  <p className="text-slate-600 leading-relaxed">{selectedService.timeline}</p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Close Details
                </button>
                <a
                  href={`#contact?service=${encodeURIComponent(selectedService.title)}`}
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#FF5B00] hover:bg-[#E04F00] shadow-md shadow-[#FF5B00]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
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
