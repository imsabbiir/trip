import React from "react";
import Link from "next/link";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/destinations`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }
  const data = await res.json();
  const destinations = data.allDestinations;

  console.log(destinations, "destinations");

  return (
    <div className="w-11/12 mx-auto py-16">
      {/* Header Section */}
      <div className="text-center my-14">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Explore <span className="text-[#007aff]">Beautiful Destinations</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
          Discover the most breathtaking places in Bangladesh — from serene
          lakes and misty hills to vibrant beaches and deep forests. Choose your
          next adventure!
        </p>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations?.map((dest) => (
          <Link key={dest._id} href={`/destinations/${dest._id}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-gradient-to-br from-gray-800/50 via-gray-900/60 to-black/70 dark:from-gray-800 dark:via-gray-900 dark:to-black">
              {/* Image */}
              <div
                className="w-full h-80 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 w-full text-white">
                <h2 className="text-2xl font-bold mb-1 tracking-wide">
                  {dest.title}
                </h2>
                <p className="text-gray-200 text-sm mb-2">{dest.subtitle}</p>

                {/* Type & Rating */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs bg-[#fff]/70 text-black font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {dest.type}
                  </span>
                  <span className="text-sm flex items-center gap-1">
                    ⭐ {dest.rating}
                  </span>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
