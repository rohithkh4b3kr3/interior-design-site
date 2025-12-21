"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Throttle scroll events
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Memoize background style
  const navStyle = useMemo(
    () => ({
      backgroundColor: isScrolled
        ? `rgba(255, 255, 255, 0.95)`
        : `rgba(255, 255, 255, 0.85)`,
      backdropFilter: `blur(20px)`,
      WebkitBackdropFilter: `blur(20px)`,
    }),
    [isScrolled]
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={navStyle}
        className={`fixed top-4 md:top-6 left-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 rounded-full shadow-lg transition-shadow duration-300 ${
          isScrolled ? "shadow-xl" : "shadow-md"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-3.5">
          {/* Logo */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="cursor-pointer flex items-center"
            >
              <Image
                src="/images/Group.svg"
                alt="Intech Logo"
                width={220}
                height={80}
                className="h-7 md:h-8 lg:h-10 w-auto object-contain"
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

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center gap-3 lg:gap-0">
            {/* Mobile CTA Button */}
            <Link href="/contact-us" className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-[#8ca77c] px-4 py-2 text-xs font-medium text-white hover:bg-[#7a9570] transition-colors duration-200 shadow-sm"
              >
                Contact
              </motion.button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-black transition-colors p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop CTA Button */}
            <Link href="/contact-us" className="hidden lg:block">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#8ca77c] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#7a9570] transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Speak With a Project Manager
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-4 z-50 w-[calc(100%-2rem)] max-w-sm bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden lg:hidden"
            >
              <div className="p-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-[#8ca77c]/10 hover:text-[#8ca77c] transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

