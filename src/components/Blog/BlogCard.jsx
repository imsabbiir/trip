"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function BlogCard({ blog }) {
  return (
    <div
      
      className="relative bg-white  shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group border border-gray-100 "
    >
      {/* Image Section */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <img
          src={blog?.image}
          alt={blog?.title}
          width={1200}
          height={800}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-xl md:text-2xl font-bold">{blog?.title}</h2>
          <p className="text-sm md:text-base opacity-90">{blog?.subtitle}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between">
        <p className="text-sm text-gray-600  mt-2 line-clamp-3 text-justify mb-5 leading-relaxed">
          {blog?.content}
        </p>

        {/* Explore Button */}
        <Link
          href={`/blogs/${blog?._id}`}
          className="group/button inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white text-sm font-medium rounded-full shadow-md hover:from-[#0096C7] hover:to-[#00B4D8] transition-all duration-300"
        >
          Explore Now
          <FaArrowRight className="group-hover/button:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Glow Border Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl pointer-events-none bg-gradient-to-r from-[#00B4D8]/30 via-transparent to-[#0077B6]/30 blur-xl"></div>
    </div>
  );
}

export default BlogCard;
