"use client";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/images/logo.png";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/destinations", label: "Destinations" },
    { href: "/plans", label: "Tour Plan" },
    { href: "/blogs", label: "Blog" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-md border-b border-white/20 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="">
          <div className="w-20">
            <Image
              src={Logo}
              alt="ExploreBD Logo"
              width={500}
              height={500}
              className="object-cover w-full"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2, scale: 1.05 }}
              className="relative text-gray-700 dark:text-gray-200 font-medium group"
            >
              <Link href={link.href}>
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={28} color="#000" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/40 backdrop-blur-md shadow-md border-b border-white/20 dark:border-[#1e293b]/40"
          >
            <nav className="flex flex-col items-center gap-4 py-5 text-lg font-medium">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="relative text-gray-700 dark:text-gray-200 group w-full text-center"
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


