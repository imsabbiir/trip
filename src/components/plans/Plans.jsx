// src/components/TopDestinationsCard.jsx

import PlanSwiper from "./PlanSwiper";


export default async function Plans() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/plans`, {
    cache: "no-store", // Ensures always fresh data, use 'force-cache' if rarely changes
  });

  if (!res.ok) {
    throw new Error("Failed to fetch plans");
  }

  const data = await res.json();
  const plans = data.topRatedPlans || [];

  return (
    <div className="w-11/12 mx-auto py-10 px-4 md:px-10 my-10 relative">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-bold text-3xl text-gray-900 dark:text-white">
            Top Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            From Sajek to Sylhet, discover where your next journey will take you.
          </p>
        </div>
      </div>

      {/* Client Component (Swiper) */}
      <PlanSwiper plans={plans} />
    </div>
  );
}
