"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Our Works", href: "/our-works" },
  { name: "Interior", href: "/interior" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 32);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* OUTER NAV (POSITION + SHADOW ONLY) */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          fixed top-4 md:top-6 left-1/2 z-50
          w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]
          max-w-7xl -translate-x-1/2
          rounded-full
          ${isScrolled ? "shadow-xl" : "shadow-md"}
        `}
      >
        {/* INNER GLASS (CLIPS BLUR) */}
        <div
          className={`
            rounded-full overflow-hidden
            transition-colors duration-300
            ${isScrolled
              ? "bg-[rgba(245,245,245,0.96)]"
              : "bg-[rgba(255,255,255,0.92)]"}
          `}
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {/* NAV CONTENT */}
          <div className="flex items-center justify-between h-14 md:h-[58px] px-5 md:px-7">

            {/* LOGO (OPTICALLY BIGGER) */}
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="
                  flex items-center
                  h-full
                  -my-4        /* allows logo to grow vertically */
                  pr-2
                "
              >
                <Image
                  src="/images/logo3.png"
                  alt="Intech Logo"
                  width={420}
                  height={120}
                  priority
                  className="
                    max-h-16 md:max-h-[72px]
                    w-auto object-contain
                    select-none
                  "
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-600 hover:text-gray-900 transition group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#8ca77c] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              <Link href="/contact-us" className="lg:hidden">
                <button className="rounded-full bg-[#8ca77c] px-4 py-2 text-xs font-medium text-white hover:bg-[#7a9570] transition">
                  Contact
                </button>
              </Link>

              {/* MOBILE TOGGLE */}
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

              <Link href="/contact-us" className="hidden lg:block">
                <button className="rounded-full bg-[#8ca77c] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#7a9570] transition shadow-sm">
                  Speak With a Project Manager
                </button>
              </Link>
            </div>
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
              className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40 lg:hidden"
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
