"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ImageCarousel from "@/components/home/ImageCarousel";
import { useState, useEffect } from "react";

// Helper function to get all images from a folder
const getProjectImages = (folderName: string, baseName: string, count: number, ext: string = "jpg") => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/images/Commercial or Corporate Clients/${folderName}/${baseName}-${i}.${ext}`);
  }
  return images;
};

// Helper function to get all images from a residential project folder
const getResidentialImages = (folderName: string, imageNames: string[], nestedFolder?: string) => {
  const basePath = nestedFolder 
    ? `/images/Residential/${folderName}/${nestedFolder}`
    : `/images/Residential/${folderName}`;
  return imageNames.map(name => `${basePath}/${name}`);
};

// Helper function to get all images from a commercial project folder (supports webp)
const getCommercialImages = (folderName: string, imageNames: string[]) => {
  return imageNames.map(name => `/images/Commercial or Corporate Clients/${folderName}/${name}`);
};

// All commercial projects
const commercialProjects = [
  {
    id: 1,
    client: "Ashok Leyland",
    title: "Auditorium",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "10,000 sq ft",
    duration: "6 months",
    scope: "Complete auditorium interior execution with advanced acoustics and modular seating systems",
    challenge: "Large-scale auditorium with acoustic and seating requirements",
    solution: "Integrated design-build execution with acoustic engineering coordination",
    images: getProjectImages("ashok leyland auditorium", "ashok leyland", 4),
  },
  {
    id: 2,
    client: "Ashok Leyland",
    title: "Patent Gallery",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "3,500 sq ft",
    duration: "3 months",
    scope: "Corporate exhibition space with display systems and lighting design",
    challenge: "Showcasing patents and innovations in an engaging format",
    solution: "Custom display systems with integrated lighting and multimedia integration",
    images: getProjectImages("ashok leyland patent gallery", "ashok leyland patent gallery", 4),
  },
  {
    id: 3,
    client: "HDB Financial Services",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "25,000 sq ft",
    duration: "4 months",
    scope: "Complete office interior execution including workstations, meeting rooms, and common areas",
    challenge: "Operational workspace requiring minimal disruption",
    solution: "Phased execution with after-hours work coordination",
    images: getProjectImages("HDB financial services", "HDB financial services", 4),
  },
  {
    id: 4,
    client: "Mainetti",
    title: "Corporate Facility",
    sector: "Industrial",
    location: "Chennai, Tamil Nadu",
    area: "18,000 sq ft",
    duration: "5 months",
    scope: "Corporate facility execution with industrial-grade finishes and operational efficiency focus",
    challenge: "Durability requirements for high-traffic industrial environment",
    solution: "Industrial-grade material selection and finish execution",
    images: getProjectImages("mainetti", "mainetti", 4),
  },
  {
    id: 5,
    client: "Yaskawa India",
    title: "Manufacturing Facility",
    sector: "Corporate",
    location: "Bengaluru, Karnataka",
    area: "30,000 sq ft",
    duration: "7 months",
    scope: "Manufacturing facility interior execution with clean room specifications",
    challenge: "Clean room specifications and environmental control requirements",
    solution: "Specialized execution with environmental control system integration",
    images: getProjectImages("Yaskawa-India", "Yaskawa", 7),
  },
  {
    id: 6,
    client: "Mahathi Software",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "12,000 sq ft",
    duration: "3.5 months",
    scope: "Modern office space with collaborative work zones and tech-enabled meeting rooms",
    challenge: "Creating a tech-forward workspace aligned with company culture",
    solution: "Integrated technology infrastructure with flexible workspace design",
    images: getProjectImages("mahathi software private limited", "mahathi software private limited", 4),
  },
  {
    id: 7,
    client: "Jeep",
    title: "Automotive Showroom",
    sector: "Retail",
    location: "Chennai, Tamil Nadu",
    area: "8,500 sq ft",
    duration: "4 months",
    scope: "Premium automotive showroom with customer lounge and service area integration",
    challenge: "Brand-aligned luxury experience with functional service integration",
    solution: "Brand-specific design execution with premium finishes and customer experience focus",
    images: getProjectImages("jeep show room", "jeep show room", 4),
  },
  {
    id: 8,
    client: "Hotel Blue Diamond Bar",
    title: "Hospitality Interior",
    sector: "Hospitality",
    location: "Chennai, Tamil Nadu",
    area: "6,500 sq ft",
    duration: "5 months",
    scope: "Complete hospitality interior with bar, dining, and lounge areas",
    challenge: "Creating an inviting atmosphere with operational efficiency",
    solution: "Themed interior execution with attention to lighting, acoustics, and flow",
    images: getProjectImages("hotel blue diamond bar", "hotel blue diamond bar", 5),
  },
  {
    id: 9,
    client: "The Greenhouse Barbecue",
    title: "Restaurant Interior",
    sector: "Hospitality",
    location: "Chennai, Tamil Nadu",
    area: "4,200 sq ft",
    duration: "3 months",
    scope: "Restaurant interior with kitchen integration and dining space design",
    challenge: "Balancing kitchen operations with dining experience",
    solution: "Functional kitchen layout with open kitchen concept and comfortable dining zones",
    images: [
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue- 1.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-2.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-3.jpg",
      "/images/Commercial or Corporate Clients/the greenhouse barbecue/the greenhouse barbecue-4.jpg",
    ],
  },
  {
    id: 10,
    client: "St. Patricks Academy",
    title: "Educational Institution",
    sector: "Educational",
    location: "Chennai, Tamil Nadu",
    area: "20,000 sq ft",
    duration: "6 months",
    scope: "Institutional interior with classrooms, laboratories, and administrative areas",
    challenge: "Durable, safe, and functional spaces for educational use",
    solution: "Child-safe materials with durable finishes and flexible learning spaces",
    images: getProjectImages("st.particks academy", "st.particks", 5),
  },
  {
    id: 11,
    client: "FED SERV",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "10,000 sq ft",
    duration: "3 months",
    scope: "Corporate office execution with modern workstations and meeting facilities",
    challenge: "Efficient space utilization with professional aesthetics",
    solution: "Space-efficient design with modular systems and professional finishes",
    images: getProjectImages("FED SERV", "FED SERV", 4),
  },
  {
    id: 12,
    client: "MCB Developers",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "14,000 sq ft",
    duration: "4 months",
    scope: "Real estate developer office with client meeting areas and display zones",
    challenge: "Showcasing developer capabilities within the workspace",
    solution: "Integrated display areas with professional meeting spaces and showcase zones",
    images: getProjectImages("MCB developers", "MCB developers", 4),
  },
  {
    id: 13,
    client: "Metecno",
    title: "Corporate Office",
    sector: "Corporate",
    location: "Chennai, Tamil Nadu",
    area: "9,500 sq ft",
    duration: "3.5 months",
    scope: "Corporate office interior with open workspace and executive areas",
    challenge: "Creating collaborative workspace with private executive zones",
    solution: "Balanced open-plan design with designated executive and meeting spaces",
    images: getProjectImages("metecno", "metecno", 4),
  },
  {
    id: 14,
    client: "Rajan Dental",
    title: "Dental Clinic",
    sector: "Healthcare",
    location: "Chennai, Tamil Nadu",
    area: "7,500 sq ft",
    duration: "3 months",
    scope: "Complete dental clinic interior execution with treatment rooms, reception area, and sterilization zones",
    challenge: "Creating a sterile, welcoming environment with efficient workflow",
    solution: "Healthcare-grade finishes with patient-friendly design and optimized treatment room layouts",
    images: getCommercialImages("Rajan Dental Clinic", [
      "2025-11-21.webp",
      "DSC05054-768x512.jpg.webp",
      "DSC05157-scaled.webp",
      "DSC05187-scaled.webp",
      "DSC05264-scaled.webp",
      "DSC05344-768x1152.jpg.webp",
    ]),
  },
];

// All residential projects
const residentialProjects = [
  {
    id: 1,
    name: "Avighna",
    type: "Luxury Villa",
    location: "Chennai, Tamil Nadu",
    area: "8,500 sq ft",
    duration: "8 months",
    scope: "Complete luxury villa interior execution with premium finishes, custom furniture, and high-end fixtures",
    description: "A sophisticated residential project featuring contemporary design with elegant finishes and spacious living areas.",
    images: getResidentialImages("Avighna", [
      "avighna-1.jpg",
      "avighna-2.jpg",
      "avighna-3.jpg",
      "avighna-4.jpg",
      "avighna-5.jpg",
      "avighna-6.jpg",
      "avighna-7.jpg",
    ]),
  },
  {
    id: 2,
    name: "Casa Grand",
    type: "Premium Apartment",
    location: "Chennai, Tamil Nadu",
    area: "3,200 sq ft",
    duration: "5 months",
    scope: "Premium apartment interior with modern design elements, smart home integration, and luxury amenities",
    description: "Modern apartment design with clean lines, functional spaces, and contemporary aesthetics.",
    images: getResidentialImages("Casa Grand", [
      "Casa Grande 1.jpg",
      "Casa Grand 2.jpg",
      "Casa Grand 3.jpg",
      "Casa Grand 4.jpg",
      "Casa Grand 5.jpg",
    ]),
  },
  {
    id: 3,
    name: "Classy Bungalow",
    type: "Luxury Bungalow",
    location: "Chennai, Tamil Nadu",
    area: "12,000 sq ft",
    duration: "10 months",
    scope: "Complete bungalow interior execution with grand living spaces, private areas, and outdoor integration",
    description: "An expansive bungalow featuring luxurious interiors, spacious rooms, and elegant design throughout.",
    images: getResidentialImages("Classy Bungalow", [
      "classy bungalow-1.jpg",
      "classy bungalow-2.jpg",
      "classy bungalow-3.jpg",
      "classy bungalow-4.jpg",
      "classy bungalow-5.jpg",
      "classy bungalow-6.jpg",
      "classy bungalow-7.jpg",
      "classy bungalow-8.jpg",
      "classy bungalow-9.jpg",
      "classy bungalow-10.jpg",
    ]),
  },
  {
    id: 4,
    name: "Kalpatharu Villa",
    type: "Luxury Villa",
    location: "Chennai, Tamil Nadu",
    area: "10,500 sq ft",
    duration: "9 months",
    scope: "Luxury villa interior with custom design elements, premium materials, and sophisticated finishes",
    description: "A stunning villa showcasing modern luxury with attention to detail and premium craftsmanship.",
    images: getResidentialImages("Kalpatharu Villa", [
      "kalpatharu villa-1.jpg",
      "kalpatharu villa-2.jpg",
      "kalpatharu villa-3.jpg",
      "kalpatharu villa-4.jpg",
      "kalpatharu villa-5.jpg",
      "kalpatharu villa-6.jpg",
      "kalpatharu villa-7.jpg",
      "kalpatharu villa-8.jpg",
      "kalpatharu villa-9.jpg",
    ]),
  },
  {
    id: 5,
    name: "Lavish Contemporary Villa",
    type: "Contemporary Villa",
    location: "Chennai, Tamil Nadu",
    area: "9,000 sq ft",
    duration: "7 months",
    scope: "Contemporary villa interior with modern design philosophy, minimalist aesthetics, and smart home features",
    description: "A contemporary masterpiece blending modern design with functional elegance and sophisticated living spaces.",
    images: getResidentialImages("Lavish Contemporary Villa", [
      "lavish contemporary villa- 1.jpg",
      "lavish contemporary villa- 2.jpg",
      "lavish contemporary villa-3.jpg",
      "lavish contemporary villa- 4.jpg",
    ]),
  },
  {
    id: 6,
    name: "Mandhralaya",
    type: "Luxury Residence",
    location: "Chennai, Tamil Nadu",
    area: "7,800 sq ft",
    duration: "6 months",
    scope: "Luxury residence interior with traditional-modern fusion, custom elements, and premium finishes",
    description: "An elegant residence combining traditional charm with modern luxury and sophisticated design elements.",
    images: getResidentialImages("Mandhralaya", [
      "mandhralaya-1.jpg",
      "mandhralaya-2.jpg",
      "mandhralaya-3.jpg",
      "mandhralaya-4.jpg",
      "mandhralaya-5.jpg",
      "mandhralaya-6.jpg",
    ]),
  },
  {
    id: 7,
    name: "The Crest Luxurious Villa",
    type: "Ultra-Luxury Villa",
    location: "Chennai, Tamil Nadu",
    area: "15,000 sq ft",
    duration: "12 months",
    scope: "Ultra-luxury villa interior execution with bespoke design, high-end materials, and exclusive finishes",
    description: "The pinnacle of luxury living with opulent interiors, grand spaces, and exceptional attention to detail.",
    images: getResidentialImages("The Crest Luxurious Villa", [
      "the crest, luxurious villa-1.jpg",
      "the crest, luxurious villa-2.jpg",
      "the crest, luxurious villa-3.jpg",
      "the crest, luxurious villa-4.jpg",
      "the crest, luxurious villa-5.jpg",
      "the crest, luxurious villa-6.jpg",
      "the crest, luxurious villa-7.jpg",
    ]),
  },
  {
    id: 8,
    name: "Adarsh Palm Retreat",
    type: "Luxury Villa",
    location: "Bellandur, Bangalore",
    area: "9,500 sq ft",
    duration: "8 months",
    scope: "Complete luxury villa interior execution with modern design, premium finishes, and custom furniture",
    description: "A contemporary villa featuring elegant design, spacious living areas, and sophisticated interiors.",
    images: getResidentialImages(
      "Adarsh Palm Retreat, Villa in Bellandur for Sumant and Neha - HCDDream",
      [
        "A_10294.jpg",
        "A_10307.jpg",
        "A_10324.jpg",
        "A_10329.jpg",
        "A_10331.jpg",
        "A_10337.jpg",
        "A_10365.jpg",
        "A_10369.jpg",
        "A_10371.jpg",
        "A_10372.jpg",
        "A_10380.jpg",
        "A_10382.jpg",
      ],
      "Adarsh Palm Retreat, Villa in Bellandur for Sumant and Neha - HCDDream"
    ),
  },
  {
    id: 9,
    name: "Brigade Cornerstone Utopia",
    type: "Premium Apartment",
    location: "Varthur, Bangalore",
    area: "3,800 sq ft",
    duration: "5 months",
    scope: "Premium apartment interior with modern design elements, functional spaces, and luxury amenities",
    description: "A beautifully designed apartment featuring contemporary aesthetics and thoughtful space planning.",
    images: getResidentialImages(
      "Brigade Cornerstone Utopia, Apartment in Varthur for Himanshu and Tanya - HCDDream",
      [
        "A_18798.jpg",
        "A_18846.jpg",
        "A_18985.jpg",
        "A_18990.jpg",
        "A_19112.jpg",
        "A_19115.jpg",
        "A_19133-1.jpg",
        "Copy-of-3.jpg",
        "Copy-of-final-5.jpg",
      ],
      "Brigade Cornerstone Utopia, Apartment in Varthur for Himanshu and Tanya - HCDDream"
    ),
  },
  {
    id: 10,
    name: "Chaitanya Samarpan",
    type: "Luxury Villa",
    location: "Kadugodi, Bangalore",
    area: "11,000 sq ft",
    duration: "9 months",
    scope: "Complete luxury villa interior execution with premium finishes, custom design elements, and high-end fixtures",
    description: "An elegant villa showcasing sophisticated design with attention to detail and premium craftsmanship.",
    images: getResidentialImages(
      "Chaitanya Samarpan, Villa in Kadugodi for Sowmya and Ramesh - HCDDream",
      [
        "DSC_3804.jpg",
        "DSC_3805.jpg",
        "DSC_3811.jpg",
        "DSC_3813-1.jpg",
        "DSC_3813-scaled.jpg",
        "DSC_3816.jpg",
        "DSC_3820.jpg",
        "DSC_3825.jpg",
        "DSC_3839.jpg",
        "DSC_3842.jpg",
        "DSC_3845.jpg",
        "DSC_3847.jpg",
      ],
      "Chaitanya Samarpan, Villa in Kadugodi for Sowmya and Ramesh - HCDDream"
    ),
  },
  {
    id: 11,
    name: "Mantri",
    type: "Premium Apartment",
    location: "Hebbal, Bangalore",
    area: "3,500 sq ft",
    duration: "4.5 months",
    scope: "Premium apartment interior with modern design, smart home integration, and luxury finishes",
    description: "A modern apartment featuring clean lines, functional spaces, and contemporary design aesthetics.",
    images: getResidentialImages(
      "Mantri, Apartment in Hebbal for Sumanth and Surekha - HCDDream",
      [
        "1_DSC2315-scaled.jpg",
        "1_DSC2316-scaled.jpg",
        "DSC_0350-scaled.jpg",
        "DSC_0355-scaled.jpg",
        "DSC_0357-scaled.jpg",
        "DSC_0369-scaled.jpg",
        "DSC_0370-scaled.jpg",
      ],
      "Mantri, Apartment in Hebbal for Sumanth and Surekha - HCDDream"
    ),
  },
  {
    id: 12,
    name: "Merlin Pristine",
    type: "Premium Apartment",
    location: "Kolkata, West Bengal",
    area: "4,200 sq ft",
    duration: "5 months",
    scope: "Premium apartment interior execution with elegant design, premium materials, and sophisticated finishes",
    description: "A luxurious apartment featuring refined interiors, spacious rooms, and elegant design throughout.",
    images: getResidentialImages(
      "Merlin Pristine, Apartment in Kolkata for Mausami and Samrat - HCDDream",
      [
        "TBS_002.jpg",
        "TBS_004.jpg",
        "TBS_005.jpg",
        "TBS_006.jpg",
        "TBS_007.jpg",
        "TBS_008.jpg",
        "TBS_008-1.jpg",
        "TBS_010.jpg",
        "TBS_013.jpg",
        "TBS_018.jpg",
      ],
      "Merlin Pristine, Apartment in Kolkata for Mausami and Samrat - HCDDream"
    ),
  },
  {
    id: 13,
    name: "Neeraja Serenity",
    type: "Luxury Villa",
    location: "HRBR, Bangalore",
    area: "8,200 sq ft",
    duration: "7 months",
    scope: "Luxury villa interior with contemporary design, premium finishes, and custom furniture",
    description: "A serene villa featuring modern luxury with elegant design and sophisticated living spaces.",
    images: getResidentialImages(
      "Neeraja Serenity, Villa in Bangalore - HRBR for Anjana and Mahesh - HCDDream",
      [
        "A_18583.jpg",
        "A_18585.jpg",
        "A_18592.jpg",
        "A_18606.jpg",
        "A_18607-scaled.jpg",
      ],
      "Neeraja Serenity, Villa in Bangalore - HRBR for Anjana and Mahesh - HCDDream"
    ),
  },
  {
    id: 14,
    name: "Prestige Fern Residency",
    type: "Premium Apartment",
    location: "Sarjapur, Bangalore",
    area: "3,600 sq ft",
    duration: "4.5 months",
    scope: "Premium apartment interior with modern design elements, functional spaces, and luxury amenities",
    description: "A beautifully designed apartment featuring contemporary aesthetics and thoughtful space planning.",
    images: getResidentialImages(
      "Prestige Shantiniketan",
      [
        "A_16979-1-scaled.jpg",
        "A_16981-scaled.jpg",
        "A_16984-scaled.jpg",
        "A_16985-scaled.jpg",
        "A_16988-1-scaled.jpg",
        "A_16989-1-scaled.jpg",
        "A_16990-1-scaled.jpg",
        "A_16991-1-scaled.jpg",
        "A_16993-1-scaled.jpg",
        "A_16996-1-scaled.jpg",
      ],
      "Prestige Fern Residency, Apartment in Sarjapur for Vipan and Divya - HCDDream"
    ),
  },
  {
    id: 15,
    name: "Sobha Royal Pavillion",
    type: "Premium Apartment",
    location: "Sarjapur, Bangalore",
    area: "4,000 sq ft",
    duration: "5 months",
    scope: "Premium apartment interior execution with elegant design, premium materials, and sophisticated finishes",
    description: "A luxurious apartment featuring refined interiors, spacious rooms, and elegant design throughout.",
    images: getResidentialImages(
      "Sobha Royal Pavillion",
      [
        "A_10903.jpg",
        "A_10956.jpg",
        "A_10958.jpg",
        "A_10960.jpg",
        "A_10961.jpg",
        "A_10966.jpg",
        "A_10970.jpg",
        "A_10981.jpg",
      ],
      "Sobha Royal Pavillion, Apartment in Sarjapur for Ashish and Komal - HCDDream"
    ),
  },
  {
    id: 16,
    name: "Vaswani Exquisite",
    type: "Premium Apartment",
    location: "Whitefield, Bangalore",
    area: "3,900 sq ft",
    duration: "4.5 months",
    scope: "Premium apartment interior with modern design, smart home features, and luxury finishes",
    description: "A modern apartment featuring contemporary design with functional elegance and sophisticated living spaces.",
    images: getResidentialImages(
      "Vaswani Exquisite, Apartment in Whitefield for Nitin - HCDDream",
      [
        "DSC_2103.jpg",
        "DSC_2106.jpg",
        "DSC_2108.jpg",
        "DSC_2109.jpg",
        "DSC_2118-1.jpg",
        "DSC_2119.jpg",
        "DSC_2132.jpg",
        "DSC_2136.jpg",
      ],
      "Vaswani Exquisite, Apartment in Whitefield for Nitin - HCDDream"
    ),
  },
];

export default function OurWorksPage() {
  const [activeTab, setActiveTab] = useState<"corporate" | "residential">("corporate");

  // Check URL hash on mount and scroll
  useEffect(() => {
    if (window.location.hash === "#residential") {
      setActiveTab("residential");
      // Scroll to top of projects section after a brief delay
      setTimeout(() => {
        window.scrollTo({ top: 400, behavior: "smooth" });
      }, 100);
    }
  }, []);


  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Each project executed with focus on constructability, coordination, and long-term performance.
            Projects delivered across South India and major metropolitan cities.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-full bg-gray-100 p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab("corporate")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "corporate"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Corporate
            </button>
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "residential"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Residential
            </button>
          </div>
        </motion.div>

      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatePresence mode="wait">
          {activeTab === "corporate" ? (
            <motion.div
              key="corporate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {commercialProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Carousel */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageCarousel images={project.images} projectName={project.title} />
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-[var(--font-inter-tight)] text-xl font-bold text-gray-900 mb-1">
                        {project.client}
                      </h3>
                      <p className="text-sm font-medium text-[#8ca77c] mb-3">{project.title}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Area</p>
                        <p className="text-sm font-semibold text-gray-900">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Duration</p>
                        <p className="text-sm font-semibold text-gray-900">{project.duration}</p>
                      </div>
                    </div>

                    {/* Scope of Work */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 mb-2">Scope of Work</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{project.scope}</p>
                    </div>

                    {/* Challenge & Solution */}
                    {project.challenge && project.solution && (
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs font-medium text-gray-500 mb-1">Challenge</p>
                          <p className="text-sm text-gray-700">{project.challenge}</p>
                        </div>
                        <div className="bg-[#8ca77c]/5 rounded-lg p-3">
                          <p className="text-xs font-medium text-[#8ca77c] mb-1">Our Solution</p>
                          <p className="text-sm text-gray-700">{project.solution}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="residential"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
            >
              {residentialProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                >
                  {/* Image Carousel */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <ImageCarousel images={project.images} projectName={project.name} />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-sm font-semibold text-[#8ca77c] rounded-full shadow-md">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8">
                    <div className="mb-6">
                      <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Area</p>
                        <p className="text-lg font-bold text-gray-900">{project.area}</p>
                      </div>
                      <div className="bg-[#8ca77c]/5 rounded-xl p-4">
                        <p className="text-xs font-semibold text-[#8ca77c] mb-1 uppercase tracking-wide">Duration</p>
                        <p className="text-lg font-bold text-gray-900">{project.duration}</p>
                      </div>
                    </div>

                    {/* Scope of Work */}
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Scope of Work</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{project.scope}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "30+", label: "Projects Delivered" },
            { number: "3L+", label: "Total sq ft Delivered" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "12", label: "Cities Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#8ca77c] mb-2 font-[var(--font-inter-tight)]">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-10 md:p-12 text-center text-white"
        >
          <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4">
            Discuss Your Project Requirements
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Speak directly with our project management team about execution scope, timelines, and deliverables.
          </p>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Speak With a Project Manager
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
   