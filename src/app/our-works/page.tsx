"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageCarousel from "@/components/home/ImageCarousel";

// Commercial projects with execution context
const commercialProjects = [
  {
    id: 1,
    client: "Ashok Leyland",
    title: "Auditorium",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    scope: "Complete auditorium interior execution with advanced acoustics and modular seating systems",
    challenge: "Large-scale auditorium with acoustic and seating requirements",
    solution: "Integrated design-build execution with acoustic engineering coordination",
    duration: "6 months",
    images: [
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-2.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-3.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-4.jpg",
    ],
  },
  {
    id: 2,
    client: "HDB Financial Services",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    scope: "Complete office interior execution including workstations, meeting rooms, and common areas",
    challenge: "Operational workspace requiring minimal disruption",
    solution: "Phased execution with after-hours work coordination",
    duration: "4 months",
    images: [
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-1.jpg",
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-2.jpg",
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-3.jpg",
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-4.jpg",
    ],
  },
  {
    id: 3,
    client: "Mainetti",
    title: "Corporate Facility",
    sector: "Industrial",
    location: "Chennai, Tamil Nadu",
    scope: "Corporate facility execution with industrial-grade finishes and operational efficiency focus",
    challenge: "Durability requirements for high-traffic industrial environment",
    solution: "Industrial-grade material selection and finish execution",
    duration: "5 months",
    images: [
      "/images/Commercial or Corporate Clients/mainetti/mainetti-1.jpg",
      "/images/Commercial or Corporate Clients/mainetti/mainetti-2.jpg",
      "/images/Commercial or Corporate Clients/mainetti/mainetti-3.jpg",
      "/images/Commercial or Corporate Clients/mainetti/mainetti-4.jpg",
    ],
  },
  {
    id: 4,
    client: "Yaskawa India",
    title: "Manufacturing Facility",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    scope: "Manufacturing facility interior execution with clean room specifications",
    challenge: "Clean room specifications and environmental control requirements",
    solution: "Specialized execution with environmental control system integration",
    duration: "7 months",
    images: [
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-1.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-2.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-3.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-4.jpg",
    ],
  },
];

const sectors = ["All", "Corporate", "Industrial", "Hospitality", "Educational", "Healthcare"];

export default function OurWorksPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Each project executed with focus on constructability, coordination, and long-term performance. 
            Projects delivered across South India and major metropolitan cities.
          </p>
        </motion.div>

        {/* Sector Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {sectors.map((sector) => (
            <button
              key={sector}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-[#8ca77c] hover:text-[#8ca77c] transition-colors"
            >
              {sector}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {commercialProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Carousel */}
              <div className="relative h-64 md:h-80">
                <ImageCarousel images={project.images} projectName={project.title} />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-[var(--font-inter-tight)] text-xl font-bold text-gray-900 mb-1">
                      {project.client}
                    </h3>
                    <p className="text-sm text-gray-600">{project.title}</p>
                  </div>
                  <span className="text-xs text-gray-500">{project.location}</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Scope of Work</p>
                    <p className="text-sm text-gray-700">{project.scope}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-gray-500 mb-1">Challenge</p>
                      <p className="text-gray-700">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500 mb-1">Duration</p>
                      <p className="text-gray-700">{project.duration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Our Solution</p>
                    <p className="text-sm text-gray-700">{project.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-10 md:p-12 text-center text-white"
        >
          <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4">
            Discuss Your Project Requirements
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Speak directly with our project management team about execution scope, timelines, and deliverables.
          </p>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Speak With a Project Manager
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
