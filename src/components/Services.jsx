"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHotel, FaBus, FaCar, FaMapMarkedAlt } from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState("hotel");

  const tabs = [
    { id: "hotel", label: "Hotel Booking", icon: <FaHotel /> },
    { id: "transport", label: "Transport Tickets", icon: <FaBus /> },
    { id: "car", label: "Car Rentals", icon: <FaCar /> },
    { id: "tour", label: "Guided Tours", icon: <FaMapMarkedAlt /> },
  ];

  const renderForm = () => {
    const commonInput =
      "input-box bg-gray-50 dark:bg-[#242833] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100";
    const btn =
      "bg-[#0077B6] hover:bg-[#0096C7] text-white font-medium py-3 px-6 rounded-lg transition";

    switch (activeTab) {
      case "hotel":
        return (
          <motion.div
            key="hotel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0077B6]">
              Book Your Hotel
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Destination" className={commonInput} />
              <input type="date" placeholder="Check-in" className={commonInput} />
              <input type="date" placeholder="Check-out" className={commonInput} />
              <input type="number" placeholder="Guests" className={commonInput} />
            </div>
            <button className={btn}>Search Hotels</button>
          </motion.div>
        );
      case "transport":
        return (
          <motion.div
            key="transport"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0077B6]">
              Book Your Transport
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="From" className={commonInput} />
              <input type="text" placeholder="To" className={commonInput} />
              <input type="date" className={commonInput} />
              <select className={commonInput}>
                <option>Bus</option>
                <option>Train</option>
                <option>Flight</option>
              </select>
            </div>
            <button className={btn}>Search Tickets</button>
          </motion.div>
        );
      case "car":
        return (
          <motion.div
            key="car"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0077B6]">Rent a Car</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Pickup Location" className={commonInput} />
              <input type="text" placeholder="Drop-off Location" className={commonInput} />
              <input type="date" placeholder="Pickup Date" className={commonInput} />
              <input type="date" placeholder="Return Date" className={commonInput} />
            </div>
            <button className={btn}>Find Cars</button>
          </motion.div>
        );
      case "tour":
        return (
          <motion.div
            key="tour"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0077B6]">
              Join a Guided Tour
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Destination" className={commonInput} />
              <input type="date" placeholder="Date" className={commonInput} />
              <input type="number" placeholder="People" className={commonInput} />
              <select className={commonInput}>
                <option>Adventure</option>
                <option>Family</option>
                <option>Luxury</option>
              </select>
            </div>
            <button className={btn}>Explore Tours</button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-[#F5F7FA] dark:bg-[#1B1E23]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section (Dynamic Form) */}
        <div className="bg-white dark:bg-[#242833] p-8 rounded-2xl shadow-md border border-[#CBD5E1] dark:border-gray-700">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-6">
            <select
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242833] text-gray-800 dark:text-gray-100"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          <AnimatePresence mode="wait">{renderForm()}</AnimatePresence>
        </div>

        {/* Right Section (Tabs for md+) */}
        <div className="hidden md:flex flex-col gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all border
                ${
                  activeTab === tab.id
                    ? "bg-[#0077B6] text-white border-[#0077B6] shadow-lg"
                    : "bg-white dark:bg-[#242833] text-gray-800 dark:text-gray-200 border-[#CBD5E1] dark:border-gray-700 hover:bg-[#48CAE4]/10"
                }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
