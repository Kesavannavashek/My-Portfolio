"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import AboutMe from "@/Components/AboutMe";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  console.log("motion", motion);
  const socials = [
    {
      icon: "/github.svg",
      link: "https://github.com/Kesavannavashek",
      color: "red-700",
    },
    {
      icon: "/linkedin.svg",
      link: "https://www.linkedin.com/in/kesavan-m-1111191a3",
      color: "blue-600",
    },
    {
      icon: "/leetcode.svg",
      link: "https://leetcode.com/u/Kesavan_m_07/",
      color: "yellow-700",
    },
    {
      icon: "/hackerrank.svg",
      link: "https://www.hackerrank.com/profile/kesavannavi77",
      color: "green-700",
    },
  ];
  return (
    <>
      <div className="h-dvh flex flex-col justify-around">
        <div className="bg-transparent flex flex-col-reverse gap-15 lg:flex-row items-center lg:items-start lg:pt-20 lg:px-8 lg:mt-20 lg:mr-30">
          {/* Left Side */}
          <div className="w-full lg:w-4/5 lg:ml-10 px-4 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }} // start off-screen & transparent
              animate={{ opacity: 1, y: 0 }} // fade in and slide up
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-white text-lg lg:text-4xl m-3 font-cherry"
            >
              Hi There,
              <span className="inline-block animate-tilt origin-bottom">
                👋
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }} // start off-screen & transparent
              animate={{ opacity: 1, y: 0 }} // fade in and slide up
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="bg-clip-text font-cherry inline-block text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-[#ed24df] to-[#6f6cde] mb-5"
            >
              {`I'm Kesavan`}
              <span className="animate-ping text-3xl sm:text-4xl lg:text-5xl font-extralight bg-clip-text bg-[#6f6cde] text-transparent ml-2">
                |
              </span>
            </motion.p>

            <TypeAnimation
              sequence={[
                "<Full Stack Developer/>",
                1000,
                "<Programmer/>",
                1000,
              ]}
              repeat={Infinity}
              speed={30}
              cursor
              className="bg-clip-text font-cherry text-2xl sm:text-lg lg:text-6xl block text-transparent bg-gradient-to-r from-[#6f6cde] to-[#ed24df] mb-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }} // start off-screen & transparent
              animate={{ opacity: 1, y: 0 }} // fade in and slide up
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mx-auto w-full sm:w-auto"
            >
              <a
                href="/Kesavan_M_Resume.pdf"
                download
                className="group inline-block transform hover:scale-105 transition duration-700 rounded-2xl"
              >
                <button className="hover-gradient bg-gradient-to-r from-[#6f6cde] to-[#ed24df] text-white py-3 px-6 rounded-2xl w-full sm:w-auto font-cherry">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 inline mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  My Resume
                </button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mt-10 flex items-center justify-center lg:justify-start"
            ></motion.div>
            <motion.div className="flex gap-8 items-center justify-center lg:justify-start cursor-none">
              {socials?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0, delay: i * 0.1 }}
                  className={`bg-gradient-to-br from-white to-${item.color}  border cursor-none p-3 rounded-2xl hover:scale-105 transition duration-500 hover:shadow-[0_0px_35px_rgba(0,0,0,0.25)] shadow-${item.color}`}
                >
                  <Link href={item.link} target="_blank">
                    <Image
                      className="w-5 h-5 cursor-none"
                      src={item.icon}
                      alt="icons"
                      // fill
                      width={0}
                      height={0}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="flex  items-center mt-15 lg:ml-15 justify-center lg:justify-start">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0px_0px_14px] animate-pulse shadow-green-500"></div>
              <p className="ml-2 font-bold font-inconsolata ">
                Available To Work
              </p>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: -30 }} // start off-screen & transparent
            animate={{ opacity: 1, y: 0 }} // fade in and slide up
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex items-center justify-center mt-10 lg:mt-0 lg:mr-10"
          >
            <Tilt
              scale={1.05}
              transitionSpeed={1500}
              glareEnable={false}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
            >
              <div className="w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full bg-gradient-to-b from-[#6f6cde]/50 to-[#ed24df]/100 p-1.5 shadow-2xl">
                <div className="relative w-full h-full rounded-full bg-black ring-4 overflow-hidden">
                  <Image
                    src="/avatar.webp"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    sizes="(max-width:500px) 100vw, 200px"
                    priority
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 sm:size-16 lg:size-20 animate-slowbounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </div>

      <AboutMe />
    </>
  );
}
