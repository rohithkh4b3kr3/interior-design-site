import Hero from "@/components/home/Hero";
import ClientsSection from "@/components/home/ClientsSection";
import ServicesSegmented from "@/components/home/ServicesSegmented";
import HowWeExecute from "@/components/home/HowWeExecute";
import Founder from "@/components/home/Founder";
import WhyIntech from "@/components/home/WhyIntech";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* 1. Authority (Hero) */}
      <Hero />
      
      {/* 2. Trust (Clients + Experience) */}
      <ClientsSection />
      
      {/* 3. Clarity (What we do) */}
      <ServicesSegmented />
      
      {/* 4. Execution (How we work) */}
      <HowWeExecute />
      
      {/* 5. Leadership (Founder) */}
      <Founder />
      
      {/* 6. Why Intech (Differentiators) */}
      <WhyIntech />
    </main>
  );
}
