"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function PlanCard({ plan }) {
  return (
    <Link href={`/plans/${plan?._id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg bg-gray-200 dark:bg-gray-700 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plan?.destination?.image})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition" />

        {/* Info Panel */}
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/30 dark:bg-black/40 backdrop-blur-md rounded-xl text-white">
          <h3 className="text-xl sm:text-2xl font-bold">{plan?.tourTitle}</h3>
          <p className="text-sm sm:text-base mt-1 line-clamp-2">
            {plan?.destination?.overview}
          </p>
        </div>

        {/* Optional Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-600/90 text-white rounded-full text-sm sm:text-base font-semibold shadow-md">
          <span>{plan.groupDetails?.tripType}</span>
        </div>
      </motion.div>
    </Link>
  );
}

export default PlanCard;
