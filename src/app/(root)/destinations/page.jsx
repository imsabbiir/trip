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
    <div className="w-11/12 mx-auto py-16 bg-white">
      {/* Header Section */}
      <div className="text-center my-14">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore{" "}
          <span className="text-[#007aff]">Beautiful Destinations</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Discover the most breathtaking places in Bangladesh — from serene
          lakes and misty hills to vibrant beaches and deep forests. Choose your
          next adventure!
        </p>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations?.map((dest) => (
          <Link key={dest._id} href={`/destinations/${dest._id}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <div
                className="w-full h-80 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 w-full text-white">
                <h2 className="text-2xl font-bold mb-1 tracking-wide">
                  {dest.title}
                </h2>
                <p className="text-gray-200 text-sm mb-2">{dest.subtitle}</p>

                {/* Type & Rating */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs bg-white/80 text-black font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {dest.type}
                  </span>
                  <span className="text-sm flex items-center gap-1">
                    ⭐ {dest.rating}
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
