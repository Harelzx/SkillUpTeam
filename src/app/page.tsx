import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import CTASection from "@/components/landing/CTASection";
import {
  FullPageProvider,
  FullPageContainer,
  FullPageSection,
} from "@/components/fullpage/FullPageScroll";

const SECTION_IDS = [
  "hero",
  "why-skillup",
  "how-it-works",
  "features",
  "stats",
  "download",
];

export default function LandingPage() {
  return (
    <FullPageProvider sectionIds={SECTION_IDS}>
      <Navbar />
      <FullPageContainer>
        <FullPageSection id="hero" className="bg-dark-950">
          <HeroSection />
        </FullPageSection>

        <FullPageSection id="why-skillup" className="bg-white">
          <PainPointsSection />
        </FullPageSection>

        <FullPageSection id="how-it-works" className="bg-gradient-to-b from-dark-50 to-brand-50">
          <HowItWorksSection />
        </FullPageSection>

        <FullPageSection id="features" className="bg-dark-950">
          <FeaturesSection />
        </FullPageSection>

        <FullPageSection id="stats" className="bg-gradient-to-br from-dark-800 to-dark-900">
          <StatsSection />
        </FullPageSection>

        <FullPageSection id="download">
          <CTASection />
          <Footer />
        </FullPageSection>
      </FullPageContainer>
    </FullPageProvider>
  );
}
