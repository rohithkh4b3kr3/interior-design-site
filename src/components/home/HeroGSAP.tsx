"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const heroImages = [
  {
    src: "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
    alt: "Ashok Leyland Auditorium - Commercial Interior Project",
  },

  {
    src: "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-2.jpg",
    alt: "Ashok Leyland Patent Gallery - Modern Display Systems",
  },
 
  {
    src: "/images/Residential/Kalpatharu Villa/kalpatharu villa-1.jpg",
    alt: "Kalpatharu Villa - Luxury Residential Interior",
  },
  {
    src: "/images/Residential/Avighna/avighna-1.jpg",
    alt: "Avighna - Premium Villa Design",
  },
  {
    src: "/images/Residential/Mandhralaya/mandhralaya-1.jpg",
    alt: "Mandhralaya - Elegant Residential Interior",
  },
  {
    src: "/images/Residential/The Crest Luxurious Villa/the crest, luxurious villa-1.jpg",
    alt: "The Crest Luxurious Villa - Ultra-Luxury Residential Design",
  },
  {
    src: "/images/Residential/Classy Bungalow/classy bungalow-1.jpg",
    alt: "Classy Bungalow - Luxury Residential Design",
  },
];

export default function HeroGSAP() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero content animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }

      // Image parallax on scroll
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Stats counter animation
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll("div");
        stats.forEach((stat) => {
          const value = stat.querySelector(".stat-value");
          if (value) {
            const finalValue = value.textContent || "";
            const numValue = parseInt(finalValue.replace(/\D/g, ""));
            
            gsap.fromTo(
              { value: 0 },
              { value: numValue },
              {
                value: numValue,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: stat,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
                onUpdate: function () {
                  if (finalValue.includes("+")) {
                    value.textContent = Math.round(this.targets()[0].value) + "+";
                  } else {
                    value.textContent = String(Math.round(this.targets()[0].value));
                  }
                },
              }
            );
          }
        });
      }

      // Parallax background
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8ca77c] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8ca77c]/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT CONTENT */}
        <div ref={contentRef} className="max-w-xl">
          {/* Overline */}
          <div className="overflow-hidden">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8ca77c] mb-6">
              Design • Build • Maintain
            </p>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <h1 className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Engineering spaces <br className="hidden sm:block" />
              that businesses rely on.
            </h1>
          </div>

          {/* Description */}
          <div className="overflow-hidden mb-10">
            <p className="text-lg text-white/70 leading-relaxed">
              We deliver commercial interiors, civil construction, architectural
              planning, and facility maintenance for enterprises across South India —
              with precision, accountability, and long-term support.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex gap-10 mb-12">
            {[
              { value: "30+", label: "Years of Expertise" },
              { value: "500+", label: "Projects Delivered" },
              { value: "12+", label: "Operational Cities" },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden">
                <div className="text-2xl font-semibold text-[#8ca77c]">
                  <span className="stat-value">{item.value}</span>
                </div>
                <div className="text-sm text-white/60">{item.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="overflow-hidden">
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact-us">
                <button className="px-7 py-3 bg-[#8ca77c] text-black font-medium rounded-md hover:bg-[#9bb88b] transition transform hover:scale-105">
                  Speak with our team
                </button>
              </Link>

              <Link href="/our-works">
                <button className="px-7 py-3 border border-white/30 text-white rounded-md hover:border-white hover:bg-white/5 transition transform hover:scale-105">
                  View our work
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div ref={imageRef} className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-20" />

          {/* Image indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

