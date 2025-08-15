"use client"
import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface PopUpNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopUpNav: FC<PopUpNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const linkDecoration =
    "px-3 py-2 rounded-lg transition-colors duration-300 text-lg font-cherry block   w-full";
  const activeLink =
    "bg-gradient-to-r from-[#6f6cde]/30 to-[#ed24df]/50 text-white border-2 border-white w-full";

  return (
    <div className={`${isOpen ? 'backdrop-blur-lg' : ''} lg:hidden fixed inset-0 z-40 w-dvw pointer-events-none`}>
      <motion.div
        initial={{x:"150%"}}
        animate={{ x: isOpen ? 0 : "150%" }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.8,
        }}
        className={`absolute flex border-2 flex-col right-0 gap-6 p-5 h-dvh bg-black/90 w-2/3 rounded-3xl backdrop-blur-lg opacity-90 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        } md:w-[45%]`}
      >
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={onClose}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 cursor-pointer"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6f6cde" />
                <stop offset="100%" stopColor="#ed24df" />
              </linearGradient>
            </defs>
            <path
              stroke="url(#grad2)"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/skills", label: "Skills" },
            { href: "/feats", label: "Feats" },
            { href: "/contact_me", label: "Contact Me" },
          ].map((link) => (
            <motion.div 
              key={link.href}
            // initial={{opacity:0,x:50}}
            // whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,ease:"linear"}}
            className="max-w-full"
            ><Link prefetch
              onClick={onClose}
              className={`${linkDecoration} ${
                pathname === link.href && activeLink
              }`}
              href={link.href}
            >
              {link.label}
            </Link></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PopUpNav;
