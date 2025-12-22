"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  city: string;
}

const cities = ["Chennai", "Bangalore", "Hyderabad", "Pondicherry", "Coimbatore", "Mumbai", "Delhi", "Pune"];

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  // Show popup on page load (only once)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenQuotePopup");
    if (!hasSeenPopup) {
      // Delay popup appearance slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Mark popup as seen
        localStorage.setItem("hasSeenQuotePopup", "true");
        alert("Thank you! We'll get back to you soon.");
        setIsOpen(false);
        setFormData({ name: "", mobile: "", email: "", city: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenQuotePopup", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
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
                </svg>
              </button>

              {/* Left Section - Form */}
              <div className="flex-1 p-8 md:p-10 overflow-y-auto">

                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#8ca77c] to-[#7a9570] -mx-8 md:-mx-10 -mt-8 md:-mt-10 mb-8 px-8 md:px-10 py-4">
                  <h2 className="text-2xl font-bold text-white">Get Free Quote</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent outline-none transition"
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <span className="text-xl">🇮🇳</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent outline-none transition"
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent outline-none transition"
                      placeholder="Enter your Email ID"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent outline-none transition appearance-none bg-white"
                    >
                      <option value="">Select your city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#8ca77c] to-[#7a9570] text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:from-[#9bb88b] hover:to-[#8ca77c] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "GET FREE QUOTE"}
                  </motion.button>
                </form>
              </div>

              {/* Right Section - Promotional Content */}
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative Green Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8ca77c] to-[#7a9570]" />

                {/* Content */}
                <div className="relative z-10">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    HOME
                    <br />
                    CONSTRUCTION
                    <br />
                    <span className="font-extrabold">EXPERTS</span>
                    <br />
                    IN
                    <br />
                    <span className="text-[#8ca77c] font-extrabold">CHENNAI</span>
                  </h1>

                  {/* Achievement Badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8ca77c] to-[#7a9570] flex flex-col items-center justify-center relative shadow-lg">
                      <div className="absolute inset-0 rounded-full border-4 border-white/30" />
                      <div className="text-center z-10">
                        <div className="text-xs font-bold text-white mb-1">CELEBRATING</div>
                        <div className="text-4xl font-bold text-white">30+</div>
                        <div className="text-xs font-bold text-white">YEARS OF</div>
                        <div className="text-xs font-bold text-white">EXCELLENCE</div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#7a9570] rounded-b-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">SINCE 1994</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-gray-800">TURNKEY CONSTRUCTION SERVICES</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

