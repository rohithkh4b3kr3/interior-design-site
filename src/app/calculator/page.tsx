"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CalculatorRow {
  id: string;
  work: string;
  area: string;
  unit: string;
  rate: number;
  cost: number;
  inputType: "single" | "double";
  placeholder1?: string;
  placeholder2?: string;
}

const floorOptions = ["G", "G+1", "G+2", "G+3", "G+4"];

const constructionPackages = [
  { name: "Basic Package @ 2499/sqft", rate: 2499 },
  { name: "Standard Package @ 2799/sqft", rate: 2799 },
  { name: "Premium Package @ 3099/sqft", rate: 3099 },
  { name: "Luxury Package @ 3499/sqft", rate: 3499 },
];

const designPackages = [
  { name: "Basic Package @ 45/sqft", rate: 45 },
  { name: "Standard Package @ 95/sqft", rate: 95 },
  { name: "Premium Package @ 180/sqft", rate: 180 },
];

export default function CalculatorPage() {
  const [packageType, setPackageType] = useState<"construction" | "design">("construction");
  const [selectedFloors, setSelectedFloors] = useState("G+1");
  const [selectedPackage, setSelectedPackage] = useState(constructionPackages[0]);
  const [rows, setRows] = useState<CalculatorRow[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  // Get current package options based on type
  const currentPackageOptions = packageType === "construction" ? constructionPackages : designPackages;

  // Calculate cost for a single row
  const calculateRowCost = (row: CalculatorRow): number => {
    if (row.inputType === "single") {
      const areaValue = parseFloat(row.area) || 0;
      return areaValue * row.rate;
    } else if (row.inputType === "double") {
      // For compound wall, area is stored as "length,height"
      const [length, height] = row.area.split(",").map((v) => parseFloat(v) || 0);
      const areaValue = length * height;
      return areaValue * row.rate;
    }
    return 0;
  };

  // Update selected package when package type changes
  useEffect(() => {
    if (packageType === "construction") {
      setSelectedPackage(constructionPackages[0]);
    } else {
      setSelectedPackage(designPackages[0]);
    }
  }, [packageType]);

  // Initialize rows based on selected floors and package type
  useEffect(() => {
    setRows((prevRows) => {
      const newRows: CalculatorRow[] = [];
      const floorCount = floorOptions.indexOf(selectedFloors) + 1;
      
      // Preserve existing area values
      const existingAreas = new Map(prevRows.map((r) => [r.id, r.area]));

      // Add ground floor
      newRows.push({
        id: "ground-floor",
        work: "Enter required Built up Area for Ground Floor",
        area: existingAreas.get("ground-floor") || "",
        unit: "sqft",
        rate: selectedPackage.rate,
        cost: 0,
        inputType: "single",
        placeholder1: "Area in sqft",
      });

      // Add first floor and above
      for (let i = 1; i < floorCount; i++) {
        const floorName = i === 1 ? "First" : i === 2 ? "Second" : i === 3 ? "Third" : "Fourth";
        const floorId = `floor-${i}`;
        newRows.push({
          id: floorId,
          work: `Enter required Built up Area for ${floorName} Floor`,
          area: existingAreas.get(floorId) || "",
          unit: "sqft",
          rate: selectedPackage.rate,
          cost: 0,
          inputType: "single",
          placeholder1: "Area in sqft",
        });
      }

      // Only add construction-specific items for construction packages
      if (packageType === "construction") {
        // Add water sump
        newRows.push({
          id: "water-sump",
          work: "Size of RCC Water Sump (A 4 member family will require 9000 liter capacity)",
          area: existingAreas.get("water-sump") || "",
          unit: "ltr",
          rate: 24,
          cost: 0,
          inputType: "single",
          placeholder1: "No. of Liters",
        });

        // Add septic tank
        newRows.push({
          id: "septic-tank",
          work: "Size of Septic Tank",
          area: existingAreas.get("septic-tank") || "",
          unit: "ltr",
          rate: 24,
          cost: 0,
          inputType: "single",
          placeholder1: "No. of Liters",
        });

        // Add compound wall
        newRows.push({
          id: "compound-wall",
          work: "Plain Compound Wall",
          area: existingAreas.get("compound-wall") || "",
          unit: "sqft",
          rate: 425,
          cost: 0,
          inputType: "double",
          placeholder1: "Length",
          placeholder2: "Height",
        });
      }

      // Calculate costs for all rows
      return newRows.map((row) => ({
        ...row,
        cost: calculateRowCost(row),
      }));
    });
  }, [selectedFloors, selectedPackage, packageType]);

  // Calculate total cost whenever rows change
  useEffect(() => {
    const total = rows.reduce((sum, row) => sum + row.cost, 0);
    setTotalCost(total);
  }, [rows]);

  const handleInputChange = (id: string, value: string, isSecondInput = false) => {
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          let newArea = "";
          if (row.inputType === "double") {
            const [length, height] = row.area.split(",");
            if (isSecondInput) {
              newArea = `${length || ""},${value}`;
            } else {
              newArea = `${value},${height || ""}`;
            }
          } else {
            newArea = value;
          }
          
          const updatedRow = { ...row, area: newArea };
          return { ...updatedRow, cost: calculateRowCost(updatedRow) };
        }
        return row;
      })
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cost Calculator
          </h1>
          <p className="text-gray-400 text-lg">
            Calculate your construction or design cost based on your requirements
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Section with Dropdowns */}
          <div className="bg-gradient-to-r from-[#8ca77c] to-[#7a9570] p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Package Type */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">
                  Package Type
                </label>
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value as "construction" | "design")}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                >
                  <option value="construction">Construction</option>
                  <option value="design">Design</option>
                </select>
              </div>

              {/* No. of Floors */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">
                  No. of Floors
                </label>
                <select
                  value={selectedFloors}
                  onChange={(e) => setSelectedFloors(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                >
                  {floorOptions.map((floor) => (
                    <option key={floor} value={floor}>
                      {floor}
                    </option>
                  ))}
                </select>
              </div>

              {/* Package */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">
                  Package
                </label>
                <select
                  value={selectedPackage.name}
                  onChange={(e) => {
                    const pkg = currentPackageOptions.find((p) => p.name === e.target.value);
                    if (pkg) setSelectedPackage(pkg);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                >
                  {currentPackageOptions.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Work</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Area</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Unit</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Rate</th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-4 text-gray-800 font-medium text-sm">
                      {row.work}
                    </td>
                    <td className="py-4 px-4">
                      {row.inputType === "single" ? (
                        <input
                          type="number"
                          value={row.area}
                          onChange={(e) => handleInputChange(row.id, e.target.value)}
                          placeholder={row.placeholder1}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent text-gray-800"
                        />
                      ) : (
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={row.area.split(",")[0] || ""}
                            onChange={(e) => handleInputChange(row.id, e.target.value, false)}
                            placeholder={row.placeholder1}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent text-gray-800"
                          />
                          <input
                            type="number"
                            value={row.area.split(",")[1] || ""}
                            onChange={(e) => handleInputChange(row.id, e.target.value, true)}
                            placeholder={row.placeholder2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca77c] focus:border-transparent text-gray-800"
                          />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600 font-medium">
                      {row.unit}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600 font-medium">
                      Rs.{row.rate.toLocaleString("en-IN")}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-800 font-semibold">
                      {formatCurrency(row.cost)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {/* Total Cost */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-6 pt-6 border-t-2 border-gray-200"
            >
              <div className="flex justify-end">
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">
                    Total {packageType === "construction" ? "Construction" : "Design"} Cost
                  </div>
                  <div className="text-3xl font-bold text-[#8ca77c]">
                    {formatCurrency(totalCost)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>
            * This is an estimated cost. Final cost may vary based on site conditions and
            requirements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

