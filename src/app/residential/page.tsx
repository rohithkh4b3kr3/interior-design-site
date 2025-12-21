"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageCarousel from "@/components/home/ImageCarousel";
import { useState } from "react";

// Helper function to get all images from a residential project folder
const getResidentialImages = (folderName: string, imageNames: string[]) => {
  return imageNames.map(name => `/images/Residential/${folderName}/${name}`);
};

// All residential projects with comprehensive details
const residentialProjects = [
  {
    id: 1,
    name: "Avighna",
    type: "Luxury Villa",
    location: "Chennai, Tamil Nadu",
    area: "8,500 sq ft",
    duration: "8 months",
    scope: "Complete luxury villa interior execution with premium finishes, custom furniture, and high-end fixtures",
    description: "A sophisticated residential project featuring contemporary design with elegant finishes and spacious living areas.",
    images: getResidentialImages("Avighna", [
      "avighna-1.jpg",
      "avighna-2.jpg",
      "avighna-3.jpg",
      "avighna-4.jpg",
      "avighna-5.jpg",
      "avighna-6.jpg",
      "avighna-7.jpg",
    ]),
  },
  {
    id: 2,
    name: "Casa Grand",
    type: "Premium Apartment",
    location: "Chennai, Tamil Nadu",
    area: "3,200 sq ft",
    duration: "5 months",
    scope: "Premium apartment interior with modern design elements, smart home integration, and luxury amenities",
    description: "Modern apartment design with clean lines, functional spaces, and contemporary aesthetics.",
    images: getResidentialImages("Casa Grand", [
      "Casa Grande 1.jpg",
      "Casa Grand 2.jpg",
      "Casa Grand 3.jpg",
      "Casa Grand 4.jpg",
      "Casa Grand 5.jpg",
    ]),
  },
  {
    id: 3,
    name: "Classy Bungalow",
    type: "Luxury Bungalow",
    location: "Chennai, Tamil Nadu",
    area: "12,000 sq ft",
    duration: "10 months",
    scope: "Complete bungalow interior execution with grand living spaces, private areas, and outdoor integration",
    description: "An expansive bungalow featuring luxurious interiors, spacious rooms, and elegant design throughout.",
    images: getResidentialImages("Classy Bungalow", [
      "classy bungalow-1.jpg",
      "classy bungalow-2.jpg",
      "classy bungalow-3.jpg",
      "classy bungalow-4.jpg",
      "classy bungalow-5.jpg",
      "classy bungalow-6.jpg",
      "classy bungalow-7.jpg",
      "classy bungalow-8.jpg",
      "classy bungalow-9.jpg",
      "classy bungalow-10.jpg",
    ]),
  },
  {
    id: 4,
    name: "Kalpatharu Villa",
    type: "Luxury Villa",
    location: "Chennai, Tamil Nadu",
    area: "10,500 sq ft",
    duration: "9 months",
    scope: "Luxury villa interior with custom design elements, premium materials, and sophisticated finishes",
    description: "A stunning villa showcasing modern luxury with attention to detail and premium craftsmanship.",
    images: getResidentialImages("Kalpatharu Villa", [
      "kalpatharu villa-1.jpg",
      "kalpatharu villa-2.jpg",
      "kalpatharu villa-3.jpg",
      "kalpatharu villa-4.jpg",
      "kalpatharu villa-5.jpg",
      "kalpatharu villa-6.jpg",
      "kalpatharu villa-7.jpg",
      "kalpatharu villa-8.jpg",
      "kalpatharu villa-9.jpg",
    ]),
  },
  {
    id: 5,
    name: "Lavish Contemporary Villa",
    type: "Contemporary Villa",
    location: "Chennai, Tamil Nadu",
    area: "9,000 sq ft",
    duration: "7 months",
    scope: "Contemporary villa interior with modern design philosophy, minimalist aesthetics, and smart home features",
    description: "A contemporary masterpiece blending modern design with functional elegance and sophisticated living spaces.",
    images: getResidentialImages("Lavish Contemporary Villa", [
      "lavish contemporary villa- 1.jpg",
      "lavish contemporary villa- 2.jpg",
      "lavish contemporary villa-3.jpg",
      "lavish contemporary villa- 4.jpg",
    ]),
  },
  {
    id: 6,
    name: "Mandhralaya",
    type: "Luxury Residence",
    location: "Chennai, Tamil Nadu",
    area: "7,800 sq ft",
    duration: "6 months",
    scope: "Luxury residence interior with traditional-modern fusion, custom elements, and premium finishes",
    description: "An elegant residence combining traditional charm with modern luxury and sophisticated design elements.",
    images: getResidentialImages("Mandhralaya", [
      "mandhralaya-1.jpg",
      "mandhralaya-2.jpg",
      "mandhralaya-3.jpg",
      "mandhralaya-4.jpg",
      "mandhralaya-5.jpg",
      "mandhralaya-6.jpg",
    ]),
  },
  {
    id: 7,
    name: "The Crest Luxurious Villa",
    type: "Ultra-Luxury Villa",
    location: "Chennai, Tamil Nadu",
    area: "15,000 sq ft",
    duration: "12 months",
    scope: "Ultra-luxury villa interior execution with bespoke design, high-end materials, and exclusive finishes",
    description: "The pinnacle of luxury living with opulent interiors, grand spaces, and exceptional attention to detail.",
    images: getResidentialImages("The Crest Luxurious Villa", [
      "the crest, luxurious villa-1.jpg",
      "the crest, luxurious villa-2.jpg",
      "the crest, luxurious villa-3.jpg",
      "the crest, luxurious villa-4.jpg",
      "the crest, luxurious villa-5.jpg",
      "the crest, luxurious villa-6.jpg",
      "the crest, luxurious villa-7.jpg",
    ]),
  },
];

export default function ResidentialPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
            Residential Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Transforming houses into homes with meticulous attention to detail, premium materials, and personalized design solutions.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Each project reflects our commitment to creating living spaces that blend luxury, functionality, and timeless elegance.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {residentialProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Carousel */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <ImageCarousel images={project.images} projectName={project.name} />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-sm font-semibold text-[#8ca77c] rounded-full shadow-md">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Area</p>
                    <p className="text-lg font-bold text-gray-900">{project.area}</p>
                  </div>
                  <div className="bg-[#8ca77c]/5 rounded-xl p-4">
                    <p className="text-xs font-semibold text-[#8ca77c] mb-1 uppercase tracking-wide">Duration</p>
                    <p className="text-lg font-bold text-gray-900">{project.duration}</p>
                  </div>
                </div>

                {/* Scope of Work */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Scope of Work</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{project.scope}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: `${residentialProjects.length}`, label: "Residential Projects" },
            { number: "65,000+", label: "Total sq ft Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "7", label: "Luxury Properties" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8ca77c] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8ca77c] mb-2 font-[var(--font-inter-tight)]">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Our Residential Projects Apart
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every detail matters when creating your dream home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Premium Materials",
              description: "We source only the finest materials and finishes to ensure durability and elegance.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              ),
            },
            {
              title: "Custom Design",
              description: "Each project is uniquely tailored to reflect your personal style and lifestyle needs.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
            },
            {
              title: "Timely Delivery",
              description: "We maintain strict project timelines without compromising on quality or attention to detail.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#8ca77c] hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#8ca77c] mb-4">{feature.icon}</div>
              <h3 className="font-[var(--font-inter-tight)] text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/Group.svg')] opacity-5 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and create a residential space that perfectly reflects your lifestyle and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
              <Link href="/our-works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Commercial Projects
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
