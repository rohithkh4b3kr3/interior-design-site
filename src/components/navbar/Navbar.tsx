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
  { name: "Residential", href: "/residential" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /**
   * Darker glass background for contrast
   */
  const navStyle = useMemo(
    () => ({
      backgroundColor: isScrolled
        ? "rgba(230,230,230,0.95)" // darker gray on scroll
        : "white", // light glass at top
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
    }),
    [isScrolled]
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={navStyle}
        className={`fixed top-4 md:top-6 left-1/2 z-50
          w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl
          -translate-x-1/2 rounded-full
          transition-shadow duration-300
          ${isScrolled ? "shadow-xl" : "shadow-md"}`}
      >
        <div className="flex items-center justify-between h-16 md:h-18 px-5 md:px-7 lg:px-8">

          {/* LOGO */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center h-full"
            >
              <Image
                src="/images/logo3.png"
                alt="Intech Logo"
                width={260}
                height={60}
                priority
                className="max-h-8 md:max-h-10 lg:max-h-14 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-600 hover:text-gray-900 transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8ca77c] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-3">
            {/* Mobile CTA */}
            <Link href="/contact-us" className="lg:hidden">
              <button className="rounded-full bg-[#8ca77c] px-4 py-2 text-xs font-medium text-white hover:bg-[#7a9570] transition">
                Contact
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-black"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="block text-xl"
                  >
                    ✕
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="block text-xl"
                  >
                    ☰
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <Link href="/contact-us" className="hidden lg:block">
              <button className="rounded-full bg-[#8ca77c] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#7a9570] transition shadow-sm">
                Speak With a Project Manager
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="fixed top-20 right-4 z-50 w-[calc(100%-2rem)] max-w-sm bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 lg:hidden"
            >
              <div className="p-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-[#8ca77c]/10 hover:text-[#8ca77c] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}  