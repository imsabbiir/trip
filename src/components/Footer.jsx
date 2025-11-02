import Link from "next/link";
import React from "react";
import Logo from "@/images/logo.png";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white w-full">
      {/* Top Section */}
      <div className="w-[90%] mx-auto py-5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="w-24">
          <Image
            src={Logo}
            alt="Trip with ExploreBD"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <Link href="/home" className="hover:text-sky-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-sky-400 transition duration-300">
            About Us
          </Link>
          <Link href="/destination" className="hover:text-sky-400 transition duration-300">
            Destination
          </Link>
          <Link href="/blog" className="hover:text-sky-400 transition duration-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-sky-400 transition duration-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#333]" />

      {/* Bottom Section */}
      <div className="w-[90%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
        {/* Left Side */}
        <div className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} ExploreBD. All rights reserved.
        </div>


        <div className="flex flex-col gap-3 items-center md:flex-row md:gap-10">
          <div className="flex gap-4 text-gray-400">
          <Link
            href="/home"
            className="hover:text-sky-400 transition duration-300"
          >
            Home
          </Link>
          |
          <Link
            href="/about"
            className="hover:text-sky-400 transition duration-300"
          >
            About Us
          </Link>
        </div>


        <div className="flex gap-5 text-2xl mt-2 md:mt-0">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition duration-300 transform hover:scale-110"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300 transform hover:scale-110"
          >
            <RiInstagramFill />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition duration-300 transform hover:scale-110"
          >
            <IoLogoYoutube />
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
}
