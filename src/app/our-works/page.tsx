"use client";

import { motion } from "framer-motion";
import ImageCarousel from "@/components/home/ImageCarousel";

// Commercial projects with their images
const commercialProjects = [
  {
    id: 1,
    title: "Ashok Leyland Auditorium",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-2.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-3.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Ashok Leyland Patent Gallery",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-1.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-2.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-3.jpg",
      "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-4.jpg",
    ],
  },
  {
    id: 3,
    title: "FED SERV",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/FED SERV/FED SERV-1.jpg",
      "/images/Commercial or Corporate Clients/FED SERV/FED SERV-2.jpg",
      "/images/Commercial or Corporate Clients/FED SERV/FED SERV-3.jpg",
      "/images/Commercial or Corporate Clients/FED SERV/FED SERV-4.jpg",
    ],
  },
  {
    id: 4,
    title: "HDB Financial Services",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-1.jpg",
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-2.jpg",
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-3.jpg",
      "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-4.jpg",
    ],
  },
  {
    id: 5,
    title: "Hotel Blue Diamond Bar",
    location: "Chennai, Tamil Nadu",
    type: "Hospitality",
    images: [
      "/images/Commercial or Corporate Clients/hotel blue diamond bar/hotel blue diamond bar-1.jpg",
      "/images/Commercial or Corporate Clients/hotel blue diamond bar/hotel blue diamond bar-2.jpg",
      "/images/Commercial or Corporate Clients/hotel blue diamond bar/hotel blue diamond bar-3.jpg",
      "/images/Commercial or Corporate Clients/hotel blue diamond bar/hotel blue diamond bar-4.jpg",
      "/images/Commercial or Corporate Clients/hotel blue diamond bar/hotel blue diamond bar-5.jpg",
    ],
  },
  {
    id: 6,
    title: "Jeep Showroom",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/jeep show room/jeep show room-1.jpg",
      "/images/Commercial or Corporate Clients/jeep show room/jeep show room-2.jpg",
      "/images/Commercial or Corporate Clients/jeep show room/jeep show room-3.jpg",
      "/images/Commercial or Corporate Clients/jeep show room/jeep show room-4.jpg",
    ],
  },
  {
    id: 7,
    title: "Mahathi Software Private Limited",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/mahathi software private limited/mahathi software private limited-1.jpg",
      "/images/Commercial or Corporate Clients/mahathi software private limited/mahathi software private limited-2.jpg",
      "/images/Commercial or Corporate Clients/mahathi software private limited/mahathi software private limited-3.jpg",
      "/images/Commercial or Corporate Clients/mahathi software private limited/mahathi software private limited-4.jpg",
    ],
  },
  {
    id: 8,
    title: "Mainetti",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/mainetti/mainetti-1.jpg",
      "/images/Commercial or Corporate Clients/mainetti/mainetti-2.jpg",
      "/images/Commercial or Corporate Clients/mainetti/mainetti-3.jpg",
      "/images/Commercial or Corporate Clients/mainetti/mainetti-4.jpg",
    ],
  },
  {
    id: 9,
    title: "MCB Developers",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/MCB developers/MCB developers-1.jpg",
      "/images/Commercial or Corporate Clients/MCB developers/MCB developers-2.jpg",
      "/images/Commercial or Corporate Clients/MCB developers/MCB developers-3.jpg",
      "/images/Commercial or Corporate Clients/MCB developers/MCB developers-4.jpg",
    ],
  },
  {
    id: 10,
    title: "Metecno",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/metecno/metecno-1.jpg",
      "/images/Commercial or Corporate Clients/metecno/metecno-2.jpg",
      "/images/Commercial or Corporate Clients/metecno/metecno-3.jpg",
      "/images/Commercial or Corporate Clients/metecno/metecno-4.jpg",
    ],
  },
  {
    id: 11,
    title: "St. Patrick's Academy",
    location: "Chennai, Tamil Nadu",
    type: "Educational",
    images: [
      "/images/Commercial or Corporate Clients/st.particks academy/st.particks-1.jpg",
      "/images/Commercial or Corporate Clients/st.particks academy/st.particks-2.jpg",
      "/images/Commercial or Corporate Clients/st.particks academy/st.particks-3.jpg",
      "/images/Commercial or Corporate Clients/st.particks academy/st.particks-4.jpg",
      "/images/Commercial or Corporate Clients/st.particks academy/st.particks-5.jpg",
    ],
  },
  {
    id: 12,
    title: "The Greenhouse Barbecue",
    location: "Chennai, Tamil Nadu",
    type: "Hospitality",
    images: [
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue- 1.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-2.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-3.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-4.jpg",
    ],
  },
  {
    id: 13,
    title: "Yaskawa India",
    location: "Chennai, Tamil Nadu",
    type: "Commercial",
    images: [
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-1.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-2.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-3.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-4.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa- 5.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa- 6.jpg",
      "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa- 7.jpg",
    ],
  },
];

const stats = [
  { number: "450+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "12", label: "Cities Served" },
];

export default function OurWorksPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#efefec]">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-4"
          >
            Our Portfolio
          </motion.span>
          <h1 className="font-[var(--font-inter-tight)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Our{" "}
            <span className="text-[#8ca77c]">Works</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our portfolio of completed commercial and corporate projects.
            Each project reflects our commitment to excellence, innovation, and client satisfaction.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#8ca77c] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid with Image Carousels */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Carousel */}
              <div className="relative">
                <ImageCarousel images={project.images} projectName={project.title} />
                
                {/* Project Type Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[var(--font-inter-tight)] text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {project.location}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {project.images.length} Photos
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#8ca77c] to-[#9cb38c] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our expertise
            in architecture, construction, and interior design.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white text-[#8ca77c] px-10 py-4 font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
