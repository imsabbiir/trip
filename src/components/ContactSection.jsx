import React from "react";
import Link from "next/link";
import Image from "next/image";
import TravelBg from "@/images/bg.jpeg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";

export default function ContactSection() {
  const inputStyle =
    "w-full p-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-md text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]";
  const btnStyle =
    "w-full bg-[#48CAE4] hover:bg-[#00B4D8] text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105";

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={TravelBg}
          alt="Travel Background"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Info Section */}
          <div className="text-white space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#48CAE4]">
                Let’s Connect & Explore
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-gray-200">
              Whether you’re chasing sunsets at Cox’s Bazar, exploring the green
              tea gardens of Sylhet, or planning your next big adventure — we’re
              here to make it unforgettable. 🌴✨ Reach out today and let’s plan
              your dream journey across Bangladesh.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#48CAE4] text-xl" />
                <span>123 Travel Lane, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#48CAE4] text-xl" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#48CAE4] text-xl" />
                <span>info@explorebd.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-2xl mt-8">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#1877F2] transition-transform transform hover:scale-125"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-500 transition-transform transform hover:scale-125"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-red-600 transition-transform transform hover:scale-125"
              >
                <IoLogoYoutube />
              </Link>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={inputStyle}
                />
              </div>
              <input type="text" placeholder="Subject" className={inputStyle} />
              <textarea
                placeholder="Your Message"
                className={`${inputStyle} h-32 resize-none`}
              />
              <button type="submit" className={btnStyle}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
