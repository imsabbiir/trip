import React from "react";
import Image from "next/image";
import TravelBg from "@/images/bg.jpeg";

export default function AboutSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#e6faff] via-[#ffffff] to-[#f0faff] dark:from-[#0a0a0a] dark:via-[#0f1012] dark:to-[#1a1a1a]">
      {/* Background Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00b4d8]/20 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0077B6]/25 blur-[180px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_10px_60px_rgba(0,0,0,0.15)] group h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0077B6]/40 via-transparent to-[#90E0EF]/20 rounded-[2rem] z-[1]" />
            <Image
              src={TravelBg}
              alt="Explore Bangladesh"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-700 rounded-[2rem]" />
          </div>

          <div className="absolute bottom-8 left-8 bg-white/70 dark:bg-[#141414]/80 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-lg max-w-[280px]">
            <h3 className="text-xl font-bold text-[#0077B6]">
              5+ Years of Experience
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Guiding thousands of travelers through unforgettable journeys.
            </p>
          </div>
        </div>

        {/* Right Section: Text and Stats */}
        <div className="relative">
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] bg-clip-text text-transparent">
              Explore Bangladesh
            </span>
            <br />
            Like Never Before
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-lg">
            <span className="font-semibold text-[#0077B6]">ExploreBD</span> is
            your trusted travel partner, offering tailored experiences that
            connect you with the heart of Bangladesh — its culture, people, and
            natural beauty.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-lg">
            Whether you crave mountain adventures, seaside calm, or cultural
            discovery, our team ensures every trip is crafted with care,
            comfort, and authenticity.
          </p>

          {/* Modern Stat Cards */}
          <div className="grid grid-cols-3 gap-5">
            {[
              { number: "250+", label: "Destinations" },
              { number: "5K+", label: "Travelers" },
              { number: "24/7", label: "Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-[#1b1b1b]/80 backdrop-blur-xl border border-white/20 rounded-2xl py-6 shadow-md hover:shadow-xl hover:border-[#00B4D8]/50 transition text-center"
              >
                <h3 className="text-3xl font-extrabold text-[#0077B6] drop-shadow-sm">
                  {item.number}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
