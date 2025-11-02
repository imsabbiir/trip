"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import PlanCard from "@/components/plans/PlanCard";

function page() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/plans`
        );
        if (!res.ok) throw new Error("Failed to fetch plans");
        const data = await res.json();
        setPlans(data.plans || []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPlans();
  }, []);

  return (
    <div className="w-11/12 mx-auto pt-28 pb-16 px-4 md:px-10 my-10 relative">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-bold text-3xl text-gray-900 dark:text-white">
            Top Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            From Sajek to Sylhet, discover where your next journey will take
            you.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <motion.div
          key={plan?._id}
            // variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden relative cursor-pointer bg-cover bg-center group "
            style={{ backgroundImage: `url(${plan.image})` }}
          >
            <PlanCard plan={plan} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default page;
