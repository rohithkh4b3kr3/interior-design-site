"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Construction Package", href: "/construction-package" },
  { name: "Design Package", href: "/design-package" },
  { name: "Our Works", href: "/our-works" },
  { name: "Interior", href: "/interior" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        backgroundColor: isScrolled 
          ? `rgba(255, 255, 255, 0.95)` 
          : `rgba(255, 255, 255, 0.85)`,
        backdropFilter: `blur(20px)`,
        WebkitBackdropFilter: `blur(20px)`,
      }}
      className={`fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 rounded-full shadow-lg transition-shadow duration-300 ${
        isScrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-3.5">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="cursor-pointer flex items-center"
          >
            <Image
              src="/images/Logo.jpg"
              alt="Intech Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
              unoptimized
            />
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="relative text-gray-700 hover:text-black transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8ca77c] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* CTA Button */}
        <Link href="/contact-us">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:block rounded-full bg-[#8ca77c] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#7a9570] transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Get Quote
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}

