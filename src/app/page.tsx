import Hero from "@/components/home/Hero";
import MeasuringTape from "@/components/home/MeasuringTape";
// import CredibilityStrip from "@/components/home/CredibilityStrip";
// import WhoWeAre from "@/components/home/WhoWeAre";
import CredibilityAndCapabilities from "@/components/home/CredibilityAndCapabilities ";
// import ServicesOverview from "@/components/home/ServicesOverview";
import ServicesSegmented from "@/components/home/ServicesSegmented";
import HowWeExecute from "@/components/home/HowWeExecute";
import ProcessSection from "@/components/home/ProcessSection";
import Founder from "@/components/home/Founder";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientsSection from "@/components/home/ClientsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* 1. Hero - Authority */}
      <Hero />
      {/* Measuring Tape Animation */}
      <MeasuringTape />
      <CredibilityAndCapabilities />
      {/* 2. Credibility Strip - Trust */}
      {/* <CredibilityStrip /> */}
      
      {/* 3. Who We Are - Short Intro */}
      {/* <WhoWeAre /> */}
      
      {/* 4. Services Overview */}
      {/* <ServicesOverview /> */}
      
      {/* 5. Segmentation - Corporate vs Residential */}
      <ServicesSegmented />
      
      {/* 6. Execution Credibility */}
      <HowWeExecute />
      
      {/* 7. Process Section */}
      <ProcessSection />
      
      {/* 8. Founder & Leadership */}
      <Founder />
      
      {/* 9. Featured Projects */}
      <FeaturedProjects />
      
      {/* 10. Clients */}
      <ClientsSection />
      
      {/* 11. Final CTA */}
      <FinalCTA />
    </main>
  );
}
