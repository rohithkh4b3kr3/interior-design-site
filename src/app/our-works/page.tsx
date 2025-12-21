"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageCarousel from "@/components/home/ImageCarousel";
import { useState } from "react";

// Helper function to get all images from a folder
const getProjectImages = (folderName: string, baseName: string, count: number, ext: string = "jpg") => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/images/Commercial or Corporate Clients/${folderName}/${baseName}-${i}.${ext}`);
  }
  return images;
};

// All commercial projects with comprehensive details
const commercialProjects = [
  {
    id: 1,
    client: "Ashok Leyland",
    title: "Auditorium",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "15,000 sq ft",
    duration: "6 months",
    scope: "Complete auditorium interior execution with advanced acoustics and modular seating systems",
    // challenge: "Large-scale auditorium with acoustic and seating requirements",
    // solution: "Integrated design-build execution with acoustic engineering coordination",
    images: getProjectImages("ashok leyland auditorium", "ashok leyland", 4),
  },
  {
    id: 2,
    client: "Ashok Leyland",
    title: "Patent Gallery",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "3,500 sq ft",
    duration: "3 months",
    scope: "Corporate exhibition space with display systems and lighting design",
    challenge: "Showcasing patents and innovations in an engaging format",
    solution: "Custom display systems with integrated lighting and multimedia integration",
    images: getProjectImages("ashok leyland patent gallery", "ashok leyland patent gallery", 4),
  },
  {
    id: 3,
    client: "HDB Financial Services",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "25,000 sq ft",
    duration: "4 months",
    scope: "Complete office interior execution including workstations, meeting rooms, and common areas",
    challenge: "Operational workspace requiring minimal disruption",
    solution: "Phased execution with after-hours work coordination",
    images: getProjectImages("HDB financial services", "HDB financial services", 4),
  },
  {
    id: 4,
    client: "Mainetti",
    title: "Corporate Facility",
    sector: "Industrial",
    location: "Chennai, Tamil Nadu",
    area: "18,000 sq ft",
    duration: "5 months",
    scope: "Corporate facility execution with industrial-grade finishes and operational efficiency focus",
    challenge: "Durability requirements for high-traffic industrial environment",
    solution: "Industrial-grade material selection and finish execution",
    images: getProjectImages("mainetti", "mainetti", 4),
  },
  {
    id: 5,
    client: "Yaskawa India",
    title: "Manufacturing Facility",
    sector: "Corporate",
    location: "Bengaluru, Karnataka",
    area: "30,000 sq ft",
    duration: "7 months",
    scope: "Manufacturing facility interior execution with clean room specifications",
    challenge: "Clean room specifications and environmental control requirements",
    solution: "Specialized execution with environmental control system integration",
    images: getProjectImages("Yaskawa-India", "Yaskawa", 7),
  },
  {
    id: 6,
    client: "Mahathi Software",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "12,000 sq ft",
    duration: "3.5 months",
    scope: "Modern office space with collaborative work zones and tech-enabled meeting rooms",
    challenge: "Creating a tech-forward workspace aligned with company culture",
    solution: "Integrated technology infrastructure with flexible workspace design",
    images: getProjectImages("mahathi software private limited", "mahathi software private limited", 4),
  },
  {
    id: 7,
    client: "Jeep",
    title: "Automotive Showroom",
    sector: "Retail",
    location: "Chennai, Tamil Nadu",
    area: "8,500 sq ft",
    duration: "4 months",
    scope: "Premium automotive showroom with customer lounge and service area integration",
    challenge: "Brand-aligned luxury experience with functional service integration",
    solution: "Brand-specific design execution with premium finishes and customer experience focus",
    images: getProjectImages("jeep show room", "jeep show room", 4),
  },
  {
    id: 8,
    client: "Hotel Blue Diamond Bar",
    title: "Hospitality Interior",
    sector: "Hospitality",
    location: "Chennai, Tamil Nadu",
    area: "6,500 sq ft",
    duration: "5 months",
    scope: "Complete hospitality interior with bar, dining, and lounge areas",
    challenge: "Creating an inviting atmosphere with operational efficiency",
    solution: "Themed interior execution with attention to lighting, acoustics, and flow",
    images: getProjectImages("hotel blue diamond bar", "hotel blue diamond bar", 5),
  },
  {
    id: 9,
    client: "The Greenhouse Barbecue",
    title: "Restaurant Interior",
    sector: "Hospitality",
    location: "Chennai, Tamil Nadu",
    area: "4,200 sq ft",
    duration: "3 months",
    scope: "Restaurant interior with kitchen integration and dining space design",
    challenge: "Balancing kitchen operations with dining experience",
    solution: "Functional kitchen layout with open kitchen concept and comfortable dining zones",
    images: [
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue- 1.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-2.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-3.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-4.jpg",
    ],
  },
  {
    id: 10,
    client: "St. Patricks Academy",
    title: "Educational Institution",
    sector: "Educational",
    location: "Chennai, Tamil Nadu",
    area: "20,000 sq ft",
    duration: "6 months",
    scope: "Institutional interior with classrooms, laboratories, and administrative areas",
    challenge: "Durable, safe, and functional spaces for educational use",
    solution: "Child-safe materials with durable finishes and flexible learning spaces",
    images: getProjectImages("st.particks academy", "st.particks", 5),
  },
  {
    id: 11,
    client: "FED SERV",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "10,000 sq ft",
    duration: "3 months",
    scope: "Corporate office execution with modern workstations and meeting facilities",
    challenge: "Efficient space utilization with professional aesthetics",
    solution: "Space-efficient design with modular systems and professional finishes",
    images: getProjectImages("FED SERV", "FED SERV", 4),
  },
  {
    id: 12,
    client: "MCB Developers",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "14,000 sq ft",
    duration: "4 months",
    scope: "Real estate developer office with client meeting areas and display zones",
    challenge: "Showcasing developer capabilities within the workspace",
    solution: "Integrated display areas with professional meeting spaces and showcase zones",
    images: getProjectImages("MCB developers", "MCB developers", 4),
  },
  {
    id: 13,
    client: "Metecno",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "9,500 sq ft",
    duration: "3.5 months",
    scope: "Corporate office interior with open workspace and executive areas",
    challenge: "Creating collaborative workspace with private executive zones",
    solution: "Balanced open-plan design with designated executive and meeting spaces",
    images: getProjectImages("metecno", "metecno", 4),
  },
];

const sectors = ["All", "Corporate", "Industrial", "Hospitality", "Educational", "Retail"];

export default function OurWorksPage() {
  const [selectedSector, setSelectedSector] = useState("All");

  const filteredProjects =
    selectedSector === "All"
      ? commercialProjects
      : commercialProjects.filter((project) => project.sector === selectedSector);

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
              onClick={() => setSelectedSector(sector)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                selectedSector === sector
                  ? "border-[#8ca77c] bg-[#8ca77c] text-white"
                  : "border-gray-300 text-gray-700 hover:border-[#8ca77c] hover:text-[#8ca77c]"
              }`}
            >
              {sector}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Carousel */}
              <div className="relative h-64 overflow-hidden">
                <ImageCarousel images={project.images} projectName={project.title} />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-[var(--font-inter-tight)] text-xl font-bold text-gray-900 mb-1">
                    {project.client}
                  </h3>
                  <p className="text-sm font-medium text-[#8ca77c] mb-3">{project.title}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Area</p>
                    <p className="text-sm font-semibold text-gray-900">{project.area}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">{project.duration}</p>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">Scope of Work</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{project.scope}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-gray-500 mb-1">Challenge</p>
                    <p className="text-sm text-gray-700">{project.challenge}</p>
                  </div>
                  <div className="bg-[#8ca77c]/5 rounded-lg p-3">
                    <p className="text-xs font-medium text-[#8ca77c] mb-1">Our Solution</p>
                    <p className="text-sm text-gray-700">{project.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: `${commercialProjects.length}+`, label: "Projects Completed" },
            { number: "500+", label: "Total sq ft Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "12", label: "Cities Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#8ca77c] mb-2 font-[var(--font-inter-tight)]">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
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
