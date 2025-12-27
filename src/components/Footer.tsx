"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white text-xl font-bold mb-4 font-[var(--font-inter-tight)]">
              Intech Designers & Planners
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Design + Build + Maintenance Company delivering interiors, civil works, architectural planning, sports infrastructure and facility support across South India.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
              <div>
                <p className="text-xs text-gray-500 mb-1">Experience</p>
                <p className="text-lg font-bold text-[#8ca77c] font-[var(--font-inter-tight)]">30+ Years</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Projects</p>
                <p className="text-lg font-bold text-[#8ca77c] font-[var(--font-inter-tight)]">500+</p>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-5 text-base font-[var(--font-inter-tight)]">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/interior" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Residential Interiors</span>
                </Link>
              </li>
              <li>
                <Link href="/construction-package" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Construction & Civil Works</span>
                </Link>
              </li>
              <li>
                <Link href="/design-package" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Architectural Planning</span>
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Corporate Interiors</span>
                </Link>
              </li>
              <li className="text-gray-400">Facility Maintenance (AMC)</li>
              <li className="text-gray-400">Sports Infrastructure</li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-5 text-base font-[var(--font-inter-tight)]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Our Works</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About Us</span>
                </Link>
              </li>
               <li>
                <Link href="/our-works" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Why Intech</span>
                </Link>
              </li>
               <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-[#8ca77c] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8ca77c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
              {/* <li className="text-gray-400">About Us</li>
              <li className="text-gray-400">Our Process</li>
              <li className="text-gray-400">Why Intech</li> */}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-5 text-base font-[var(--font-inter-tight)]">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#8ca77c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Chennai, Tamil Nadu<br />South India</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8ca77c] text-white rounded-lg font-medium hover:bg-[#7a9570] transition-all duration-200 text-sm shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Contact Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              © {currentYear} Intech Designers & Planners. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 text-sm text-gray-500"
            >
              <Link href="/privacy-policy" className="hover:text-[#8ca77c] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-[#8ca77c] transition-colors">
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

