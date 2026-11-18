"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import KasvelloLogo from "./KasvelloLogo";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Kasvello", href: "#why-kasvello" },
  { name: "Our Approach", href: "#approach" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // Compact Dynamic Island on scroll down, expand on scroll up
      if (currentScrollY > 150 && currentScrollY > lastScrollY.current) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto mx-auto mt-4 transition-all duration-500 backdrop-blur-2xl border ${
          isCompact
            ? "max-w-xl py-2 px-4 rounded-full bg-[#080a0f]/90 border-emerald-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)]"
            : scrolled
            ? "max-w-6xl py-3 px-5 sm:px-6 rounded-2xl bg-[#080a0f]/85 border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            : "max-w-6xl py-3.5 px-5 sm:px-6 rounded-2xl bg-white/[0.02] border-white/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Authentic Kasvello Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Kasvello Home"
          >
            <KasvelloLogo size="md" />
            <div className={`hidden sm:flex flex-col border-l border-white/10 pl-3 transition-opacity duration-300 ${isCompact ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
              <span className="text-[11px] font-bold tracking-tight text-[#f8fafc] uppercase leading-none font-mono">
                Kasvello
              </span>
              <span className="text-[10px] text-emerald-400 font-medium leading-none mt-0.5 font-mono">
                Kasaragod, Kerala
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors duration-150 rounded-full hover:bg-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl text-[#040507] bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] font-mono"
            >
              <span>Claim Growth Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg text-[#040507] bg-emerald-400 font-mono"
            >
              Audit
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mx-auto max-w-6xl mt-2 px-5 py-5 rounded-2xl bg-[#080a0f] border border-white/[0.08] shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Menu
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400">
                  <Sparkles className="w-3 h-3" /> Kasaragod, Kerala
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-200 hover:text-emerald-400 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs font-mono font-bold py-3 rounded-xl text-[#040507] bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  Claim Growth Audit
                </a>
                <a
                  href="https://wa.me/?text=Hi%20Kasvello%20team,%20I%20want%20to%20discuss%20digital%20growth%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
                >
                  Chat with Us on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
