"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto mx-auto max-w-6xl mt-4 px-5 sm:px-6 py-3 rounded-2xl transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgb(0,0,0,0.06)]"
            : "bg-white/80 border border-slate-200/70 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
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
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-[11px] font-bold tracking-tight text-slate-800 uppercase leading-none">
                Kasvello
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">
                Kasaragod, Kerala
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/70 border border-slate-200/60 px-3 py-1 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#FF5B00] transition-colors duration-150 rounded-full hover:bg-white/80"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all duration-200 shadow-md shadow-[#FF5B00]/25 hover:shadow-[#FF5B00]/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Claim Growth Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg text-white bg-[#FF5B00]"
            >
              Audit
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none"
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
            className="pointer-events-auto mx-auto max-w-6xl mt-2 px-5 py-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Menu
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF5B00]">
                  <Sparkles className="w-3 h-3" /> Kasaragod, Kerala
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#FF5B00] rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs font-bold py-3 rounded-xl text-white bg-[#FF5B00] shadow-md shadow-[#FF5B00]/25"
                >
                  Claim Growth Audit
                </a>
                <a
                  href="https://wa.me/?text=Hi%20Kasvello%20team,%20I%20want%20to%20discuss%20digital%20growth%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
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
