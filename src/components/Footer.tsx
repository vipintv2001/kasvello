"use client";

import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight, Heart, Sparkles } from "lucide-react";
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

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-100">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-5">
            {/* Authentic Kasvello Logo */}
            <Link href="/" className="inline-block">
              <KasvelloLogo size="lg" />
            </Link>

            <p className="text-sm font-bold text-slate-900">
              Ideas that connect. Strategies that grow.
            </p>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Kasvello is a creative digital growth agency founded in Kasaragod, Kerala. We engineer
              high-intent SEO, performance ad funnels, modern Next.js web systems, and brand storytelling.
            </p>

            {/* Local Roots Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00]" />
              <span>Local Roots. Digital Reach.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Services Bento
                </a>
              </li>
              <li>
                <a href="#why-kasvello" className="hover:text-[#FF5B00] transition-colors">
                  Why Kasvello
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#FF5B00] transition-colors">
                  5-Step Approach
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF5B00] transition-colors">
                  About Kasvello
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FF5B00] transition-colors">
                  FAQ Accordion
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF5B00] transition-colors">
                  Contact &amp; Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Capabilities</div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Web Design &amp; Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Performance Marketing (Paid Ads)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Content &amp; Video Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Social Media Marketing &amp; Reels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5B00] transition-colors">
                  Creative Branding &amp; Visual Identity
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Location */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct Connect</div>
            <div className="space-y-2.5 font-medium">
              <a
                href="https://wa.me/?text=Hi%20Kasvello%20team,%20I%20want%20to%20discuss%20digital%20growth%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-700 hover:text-emerald-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:kasvello.digital@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-700 hover:text-[#FF5B00] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF5B00] shrink-0" />
                <span>kasvello.digital@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/kasvello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-700 hover:text-purple-600 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-purple-600 shrink-0" />
                <span>@kasvello on Instagram</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 leading-snug">
              Serving businesses across Kasaragod, Kannur, Kozhikode, Kochi, Pan-India &amp; worldwide.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            &copy; {currentYear} Kasvello. All rights reserved.
          </div>

          {/* Tech & Origin Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built with Next.js in Kasaragod, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
