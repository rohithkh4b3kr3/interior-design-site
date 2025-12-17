"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

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

export default function OurClients() {
  // Memoize duplicated clients and calculate scroll distance
  const duplicatedClients = useMemo(() => [...clients, ...clients], []);
  const itemWidth = 192; // w-48 (12rem = 192px) + gap-8 (2rem = 32px) = 224px per item
  const scrollDistance = useMemo(() => -(clients.length * itemWidth), [itemWidth]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 bg-white overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-4"
        >
          Trusted By
        </motion.span>
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Our{" "}
          <span className="text-[#8ca77c]">Clients</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          We&apos;re proud to have worked with leading brands and homeowners
          across the country, delivering exceptional results.
        </p>
      </motion.div>

      {/* Scrolling Logos - Left to Right */}
      <div className="relative mb-12 md:mb-16">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [0, scrollDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-40 md:w-48 h-24 md:h-32 flex items-center justify-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="relative w-full h-12 md:h-16 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    unoptimized={client.logo.endsWith('.gif')}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="pt-12 border-t border-gray-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "12", label: "Cities Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#8ca77c] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
