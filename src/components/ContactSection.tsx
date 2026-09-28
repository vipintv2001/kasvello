"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  ExternalLink,
} from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    businessName: "",
    websiteOrInstagram: "",
    serviceNeeded: "SEO — Search Engine Optimization",
    budgetRange: "₹25,000 – ₹50,000 / month",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hi Kasvello team! My name is ${formData.name || "Founder"}. I'm interested in ${formData.serviceNeeded} for ${formData.businessName || "my business"}. Details: ${formData.projectDetails || "Looking to grow qualified leads and revenue."}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5B00]/10 border border-[#FF5B00]/20 text-[#FF5B00] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth Inquiry &amp; Direct Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[family-name:var(--font-jakarta)]">
            Let&apos;s Architect Your Growth Engine.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Claim your complimentary commercial audit. We review your organic search footprint,
            ad channels, and digital architecture — presenting a clear, actionable growth roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-studio space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-jakarta)]">
                Direct Communication Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We despise corporate phone trees and automated support tickets. Choose your preferred
                method and speak straight to leadership.
              </p>

              {/* 1-Click WhatsApp Channel */}
              <a
                href="https://wa.me/?text=Hi%20Kasvello%20team,%20I%20want%20to%20discuss%20digital%20growth%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/80 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Chat on WhatsApp</div>
                    <div className="text-[11px] text-emerald-700 font-medium">
                      Average response: &lt; 30 mins
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Email Channel */}
              <a
                href="mailto:kasvello.digital@gmail.com"
                className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#FF5B00]/10 text-[#FF5B00] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Direct Email</div>
                    <div className="text-[11px] text-slate-500">kasvello.digital@gmail.com</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </a>

              {/* Official Instagram Channel */}
              <a
                href="https://instagram.com/kasvello"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Instagram Handle</div>
                    <div className="text-[11px] text-slate-500">@kasvello</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </a>

              {/* Physical Location */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-slate-200/60 text-slate-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Operating Location</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Kasaragod, Kerala, India — Serving brands statewide &amp; globally.
                  </div>
                </div>
              </div>

              {/* Response Pledge */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-[#FF5B00]" />
                <span>All strategy audits prepared and delivered within 24 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-studio relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 px-4 space-y-6"
                  >
                    <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-[family-name:var(--font-jakarta)]">
                      Audit Request Received!
                    </h3>

                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for trusting Kasvello. One of our strategy founders is reviewing your
                      business details right now and will contact you via email/phone within 24 hours.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/25"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Summary Directly on WhatsApp</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: "",
                            contactInfo: "",
                            businessName: "",
                            websiteOrInstagram: "",
                            serviceNeeded: "SEO — Search Engine Optimization",
                            budgetRange: "₹25,000 – ₹50,000 / month",
                            projectDetails: "",
                          });
                        }}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-slate-100 pb-4 mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-jakarta)]">
                        Request Your Growth Strategy Audit
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Tell us about your brand. Zero obligations or sales pressure.
                      </p>
                    </div>

                    {/* Name & Contact Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Your Name <span className="text-[#FF5B00]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Nair"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#FF5B00] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email or Phone Number <span className="text-[#FF5B00]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactInfo}
                          onChange={(e) =>
                            setFormData({ ...formData, contactInfo: e.target.value })
                          }
                          placeholder="rahul@company.com or +91 98..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#FF5B00] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Business Name & Website */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Business / Brand Name <span className="text-[#FF5B00]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({ ...formData, businessName: e.target.value })
                          }
                          placeholder="e.g. Malabar Organics"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#FF5B00] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Website or Instagram URL
                        </label>
                        <input
                          type="text"
                          value={formData.websiteOrInstagram}
                          onChange={(e) =>
                            setFormData({ ...formData, websiteOrInstagram: e.target.value })
                          }
                          placeholder="https://... or @brandname"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#FF5B00] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Needed Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceNeeded: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#FF5B00] transition-colors cursor-pointer"
                      >
                        <option value="SEO — Search Engine Optimization">
                          SEO — Search Engine Optimization (Local &amp; Technical)
                        </option>
                        <option value="Performance Marketing (Paid Advertising)">
                          Performance Marketing (Meta Ads &amp; Google Ads)
                        </option>
                        <option value="Web Design & Development">
                          Web Design &amp; Development (Next.js &amp; Landing Pages)
                        </option>
                        <option value="Social Media Marketing">
                          Social Media Marketing &amp; Instagram Reels
                        </option>
                        <option value="Branding & Creative Design">
                          Branding &amp; Creative Design (Logo, Visual Identity)
                        </option>
                        <option value="Content & Video Marketing">
                          Content &amp; High-Retention Video Production
                        </option>
                        <option value="Full-Funnel Omnichannel Scaling">
                          Full-Funnel Omnichannel Scaling (Multiple Services)
                        </option>
                      </select>
                    </div>

                    {/* Budget Range Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Estimated Monthly Growth Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          "Under ₹25k",
                          "₹25k – ₹50k",
                          "₹50k – ₹1.5L",
                          "₹1.5L+ / Custom",
                        ].map((tier) => (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setFormData({ ...formData, budgetRange: tier })}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                              formData.budgetRange === tier
                                ? "bg-[#FF5B00] text-white border-[#FF5B00] shadow-sm shadow-[#FF5B00]/25"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        What are your main growth challenges or goals?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        placeholder="e.g. We want to rank #1 on Google for high-intent queries in Kerala and scale our WhatsApp inquiries through targeted Meta Ads."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#FF5B00] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FF5B00] hover:bg-[#E04F00] shadow-lg shadow-[#FF5B00]/25 hover:shadow-[#FF5B00]/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:pointer-events-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Architecting Your Growth Plan...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Free Strategy Audit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-500">
                      🔒 Your commercial data is strictly confidential. Zero spam policy.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
