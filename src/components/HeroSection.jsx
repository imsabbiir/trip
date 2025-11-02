import React from "react";
import img from "@/images/hero.jpg";
import Image from "next/image";
import { PointerHighlight } from "./ui/pointer-highlight";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:h-screen overflow-hidden">
      <Image
        src={img}
        alt="hero image"
        width={2500}
        height={2500}
        className="w-full h-screen object-cover absolute top-0 left-0"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000e0] via-[#000000a8] to-transparent" />

      {/* Decorative Blur Circle */}
      <div className="absolute top-20 right-10 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-emerald-400/20 blur-[100px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20 py-24 md:py-0">
        <div className="max-w-[600px] text-white">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-anton">
            Discover the World <br className="hidden sm:block" /> with{" "}
            
            <PointerHighlight
              rectangleClassName="bg-white leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="relative z-10 text-emerald-400">Confidence</span>
            </PointerHighlight>
          </h1>

          {/* Paragraph */}
          <p className="mt-5 md:mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
            Whether you seek mountain trails, tropical beaches, or cultural
            escapes — we craft journeys that blend comfort, adventure, and
            discovery. With expert care and personalized planning, your dream
            destination is just a step away.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Link href={"/contact"} className="px-6 py-3 bg-emerald-400 text-[#111] font-semibold rounded-full shadow-md hover:shadow-emerald-400/40 transition-all duration-300 text-center">
              Get a Free Consultation
            </Link>

            <Link href={"/plans"} className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white hover:text-[#111] transition-all duration-300 text-center">
              Our Packages
            </Link>

            <Link href={"/destinations"} className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full hover:bg-emerald-400 hover:text-[#111] transition-all duration-300 text-center">
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-xs md:text-sm tracking-[0.3em] uppercase">
        ✈️ Travel Beyond Limits
      </div>
    </section>
  );
}
