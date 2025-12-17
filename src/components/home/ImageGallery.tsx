"use client";

import { motion } from "framer-motion";

const interiorProjects = [
  {
    id: 1,
    title: "Modern Minimalist Living",
    location: "Manhattan, NY",
    area: "2,400 sq ft",
    year: "2024",
    description: "Contemporary open-plan residence with custom-built furniture and natural materials.",
    image: "/images/interior-1.jpg",
    color: "from-[#8ca77c]/30 to-[#c4d5b8]/20",
  },
  {
    id: 2,
    title: "Luxury Penthouse Design",
    location: "Miami, FL",
    area: "3,800 sq ft",
    year: "2024",
    description: "Premium waterfront penthouse featuring bespoke Italian finishes and panoramic views.",
    image: "/images/interior-2.jpg",
    color: "from-[#9cb38c]/30 to-[#d4e5c8]/20",
  },
  {
    id: 3,
    title: "Scandinavian Family Home",
    location: "Seattle, WA",
    area: "1,900 sq ft",
    year: "2023",
    description: "Warm, family-friendly design with sustainable materials and smart storage solutions.",
    image: "/images/interior-3.jpg",
    color: "from-[#8ca77c]/30 to-[#e8f0e3]/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ImageGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 bg-gradient-to-b from-transparent to-[#efefec]/50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-4"
        >
          Our Portfolio
        </motion.span>
        <h2 className="font-[var(--font-inter-tight)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Transformative{" "}
          <span className="text-[#8ca77c]">Interior Spaces</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our recent projects where architecture meets artistry to create
          timeless living environments.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {interiorProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container */}
            <div className={`relative h-[400px] bg-gradient-to-br ${project.color} overflow-hidden`}>
              {/* Placeholder for actual image - using gradient with pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Abstract Interior Pattern */}
                  <svg
                    className="w-full h-full opacity-20"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Floor */}
                    <rect x="0" y="300" width="400" height="100" fill="#8ca77c" opacity="0.3" />
                    {/* Walls */}
                    <rect x="0" y="0" width="400" height="300" fill="url(#wallGradient)" />
                    {/* Windows */}
                    <rect x="50" y="50" width="120" height="180" rx="4" fill="#ffffff" opacity="0.4" />
                    <rect x="230" y="50" width="120" height="180" rx="4" fill="#ffffff" opacity="0.4" />
                    {/* Furniture silhouettes */}
                    <rect x="80" y="320" width="80" height="60" rx="8" fill="#8ca77c" opacity="0.5" />
                    <rect x="240" y="320" width="60" height="60" rx="8" fill="#9cb38c" opacity="0.5" />
                    <circle cx="200" cy="280" r="25" fill="#c4d5b8" opacity="0.6" />
                    <defs>
                      <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f5f5f0" stopOpacity="1" />
                        <stop offset="100%" stopColor="#e8f0e3" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Project Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                  {project.year}
                </span>
              </div>

              {/* View Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-[var(--font-inter-tight)] text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  {project.area}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-sm font-medium text-[#8ca77c] hover:text-[#7a9570] transition-colors"
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(140, 167, 124, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-[#8ca77c] px-10 py-4 text-white font-medium hover:bg-[#7a9570] transition-colors duration-200 shadow-lg"
        >
          View All Projects
        </motion.button>
      </motion.div>
    </section>
  );
}

