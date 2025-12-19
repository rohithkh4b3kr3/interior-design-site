"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            Trusted Partners
          </p>
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 text-gray-900">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading brands and satisfied clients across residential and commercial sectors.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -50 * 100],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-40 h-28 flex items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all duration-300 group"
                >
                  <div className="relative w-full h-14 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                      unoptimized={client.logo.endsWith('.gif')}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
