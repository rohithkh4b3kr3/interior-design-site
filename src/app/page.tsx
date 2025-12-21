import GSAPHomeWrapper from "@/components/home/GSAPHomeWrapper";
import HeroGSAP from "@/components/home/HeroGSAP";
import MeasuringTape from "@/components/home/MeasuringTape";
import CredibilityAndCapabilities from "@/components/home/CredibilityAndCapabilities ";
import SectionTransition from "@/components/home/SectionTransition";
import ServicesSegmented from "@/components/home/ServicesSegmented";
import HowWeExecute from "@/components/home/HowWeExecute";
import ProcessSection from "@/components/home/ProcessSection";
import Founder from "@/components/home/Founder";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientsSection from "@/components/home/ClientsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <GSAPHomeWrapper>
      <main 
        className="min-h-screen overflow-x-hidden"
        style={{
          isolation: 'isolate',
          position: 'relative',
        }}
      >
        {/* 1. Hero - Authority */}
        <HeroGSAP />
        {/* Measuring Tape Animation */}
        <MeasuringTape />
        <div className="fade-in-section">
          <CredibilityAndCapabilities />
        </div>
        {/* Smooth Transition from Dark to Light */}
        <SectionTransition />
        {/* 5. Segmentation - Corporate vs Residential */}
        {/* Isolated wrapper to prevent backdrop-filter bleed */}
        <div style={{ isolation: 'isolate', position: 'relative', zIndex: 1 }}>
          <ServicesSegmented />
        </div>
        {/* 6. Execution Credibility */}
        <div className="fade-in-section">
          <HowWeExecute />
        </div>
        {/* 7. Process Section */}
        <div className="fade-in-section">
          <ProcessSection />
        </div>
        {/* 8. Founder & Leadership */}
        <div className="fade-in-section">
          <Founder />
        </div>
        {/* 9. Featured Projects */}
        <div className="fade-in-section">
          <FeaturedProjects />
        </div>
        {/* 10. Clients */}
        <div className="fade-in-section">
          <ClientsSection />
        </div>
        {/* 11. Final CTA */}
        <div className="fade-in-section">
          <FinalCTA />
        </div>
      </main>
    </GSAPHomeWrapper>
  );
}
