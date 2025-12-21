"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// All client logos from Clientpng folder - includes all formats (png, jpg, webp, gif)
const clients = [
  { id: 1, name: "Client 1", logo: "/images/Clientpng/1.png" },
  { id: 2, name: "Client 2", logo: "/images/Clientpng/2.png" },
  { id: 3, name: "Client 3", logo: "/images/Clientpng/3.png" },
  { id: 4, name: "Client 4", logo: "/images/Clientpng/4.png" },
  { id: 5, name: "Client 5", logo: "/images/Clientpng/5.png" },
  { id: 7, name: "Client 7", logo: "/images/Clientpng/7.png" },
  { id: 8, name: "Client 8", logo: "/images/Clientpng/8.png" },
  { id: 10, name: "Client 10", logo: "/images/Clientpng/10.png" },
  { id: 14, name: "Client 14", logo: "/images/Clientpng/14.png" },
  { id: 15, name: "Client 15", logo: "/images/Clientpng/15.png" },
  { id: 16, name: "Client 16", logo: "/images/Clientpng/16.png" },
  { id: 18, name: "Client 18", logo: "/images/Clientpng/18.png" },
  { id: 19, name: "Client 19", logo: "/images/Clientpng/19.jpg" },
  { id: 20, name: "Client 20", logo: "/images/Clientpng/20.gif" },
  { id: 21, name: "Client 21", logo: "/images/Clientpng/21.png" },
  { id: 22, name: "Client 22", logo: "/images/Clientpng/22.png" },
  { id: 23, name: "Client 23", logo: "/images/Clientpng/23.jpg" },
  { id: 24, name: "Client 24", logo: "/images/Clientpng/24.png" },
  { id: 25, name: "Client 25", logo: "/images/Clientpng/25.png" },
  { id: 26, name: "Client 26", logo: "/images/Clientpng/26.png" },
  { id: 27, name: "Client 27", logo: "/images/Clientpng/27.png" },
  { id: 28, name: "Client 28", logo: "/images/Clientpng/28.png" },
  { id: 29, name: "Client 29", logo: "/images/Clientpng/29.png" },
  { id: 30, name: "Client 30", logo: "/images/Clientpng/30.webp" },
  { id: 31, name: "Client 31", logo: "/images/Clientpng/31.png" },
  { id: 32, name: "Client 32", logo: "/images/Clientpng/32.png" },
  { id: 33, name: "Client 33", logo: "/images/Clientpng/33.png" },
  { id: 34, name: "Client 34", logo: "/images/Clientpng/34.webp" },
];

// Duplicate clients for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation with GSAP
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelector(".client-label"),
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          headerRef.current.querySelector(".client-title"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          headerRef.current.querySelector(".client-description"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }


      // Stats animation with counter effect
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll(".stat-number");
        
        statNumbers.forEach((stat) => {
          const finalValue = stat.textContent || "0";
          const numericValue = parseInt(finalValue.replace(/\D/g, "")) || 0;
          
          gsap.fromTo(
            { value: 0 },
            { value: numericValue },
            {
              value: numericValue,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              onUpdate: function () {
                const current = Math.round(this.targets()[0].value);
                if (finalValue.includes("+")) {
                  stat.textContent = current + "+";
                } else {
                  stat.textContent = String(current);
                }
              },
            }
          );
        });

        // Stagger stats cards
        const statCards = statsRef.current.querySelectorAll(".stat-card");
        gsap.fromTo(
          statCards,
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Background glow animation
      if (sectionRef.current) {
        const bgGlows = sectionRef.current.querySelectorAll(".bg-glow");
        bgGlows.forEach((glow, index) => {
          gsap.to(glow, {
            scale: 1.2,
            opacity: 0.3,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5,
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white py-32 lg:py-40 overflow-hidden"
    >
      {/* Enhanced background effects with GSAP */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(140,167,124,0.15),transparent_70%)]" />
      <div className="bg-glow absolute top-0 left-1/4 w-96 h-96 bg-[#8ca77c]/10 rounded-full blur-3xl" />
      <div className="bg-glow absolute bottom-0 right-1/4 w-96 h-96 bg-[#8ca77c]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Enhanced Section Header with GSAP */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="client-label text-xs uppercase tracking-[0.3em] text-[#8ca77c] mb-6 font-semibold">
            Trusted Partners
          </p>
          <h2 className="client-title font-[var(--font-inter-tight)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Our <span className="text-[#8ca77c]">Clients</span>
          </h2>
          <p className="client-description text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Leading brands and satisfied clients across residential and commercial sectors trust us for their interior execution needs.
          </p>
        </div>

        {/* Full-Width Marquee with Framer Motion */}
        <div className="relative w-screen -ml-[50vw] left-1/2 py-16 overflow-hidden">
          {/* Soft edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1115] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1115] to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Container - Full Viewport Width */}
          <div className="relative" style={{ width: '100vw' }}>
            <motion.div
              className="flex items-center gap-16 md:gap-24"
              initial={{ x: '100vw' }}
              animate={{
                x: '-100vw',
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{
                width: '200vw', // Double width for seamless loop
              }}
            >
              {/* First set of logos */}
              {duplicatedClients.map((client, index) => (
                <div
                  key={`first-${client.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '12vw', minWidth: '120px', maxWidth: '180px' }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="w-full h-auto object-contain opacity-90"
                    unoptimized={client.logo.endsWith('.gif')}
                  />
                </div>
              ))}
              
              {/* Second set of logos for seamless loop */}
              {duplicatedClients.map((client, index) => (
                <div
                  key={`second-${client.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '12vw', minWidth: '120px', maxWidth: '180px' }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="w-full h-auto object-contain opacity-90"
                    unoptimized={client.logo.endsWith('.gif')}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Stats with GSAP counter animation */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "34+", label: "Trusted Clients" },
            { number: "500+", label: "Projects Delivered" },
            { number: "30+", label: "Years Experience" },
            { number: "12+", label: "Cities Served" },
          ].map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#8ca77c]/40 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="stat-number text-4xl md:text-5xl font-bold text-[#8ca77c] mb-3 font-[var(--font-inter-tight)]">
                {stat.number}
              </div>
              <div className="text-sm text-white/80 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
