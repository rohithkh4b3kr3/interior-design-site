"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

const clients = [
  "/images/Clientpng/1.png",
  "/images/Clientpng/2.png",
  "/images/Clientpng/3.png",
  "/images/Clientpng/4.png",
  "/images/Clientpng/5.png",
  "/images/Clientpng/7.png",
  "/images/Clientpng/8.png",
  "/images/Clientpng/10.png",
  "/images/Clientpng/14.png",
  "/images/Clientpng/15.png",
  "/images/Clientpng/16.png",
  "/images/Clientpng/18.png",
  "/images/Clientpng/19.jpg",
  "/images/Clientpng/21.png",
  "/images/Clientpng/22.png",
  "/images/Clientpng/23.jpg",
  "/images/Clientpng/24.png",
  "/images/Clientpng/25.png",
  "/images/Clientpng/26.png",
  "/images/Clientpng/27.png",
  "/images/Clientpng/28.png",
  "/images/Clientpng/29.png",
  "/images/Clientpng/30.webp",
  "/images/Clientpng/31.png",
  "/images/Clientpng/32.png",
  "/images/Clientpng/33.png",
  "/images/Clientpng/34.webp",
];

export default function OurClients() {
  // Duplicate once so flow never feels empty
  const marquee = useMemo(() => [...clients, ...clients], []);

  return (
    <section className="relative bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        {/* HEADER */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#8ca77c] mb-4">
          Trusted By
        </p>
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
          Organisations we’ve worked with
        </h2>
      </div>

      {/* FULL SCREEN LOGO FLOW */}
      <div className="relative w-screen overflow-hidden">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex items-center gap-20"
          initial={{ x: "-100%" }}   // start fully off-screen (left)
          animate={{ x: "100vw" }}   // end fully off-screen (right)
          transition={{
            duration: 15,            // ✅ MEDIUM SPEED
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marquee.map((logo, index) => (
            <div key={index} className="flex items-center h-16 md:h-20">
              <Image
                src={logo}
                alt="Client logo"
                width={180}
                height={80}
                className="object-contain"
                unoptimized={logo.endsWith(".gif")}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
