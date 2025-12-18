"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white text-lg font-bold mb-4 font-[var(--font-inter-tight)]">
              Intech Designers & Planners
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Design + Build + Maintenance Company delivering interiors, civil works, architectural planning, sports infrastructure and facility support across South India.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-white">Experience</p>
              <p className="text-[#8ca77c] font-semibold">30+ Years</p>
              <p className="font-medium text-white mt-4">Projects</p>
              <p className="text-[#8ca77c] font-semibold">500+ Completed</p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/interior" className="hover:text-[#8ca77c] transition-colors">
                  Residential Interiors
                </Link>
              </li>
              <li>
                <Link href="/construction-package" className="hover:text-[#8ca77c] transition-colors">
                  Construction & Civil Works
                </Link>
              </li>
              <li>
                <Link href="/design-package" className="hover:text-[#8ca77c] transition-colors">
                  Architectural Planning
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="hover:text-[#8ca77c] transition-colors">
                  Corporate Interiors
                </Link>
              </li>
              <li>
                <span className="text-gray-500">Facility Maintenance (AMC)</span>
              </li>
              <li>
                <span className="text-gray-500">Sports Infrastructure</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#8ca77c] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="hover:text-[#8ca77c] transition-colors">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#8ca77c] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <span className="text-gray-500">About Us</span>
              </li>
              <li>
                <span className="text-gray-500">Why Intech</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-500">Chennai, Tamil Nadu</span>
              </li>
              <li>
                <span className="text-gray-500">South India</span>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact-us"
                  className="inline-block px-6 py-2.5 bg-[#8ca77c] text-white rounded-full font-medium hover:bg-[#7a9570] transition-colors text-sm"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">
              © {currentYear} Intech Designers & Planners. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500">
              <span className="hover:text-[#8ca77c] transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-[#8ca77c] transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

