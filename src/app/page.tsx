import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesMatrix from "@/components/ServicesMatrix";
import WhyKasvello from "@/components/WhyKasvello";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutSection from "@/components/AboutSection";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#0F172A] selection:bg-[#FF5B00]/20 selection:text-[#0F172A] flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full overflow-x-clip">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Interactive Bento 6-Service Matrix */}
        <ServicesMatrix />

        {/* Section 4: "Why Kasvello?" (The Modern Startup Advantage) */}
        <WhyKasvello />

        {/* Section 5: The 5-Step Growth Engine (Scroll-Based Roadmap) */}
        <ProcessTimeline />

        {/* Section 6: About Kasvello (Local Roots. Digital Reach.) */}
        <AboutSection />

        {/* Section 7: SEO FAQ Accordion (Schema-Ready) */}
        <FaqAccordion />

        {/* Section 8: High-Conversion Lead Capture & Contact Hub */}
        <ContactSection />
      </main>

      {/* Section 9: Footer */}
      <Footer />
    </div>
  );
}
