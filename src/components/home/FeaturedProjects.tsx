"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    client: "Ashok Leyland",
    sector: "Corporate",
    location: "Chennai",
    scope: "Auditorium interior execution with advanced acoustics and modular seating",
    image: "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
  },
  {
    client: "HDB Financial Services",
    sector: "Corporate",
    location: "Chennai",
    scope: "Complete office interior execution including workstations, meeting rooms, and common areas",
    image: "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-1.jpg",
  },
  {
    client: "Mainetti",
    sector: "Industrial",
    location: "Chennai",
    scope: "Corporate facility execution with industrial-grade finishes and operational efficiency focus",
    image: "/images/Commercial or Corporate Clients/mainetti/mainetti-1.jpg",
  },
  {
    client: "Yaskawa India",
    sector: "Corporate",
    location: "Chennai",
    scope: "Manufacturing facility interior execution with clean room specifications",
    image: "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-1.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Each project executed with focus on constructability, coordination, and long-term performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.client}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  {project.sector}
                </span>
                <span className="text-xs text-gray-500">{project.location}</span>
              </div>
              <h3 className="font-[var(--font-inter-tight)] text-lg font-bold text-gray-900 mb-2">
                {project.client}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{project.scope}</p>
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
          className="inline-flex items-center text-gray-900 font-medium hover:text-[#8ca77c] transition-colors"
        >
          View All Projects →
        </Link>
      </motion.div>
    </section>
  );
}
