"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
    <div className="w-11/12 max-w-7xl mx-auto py-12 sm:py-20 text-gray-900 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
          {plan.tourTitle}
        </h1>
        <p className="text-gray-600 mt-3 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          {plan.destination.overview}
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden shadow-xl mb-12 sm:mb-16"
      >
        <img
          src={plan.destination.image}
          alt={plan.destination.name}
          className="w-full h-[300px] sm:h-[400px] md:h-[460px] lg:h-[500px] object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-8 rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white drop-shadow-lg">
            {plan.destination.name}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-1">
            {plan.destination.district}, {plan.destination.country}
          </p>
        </div>
      </motion.div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
        {[{
          icon: FaMapMarkerAlt,
          title: "Destination",
          value: plan.destination.name,
        },{
          icon: FaCalendarAlt,
          title: "Duration",
          value: `${plan.duration.days} Days`,
        },{
          icon: FaUsers,
          title: "Group Type",
          value: plan.groupDetails.tripType,
        }].map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-6 bg-white rounded-3xl shadow-md flex items-center gap-4 border border-gray-100"
            >
              <div className="text-sky-500 text-2xl sm:text-3xl">
                <Icon />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{card.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{card.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stay & Comfort */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <FaHotel className="text-sky-500 text-base sm:text-lg" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Stay & Comfort
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <motion.img
            src={plan.accommodation.image}
            alt={plan.accommodation.hotelName}
            className="rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover shadow-lg"
            whileHover={{ scale: 1.02 }}
          />
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-600 mb-1">
              {plan.accommodation.hotelName}
            </h3>
            <p className="text-gray-500 text-base sm:text-lg mb-2">
              {plan.accommodation.location}
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              Room Type: <span className="font-semibold">{plan.accommodation.roomType}</span>
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {plan.accommodation.amenities.map((a, i) => (
                <span
                  key={i}
                  className="bg-sky-50 text-sky-700 text-xs sm:text-sm px-2 py-1 rounded-full border border-sky-100"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaCalendarAlt className="text-sky-500 text-base sm:text-lg" />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
              Trip Itinerary
            </h2>
          </div>
          <div className="ml-0 sm:ml-2 md:ml-4">
            {plan.itinerary.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 sm:mb-12 relative w-full"
              >
                <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 md:max-w-xl border border-gray-100">
                  <div className="flex items-center w-fit justify-center px-4 sm:px-5 py-1 sm:py-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#48CAE4] text-white font-bold text-sm sm:text-base shadow-lg z-10">
                    Day: {day.day}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold bg-gradient-to-r from-[#0077B6] to-[#48CAE4] bg-clip-text text-transparent mb-2">
                    {day.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-sm mb-3">{day.description}</p>

                  {day.activities?.length > 0 && (
                    <div className="mb-2">
                      <h4 className="font-semibold text-sky-600 mb-1 text-sm sm:text-base">Activities</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {day.activities.map((act, idx) => (
                          <span
                            key={idx}
                            className="text-xs sm:text-sm px-2 py-1 rounded-full bg-sky-100 text-sky-800"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {day.places?.length > 0 && (
                    <div className="mb-2">
                      <h4 className="font-semibold text-sky-600 mb-1 text-sm sm:text-base">Places</h4>
                      <div className="flex gap-2 overflow-x-auto py-1">
                        {day.places.map((place, idx) => (
                          <a
                            key={idx}
                            href={place.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[100px] sm:min-w-[120px] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-gray-200"
                          >
                            <img
                              src={place.image}
                              alt={place.name}
                              className="w-full h-20 sm:h-24 object-cover"
                            />
                            <div className="p-1 sm:p-2 text-xs sm:text-sm font-medium text-gray-800">
                              {place.name}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Budget & Essentials */}
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
              Budget Overview 💰
            </h2>
          </div>
          <div className="p-4 sm:p-6 bg-gradient-to-r from-sky-100/60 to-cyan-100/60 rounded-2xl shadow-md border border-gray-200 mb-4">
            <p className="font-semibold text-gray-700 text-sm sm:text-base">
              Per Person: <span className="text-sky-600">৳{plan.estimatedBudget.perPerson}</span>
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Total: ৳{plan.estimatedBudget.total}
            </p>
          </div>

          <h4 className="font-semibold text-sm sm:text-base mb-2 text-sky-600">What to Pack</h4>
          <ul className="list-disc ml-4 text-xs sm:text-sm space-y-1 mb-6">
            {plan.necessaryItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2 mb-3">
            <FaPhone className="text-sky-500" /> Emergency Contacts 🚨
          </h2>
          <ul className="space-y-1 text-xs sm:text-sm">
            {Object.entries(plan.emergencyContacts).map(([key, value]) => (
              <li key={key}>
                <span className="capitalize font-medium text-sky-700">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <FaInfoCircle className="text-sky-500 text-base sm:text-lg" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Additional Notes
          </h2>
        </div>
        <p className="italic text-gray-500 text-sm sm:text-base">{plan.notes}</p>
      </div>

      {/* Map */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <FaMapMarkerAlt className="text-sky-500 text-base sm:text-lg" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            Explore Location
          </h2>
        </div>
        <div className="h-[300px] sm:h-[400px] md:h-[420px] rounded-3xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            className="w-full h-full"
            src={plan.destination.mapUrl}
            title={plan.destination.name}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
