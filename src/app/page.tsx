import GSAPHomeWrapper from "@/components/home/GSAPHomeWrapper";
import HeroGSAP from "@/components/home/HeroGSAP";
import MeasuringTape from "@/components/home/MeasuringTape";
import CredibilityAndCapabilities from "@/components/home/CredibilityAndCapabilities ";
import DarkSectionDivider from "@/components/home/DarkSectionDivider";
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
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Measuring Tape Animation */}
        <MeasuringTape />
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Credibility & Capabilities */}
        <div className="fade-in-section">
          <CredibilityAndCapabilities />
        </div>
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Segmentation - Corporate vs Residential */}
        <div className="fade-in-section scale-in">
          <ServicesSegmented />
        </div>
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Execution Credibility */}
        <div className="fade-in-section stagger-item">
          <HowWeExecute />
        </div>
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Clients - Prominently Placed with GSAP */}
        <ClientsSection />
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Process Section */}
        <div className="fade-in-section stagger-item">
          <ProcessSection />
        </div>
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Founder & Leadership */}
        <div className="fade-in-section text-reveal">
          <Founder />
        </div>
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Featured Projects */}
        <div className="fade-in-section scale-in">
          <FeaturedProjects />
        </div>
        
        {/* Seamless Dark-to-Dark Transition */}
        <DarkSectionDivider />
        
        {/* Final CTA */}
        <div className="fade-in-section">
          <FinalCTA />
        </div>
      </main>
    </GSAPHomeWrapper>
  );
}
