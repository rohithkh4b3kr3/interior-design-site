"use client";

import { motion } from "framer-motion";

export default function ImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#8ca77c]/20 to-[#8ca77c]/5 overflow-hidden mb-6">
        {/* Interior Design Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Abstract Interior Element - Modern Furniture */}
            <svg viewBox="0 0 300 375" className="w-full h-full">
              <defs>
                <linearGradient id="furnitureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8ca77c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#9cb38c" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8f0e3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f5f7f2" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              {/* Floor */}
              <rect x="0" y="280" width="300" height="95" fill="url(#floorGradient)" />
              
              {/* Modern Sofa */}
              <rect x="40" y="280" width="100" height="60" rx="8" fill="url(#furnitureGradient)" />
              <rect x="35" y="275" width="110" height="8" rx="4" fill="#7a9570" opacity="0.7" />
              
              {/* Coffee Table */}
              <ellipse cx="160" cy="310" rx="30" ry="25" fill="#c4d5b8" opacity="0.8" />
              <rect x="145" y="310" width="30" height="8" fill="#9cb38c" opacity="0.6" />
              
              {/* Plant */}
              <circle cx="220" cy="290" r="15" fill="#8ca77c" opacity="0.7" />
              <rect x="218" y="305" width="4" height="30" fill="#7a9570" opacity="0.6" />
              
              {/* Wall Art Frames */}
              <rect x="50" y="50" width="60" height="80" rx="4" fill="white" opacity="0.6" stroke="#8ca77c" strokeWidth="2" opacity="0.3" />
              <rect x="190" y="50" width="60" height="80" rx="4" fill="white" opacity="0.6" stroke="#8ca77c" strokeWidth="2" opacity="0.3" />
              
              {/* Window */}
              <rect x="100" y="30" width="100" height="150" rx="4" fill="#d4e5c8" opacity="0.4" stroke="#8ca77c" strokeWidth="2" opacity="0.2" />
            </svg>
          </div>
        </div>

        {/* Project Counter */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
            03/05
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="font-[var(--font-inter-tight)] text-xl font-semibold mb-2">
          New Projects in Our Queue
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Currently working on 5 premium residential projects across New York,
          Los Angeles, and Miami. Each space designed with meticulous attention to detail.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2-3 months
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            3 cities
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          whileHover={{ x: 5, y: -5 }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5"
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
        </motion.div>
      </div>
    </motion.div>
  );
}
