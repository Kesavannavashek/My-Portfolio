"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PopUpNav from "./PopUpNav";
import { motion } from "framer-motion";
const Navbar = () => {
  const linkDecoration =
    "py-1 px-2 rounded-lg border border-transparent cursor-none transition-all duration-150 hover:scale-105 hover:border-gray-500 hover:bg-gray-600/10 ";
  const [isNavToggeled, setIsNavToggeled] = useState<boolean>(false);

  return (
    <>
      <nav className="hidden lg:block">
        <div className="flex justify-between items-center">
          <div>
           <Link href={'/'} className="cursor-none"><img src="./logo1.png" alt="" className="w-14 h-14 ml-8" /></Link> 
          </div>
          <div className="flex space-x-16 pr-10 my-4">
            <Link className={linkDecoration} href={"/"} prefetch>
              Home
            </Link>
            <Link className={linkDecoration} href={"/projects"} prefetch>
              Projects
            </Link>
            <Link className={linkDecoration} href={"/skills"} prefetch>
              Skills
            </Link>
            <Link className={linkDecoration} href={"/feats"} prefetch>
              Feats
            </Link>
            <Link className={linkDecoration} href={"/contact_me"} prefetch>
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      <motion.nav
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{once:true}}
        style={{ originX: 0.5 }} 
        className=" lg:hidden border-2 rounded-2xl flex justify-between px-3 py-1 backdrop-blur-sm opacity-90"
      >
        <Link href={'/'}><Image src={"/logo1.png"} alt="logo" width={40} height={40} /></Link>
        <button onClick={() => setIsNavToggeled(!isNavToggeled)}>
          {!isNavToggeled && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-8`}
            >
              {" "}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6f6cde" />
                  <stop offset="100%" stopColor="#ed24df" />
                </linearGradient>
              </defs>
              <path
                stroke="url(#grad1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </motion.nav>
      <PopUpNav
        isOpen={isNavToggeled}
        onClose={() => setIsNavToggeled(false)}
      />
    </>
  );
};

export default Navbar;

// components/Navbar.tsx
// 'use client'

// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-gray-800">
//           &lt;/&gt; DevPortfolio
//         </Link>

//         {/* Navigation Links */}
//         <div className="space-x-6 hidden md:flex">
//           <Link href="#about" className="text-gray-600 hover:text-blue-600">
//             About
//           </Link>
//           <Link href="#projects" className="text-gray-600 hover:text-blue-600">
//             Projects
//           </Link>
//           <Link href="#contact" className="text-gray-600 hover:text-blue-600">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }
