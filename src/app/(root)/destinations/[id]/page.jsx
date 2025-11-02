import Link from "next/link";
import React from "react";

async function page({ params }) {
  const { id } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/destinations/${id}`,
    {
      cache: "no-store",
    }
  );
  const destination = await response.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/destinations`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const destinations = data.allDestinations;
  const relatedDestinations = destinations
    .filter((destination) => destination._id !== id)
    .slice(0, 3);

  if (!destination) {
    return (
      <div className="text-center py-20 text-gray-600 dark:text-gray-300">
        Destination not found!
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#0f0f17] text-gray-900 dark:text-gray-100">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              {destination.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mt-3">
              {destination.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6 space-y-12">
        {/* Description */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {destination.description
            ?.split("\n")
            .filter((para) => para.trim() !== "")
            .map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </div>

        {/* Travel Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Location</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {destination.location}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Best Time to Visit</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {destination.best_time}
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">How to Reach</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {destination.how_to_reach}
            </p>
          </div>
        </div>

        {/* Activities */}
        {destination.activities && destination.activities.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Activities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {destination.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Map */}
        {destination.map_url && (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-80 md:h-96"
              src={destination.map_url}
              title={destination.title}
              allowFullScreen
            ></iframe>
          </div>
        )}
        {/* You May Also Like */}
        {relatedDestinations.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedDestinations.map((dest) => (
                <Link key={dest._id} href={`/destinations/${id}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-gradient-to-br from-gray-800/50 via-gray-900/60 to-black/70 dark:from-gray-800 dark:via-gray-900 dark:to-black">
                    <div
                      className="w-full h-48 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 p-4 w-full text-white">
                      <h3 className="text-xl font-bold mb-1 tracking-wide">
                        {dest.title}
                      </h3>
                      <p className="text-gray-200 text-sm">{dest.subtitle}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs bg-white/70 text-black font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          {dest.type}
                        </span>
                        <span className="text-sm flex items-center gap-1">
                          ⭐ {dest.rating}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div
          className="text-center mt-12"
        >
          <Link
            href={'/destinations'}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-300"
          >
            ← Back to All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
