import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesMatrix from "@/components/ServicesMatrix";
import WhyKasvello from "@/components/WhyKasvello";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutSection from "@/components/AboutSection";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import KineticMarquee from "@/components/animations/KineticMarquee";
import SmoothScrollWrapper from "@/components/animations/SmoothScrollWrapper";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <div className="relative min-h-screen bg-[#040507] text-[#f8fafc] selection:bg-emerald-500/25 selection:text-[#f8fafc] flex flex-col">
        {/* Fixed Dynamic Island Navbar */}
        <Navbar />

        {/* Main Page Sections */}
        <main className="flex-1 w-full overflow-x-clip">
          {/* Section 2: Hero Section with 3D Growth Prism */}
          <Hero />

          {/* Section 3: Interactive Bento 6-Service Matrix with 3D Topology */}
          <ServicesMatrix />

          {/* Section 4: "Why Kasvello?" (The Modern Startup Advantage) */}
          <WhyKasvello />

          {/* Section 5: The 5-Step Growth Engine (Scroll-Based Roadmap) */}
          <ProcessTimeline />

          {/* Section 6: About Kasvello (Local Roots. Digital Reach.) with Word-Scrub & Constellation */}
          <AboutSection />

          {/* Section 7: SEO FAQ Accordion (Schema-Ready) */}
          <FaqAccordion />

          {/* Section 8: High-Conversion Lead Capture & Contact Hub */}
          <ContactSection />

          {/* Kinetic Typography Velocity Marquee */}
          <KineticMarquee />
        </main>

        {/* Section 9: Command-Center Footer */}
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}
