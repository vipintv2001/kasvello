"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import KasvelloLogo from "./KasvelloLogo";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#040507] border-t border-white/[0.08] pt-24 pb-12 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Command Center Status Bar */}
        <div className="mb-16 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-slate-300">
              KASARAGOD, IN &bull;{" "}
              <span className="text-emerald-400 font-bold">
                {istTime ? `${istTime} IST` : "12.5102° N, 75.0048° E"}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="tracking-widest uppercase">AVAILABLE FOR PROJECTS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-5">
            {/* Authentic Kasvello Logo */}
            <Link href="/" className="inline-block">
              <KasvelloLogo size="lg" />
            </Link>

            <p className="text-sm font-bold text-[#f8fafc]">
              Ideas that connect. Strategies that grow.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Kasvello is a creative digital growth agency founded in Kasaragod, Kerala. We engineer
              high-intent SEO, performance ad funnels, modern Next.js web systems, and brand storytelling.
            </p>

            {/* Local Roots Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Local Roots. Digital Reach.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold text-[#f8fafc] uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Services Bento
                </a>
              </li>
              <li>
                <a href="#why-kasvello" className="hover:text-emerald-400 transition-colors">
                  Why Kasvello
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-emerald-400 transition-colors">
                  5-Step Approach
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Kasvello
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ Accordion
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact &amp; Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold text-[#f8fafc] uppercase tracking-wider">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Web Design &amp; Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Performance Marketing (Paid Ads)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Content &amp; Video Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Social Media Marketing &amp; Reels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Creative Branding &amp; Visual Identity
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Location */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold text-[#f8fafc] uppercase tracking-wider">
              Direct Connect
            </div>
            <div className="space-y-2.5 font-medium">
              <a
                href="https://wa.me/?text=Hi%20Kasvello%20team,%20I%20want%20to%20discuss%20digital%20growth%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:kasvello.digital@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>kasvello.digital@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/kasvello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-purple-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-purple-400 shrink-0" />
                <span>@kasvello on Instagram</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 leading-snug">
              Serving businesses across Kasaragod, Kannur, Kozhikode, Kochi, Pan-India &amp; worldwide.
            </div>
          </div>
        </div>

        {/* Giant Kinetic 3D-Extruded "KASVELLO" Edge Typography */}
        <div className="relative py-8 my-4 overflow-hidden select-none group text-center pointer-events-auto">
          <div className="text-[14vw] sm:text-[15vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] to-white/[0.01] group-hover:from-emerald-400/40 group-hover:to-cyan-400/10 transition-all duration-700 font-mono leading-none">
            KASVELLO
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} Kasvello. All rights reserved.
          </div>

          {/* Tech & Origin Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Built with Next.js in Kasaragod, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
