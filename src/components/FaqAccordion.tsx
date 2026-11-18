"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "Why choose Kasvello over a traditional advertising agency?",
    answer:
      "Unlike traditional agencies burdened by corporate bureaucracy, bloated overheads, and junior account trainees, Kasvello operates as a nimble growth partner. You receive direct founder strategy, zero vanity reporting, 48-hour campaign turnarounds, and modern Next.js tech stacks engineered strictly for qualified inquiries and bottom-line revenue.",
    badge: "Agency Model",
  },
  {
    id: "faq-2",
    question: "How quickly can my business expect to see results from SEO vs. Paid Ads?",
    answer:
      "Paid performance campaigns (Meta & Google Ads) can generate high-intent customer leads within 48 to 72 hours of launch. Search Engine Optimization (SEO) builds compounding organic dominance; while initial technical and local map-pack momentum emerges within 30 to 45 days, significant commercial ranking breakthroughs typically compound in 60 to 90 days, creating permanent zero-CAC traffic.",
    badge: "Speed & Timelines",
  },
  {
    id: "faq-3",
    question: "Do you work with businesses outside Kasaragod or Kerala?",
    answer:
      "Absolutely. While our headquarters and cultural roots are proudly located in Kasaragod, Kerala, our digital workflows, cloud tracking infrastructure, and creative capabilities serve ambitious business partners across Kerala, Pan-India, the GCC/UAE region, and global markets.",
    badge: "Geography & Reach",
  },
  {
    id: "faq-4",
    question: "What budget is required to start running paid campaigns with Kasvello?",
    answer:
      "We believe in lean, data-validated scaling rather than forcing exorbitant retainers. We design ad funnels around flexible initial testing budgets, ensuring that your unit economics and cost-per-lead are verified with positive return on ad spend (ROAS) before aggressively ramping up spend.",
    badge: "Investment & Budgets",
  },
  {
    id: "faq-5",
    question: "Why do you build websites using Next.js instead of generic WordPress templates?",
    answer:
      "Generic WordPress themes are often bogged down by 30+ plugins, slow server response times, security vulnerabilities, and poor mobile scores that penalize your Google rankings. We engineer websites using Next.js and modern React — delivering sub-second static loads, impenetrable security, 100/100 Core Web Vitals, and superior organic search indexing out of the box.",
    badge: "Technology Architecture",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity &amp; Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight font-[family-name:var(--font-jakarta)]">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Everything you need to know about our growth frameworks, pricing philosophy, and engineering standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#080a0f] border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.12)]"
                    : "bg-[#080a0f]/80 border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  id={`button-${faq.id}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`content-${faq.id}`}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full shrink-0">
                      {faq.badge}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#f8fafc] tracking-tight font-[family-name:var(--font-jakarta)]">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded-xl transition-all duration-200 shrink-0 ${
                      isOpen
                        ? "bg-emerald-500 text-[#040507] rotate-180"
                        : "bg-white/[0.04] text-slate-400 hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for unlisted questions */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#080a0f]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-left">
            <div className="text-sm font-bold text-[#f8fafc]">Have a specific or unlisted question?</div>
            <div className="text-xs text-slate-400 mt-0.5">
              Talk directly with our strategy founders — no sales gatekeepers.
            </div>
          </div>
          <a
            href="https://wa.me/?text=Hi%20Kasvello%20team,%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#040507] bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0 font-mono"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
