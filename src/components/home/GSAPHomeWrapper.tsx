"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPHomeWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax for sections - more subtle
      gsap.utils.toArray<HTMLElement>(".parallax-section").forEach((section) => {
        gsap.to(section, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // Parallax for images
      gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((img) => {
        gsap.to(img, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Fade in sections on scroll - smoother without blur
      gsap.utils.toArray<HTMLElement>(".fade-in-section").forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Scale in elements
      gsap.utils.toArray<HTMLElement>(".scale-in").forEach((element) => {
        gsap.fromTo(
          element,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Stagger animations
      gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((container) => {
        const items = container.querySelectorAll(".stagger-child");
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Horizontal scroll parallax
      gsap.utils.toArray<HTMLElement>(".horizontal-parallax").forEach((element) => {
        gsap.to(element, {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Text reveal animations - simpler version
      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

