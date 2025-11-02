"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaHotel,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";

export default function Page() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function fetchPlan() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/plans/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch plan");
        const data = await res.json();
        setPlan(data.plan);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPlan();
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-40 text-lg text-gray-500 animate-pulse">
        Loading Tour Details...
      </div>
    );
  if (error)
    return <div className="text-center text-red-600 py-20">{error}</div>;
  if (!plan) return <div className="text-center py-20">No plan found.</div>;

  return (
    <div className="w-11/12 mx-auto py-28 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
          {plan.tourTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
          {plan.destination.overview}
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden shadow-xl mb-16"
      >
        <img
          src={plan.destination.image}
          alt={plan.destination.name}
          className="w-full h-[460px] object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8 rounded-3xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            {plan.destination.name}
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            {plan.destination.district}, {plan.destination.country}
          </p>
        </div>
      </motion.div>

      {/* Info Cards (Inline) */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-sm flex items-center gap-4 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-sky-500 text-2xl">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Destination
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {plan.destination.name}
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-sm flex items-center gap-4 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-sky-500 text-2xl">
            <FaCalendarAlt />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Duration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {plan.duration.days} Days
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-sm flex items-center gap-4 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-sky-500 text-2xl">
            <FaUsers />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Group Type
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {plan.groupDetails.tripType}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stay & Comfort */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FaHotel className="text-sky-500 text-lg" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Stay & Comfort
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={plan.accommodation.image}
            alt={plan.accommodation.hotelName}
            className="rounded-3xl h-[300px] w-full object-cover shadow-lg"
            whileHover={{ scale: 1.02 }}
          />
          <div>
            <h3 className="text-5xl font-semibold text-sky-600 mb-1">
              {plan.accommodation.hotelName}
            </h3>
            <p className="text-gray-500 text-2xl mb-2">
              {plan.accommodation.location}
            </p>
            <p className="text-base text-[#555] mb-3">
              Room Type:{" "}
              <span className="font-semibold">
                {plan.accommodation.roomType}
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {plan.accommodation.amenities.map((a, i) => (
                <span
                  key={i}
                  className="bg-sky-50 dark:bg-gray-800 text-sky-700 dark:text-sky-300 text-xs px-3 py-1 rounded-full border border-sky-100 dark:border-gray-700"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary and Budget */}
      <div className="grid grid-cols-2 gap-10 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarAlt className="text-sky-500 text-lg" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
              Trip Itinerary
            </h2>
          </div>
          <div className="ml-4">
            {plan.itinerary.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 relative w-full pl-0 md:pl-12 md:ml-auto"
              >
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:max-w-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center w-fit justify-center px-5 py-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#48CAE4] text-white font-bold text-lg shadow-lg z-10">
                    Day: {day.day}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#0077B6] to-[#48CAE4] bg-clip-text text-transparent mb-2">
                    {day.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {day.description}
                  </p>

                  {day.activities?.length > 0 && (
                    <>
                      <h4 className="font-semibold text-sky-600 dark:text-cyan-400 mb-1">
                        Activities
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {day.activities.map((act, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-sky-100 dark:bg-cyan-700 text-sky-800 dark:text-white"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {day.places?.length > 0 && (
                    <>
                      <h4 className="font-semibold text-sky-600 dark:text-cyan-400 mb-2">
                        Places
                      </h4>
                      <div className="flex gap-3 overflow-x-auto py-1 mb-3">
                        {day.places.map((place, idx) => (
                          <a
                            key={idx}
                            href={place.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[120px] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700"
                          >
                            <img
                              src={place.image}
                              alt={place.name}
                              className="w-full h-24 object-cover"
                            />
                            <div className="p-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                              {place.name}
                            </div>
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Budget and Essentials */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
              Budget Overview 💰
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-r from-sky-100/60 to-cyan-100/60 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 mb-6">
            <p className="font-semibold text-gray-700 dark:text-gray-200">
              Per Person:{" "}
              <span className="text-sky-600">
                ৳{plan.estimatedBudget.perPerson}
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Total: ৳{plan.estimatedBudget.total}
            </p>
          </div>

          <h4 className="font-semibold text-lg mb-2 text-sky-600">
            What to Pack
          </h4>
          <ul className="list-disc ml-5 text-sm space-y-1 mb-8">
            {plan.necessaryItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent flex items-center gap-3 mb-3">
            <FaPhone className="text-sky-500" /> Emergency Contacts 🚨
          </h2>
          <ul className="space-y-1 text-sm">
            {Object.entries(plan.emergencyContacts).map(([key, value]) => (
              <li key={key}>
                <span className="capitalize font-medium text-sky-700 dark:text-sky-300">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FaInfoCircle className="text-sky-500 text-lg" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Additional Notes
          </h2>
        </div>
        <p className="italic text-gray-500 dark:text-gray-400">{plan.notes}</p>
      </div>

      {/* Map */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <FaMapMarkerAlt className="text-sky-500 text-lg" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Explore Location
          </h2>
        </div>
        <div className="h-[420px] rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <iframe
              className="w-full h-80 md:h-96"
              src={plan.destination.mapUrl}
              title={plan.destination.name}
              allowFullScreen
            ></iframe>
          
        </div>
      </div>
    </div>
  );
}
