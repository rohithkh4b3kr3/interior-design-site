"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    client: "Ashok Leyland",
    sector: "Corporate",
    location: "Chennai",
    scope: "Auditorium interior execution with advanced acoustics",
    image: "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
  },
  {
    client: "HDB Financial Services",
    sector: "Corporate",
    location: "Chennai",
    scope: "Complete office interior execution",
    image: "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-1.jpg",
  },
  {
    client: "Mainetti",
    sector: "Industrial",
    location: "Chennai",
    scope: "Corporate facility with industrial-grade finishes",
    image: "/images/Commercial or Corporate Clients/mainetti/mainetti-1.jpg",
  },
  {
    client: "Yaskawa India",
    sector: "Corporate",
    location: "Chennai",
    scope: "Manufacturing facility with clean room specifications",
    image: "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-1.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            Featured Projects
          </p>
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Each project executed with focus on constructability, coordination, and long-term performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#8ca77c]/30 transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#8ca77c]/20 text-[#8ca77c] text-xs font-medium rounded">
                    {project.sector}
                  </span>
                  <span className="text-xs text-white/50">{project.location}</span>
                </div>
                <h3 className="font-[var(--font-inter-tight)] text-lg font-medium text-white mb-2">
                  {project.client}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{project.scope}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/our-works"
            className="inline-flex items-center gap-2 text-[#8ca77c] font-medium hover:text-[#9bb88b] transition-colors group"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
