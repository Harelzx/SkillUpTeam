import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import CTASection from "@/components/landing/CTASection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider topColor="#030712" bottomColor="#FFFFFF" variant="wave" />

        <PainPointsSection />
        <SectionDivider topColor="#FFFFFF" bottomColor="#F8FAFC" variant="curve" />

        <HowItWorksSection />
        <SectionDivider topColor="#EFF6FF" bottomColor="#030712" variant="tilt" />

        <FeaturesSection />
        <SectionDivider topColor="#030712" bottomColor="#1E293B" variant="slant" />

        <StatsSection />
        <SectionDivider topColor="#0F172A" bottomColor="#1E3A8A" variant="wave" />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
