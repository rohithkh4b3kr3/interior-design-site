"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  city: string;
}

const cities = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Pondicherry",
  "Coimbatore",
  "Mumbai",
  "Delhi",
  "Pune",
];

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  // 🔹 Open popup on EVERY load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-quote-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      alert("Thank you! We'll get back to you soon.");
      setIsOpen(false);
      setFormData({ name: "", mobile: "", email: "", city: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white rounded-2xl shadow-2xl
                max-w-5xl w-full
                h-[92vh] md:h-auto
                overflow-hidden
                flex flex-col md:flex-row
                relative
              "
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full
                bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                ✕
              </button>

              {/* ================= LEFT — FORM ================= */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto overscroll-contain">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#8ca77c] to-[#7a9570]
                -mx-6 md:-mx-10 -mt-6 md:-mt-10 mb-6 px-6 md:px-10 py-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Get Free Quote
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 md:py-3 rounded-lg border
                      border-gray-300 focus:ring-2 focus:ring-[#8ca77c] outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      name="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 md:py-3 rounded-lg border
                      border-gray-300 focus:ring-2 focus:ring-[#8ca77c] outline-none"
                      placeholder="Your mobile number"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 md:py-3 rounded-lg border
                      border-gray-300 focus:ring-2 focus:ring-[#8ca77c] outline-none"
                      placeholder="Your email"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      City *
                    </label>
                    <select
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 md:py-3 rounded-lg border
                      border-gray-300 focus:ring-2 focus:ring-[#8ca77c] outline-none bg-white"
                    >
                      <option value="">Select city</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sticky CTA on Mobile */}
                  <div className="sticky bottom-0 bg-white pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-gradient-to-r from-[#8ca77c] to-[#7a9570]
                      text-white font-semibold py-4 rounded-xl shadow-lg
                      disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "GET FREE QUOTE"}
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* ================= RIGHT — PROMO (DESKTOP ONLY) ================= */}
              <div className="hidden md:flex flex-1 bg-gradient-to-br
              from-gray-50 to-gray-100 p-10 flex-col justify-center relative">
                <div className="absolute left-0 top-0 bottom-0 w-1
                bg-gradient-to-b from-[#8ca77c] to-[#7a9570]" />

                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                  HOME
                  <br />
                  CONSTRUCTION
                  <br />
                  <span className="font-extrabold">EXPERTS</span>
                  <br />
                  IN
                  <br />
                  <span className="text-[#8ca77c]">CHENNAI</span>
                </h1>

                <div className="w-32 h-32 rounded-full bg-gradient-to-br
                from-[#8ca77c] to-[#7a9570] flex flex-col items-center
                justify-center text-white shadow-lg">
                  <div className="text-xs font-bold">CELEBRATING</div>
                  <div className="text-4xl font-bold">30+</div>
                  <div className="text-xs font-bold">YEARS</div>
                </div>

                <p className="mt-6 text-lg font-semibold text-gray-800">
                  INTECH CONSTRUCTION SERVICES
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
