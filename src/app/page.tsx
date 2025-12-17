import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FeatureGrid from "@/components/home/FeatureGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsSection from "@/components/home/ClientsSection";
import InteriorSolutions from "@/components/home/InteriorSolutions";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <FeaturedProjects />
      <FeatureGrid />
      <WhyChooseUs />
      <ClientsSection />
      <InteriorSolutions />
    </main>
  );
}
