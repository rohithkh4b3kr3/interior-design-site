"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= DATA ================= */

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

const heroImages = [
  // "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
  // "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-2.jpg",
  "/images/Residential/Kalpatharu Villa/kalpatharu villa-1.jpg",
  // "/images/Residential/Classy Bungalow/classy bungalow-1.jpg",
];

/* ================= COMPONENT ================= */

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  /* Open popup once */
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(t);
  }, []);

  /* Rotate background */
  useEffect(() => {
    const i = setInterval(() => {
      setBgIndex((p) => (p + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ================= BACKDROP ================= */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* ================= MODAL ================= */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl
              max-w-4xl w-full overflow-hidden flex flex-col md:flex-row"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-20
                w-9 h-9 rounded-full bg-white hover:bg-black/20"
              >
                ✕
              </button>

              {/* ================= LEFT: FORM ================= */}
              <div className="flex-1 p-8">
                <h2 className="text-2xl font-bold mb-6">Get Free Quote</h2>

                <form className="space-y-4">
                  <input
                    placeholder="Name"
                    className="w-full border p-3 rounded-lg"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  <input
                    placeholder="Mobile"
                    className="w-full border p-3 rounded-lg"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                  />
                  <input
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <select
                    className="w-full border p-3 rounded-lg"
                    value={form.city}
                    onChange={(e) =>
                      setForm({ ...form, city: e.target.value })
                    }
                  >
                    <option value="">Select City</option>
                    {cities.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className="w-full bg-[#8ca77c] text-white py-3 rounded-lg font-semibold"
                  >
                    GET FREE QUOTE
                  </button>
                </form>
              </div>

              {/* ================= RIGHT: IMAGE ================= */}
              <div className="hidden md:block md:w-1/2 relative">
                <motion.div
                  key={bgIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    backgroundImage: `url(${encodeURI(
                      heroImages[bgIndex]
                    )})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 p-8 text-white flex items-center h-full">
                  <h1 className="text-5xl font-bold leading-tight">
                    HOME
                    <br />
                    CONSTRUCTION
                    <br />
                    <span className="text-[#8ca77c]">EXPERTS</span>
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
