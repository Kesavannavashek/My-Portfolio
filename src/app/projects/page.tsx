"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
const projects = () => {
  const myprojects = [
    {
      image: "/myportfolio.png",
      desc: "Building sleek, fast, and user-focused web experiences with modern tech.",
      title: "My Portfolio",
      hashtages: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Kesavannavashek/My-Portfolio",
    },

    {
      image: "/employee.png",
      desc: " A dynamic, mobile-friendly platform for managing employee records and roles with ease and efficiency.",
      title: "Employee Management System",
      hashtages: ["Next.js", "SpringBoot", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Kesavannavashek/Employee_management_System",
    },
    {
      image: "/connect.png",
      desc: "A visually engaging platform for sharing, discovering, and interacting with image-based posts in a connected community.",
      title: "Social Platform (Connect)",
      hashtages: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Kesavannavashek/Connect_Social-Media",
    },
    {
      image: "/videosummarization.png",
      desc: "AI-powered tool that transforms lengthy videos into concise, context-rich summaries, preserving key insights while saving time.",
      title: "Video Summarization System",
      hashtages: ["Next.js", "Python", "Whisper", "Gamma-2B"],
      github: "https://github.com/Kesavannavashek/VideoSummary",
    },
    {
      image: "/netflix.png",
      desc: "A sleek, responsive streaming interface replicating Netflix’s design for seamless browsing and content discovery.",
      title: "Netflix Like UI",
      hashtages: ["Next.js", "TMDB", "Tailwind CSS"],
      github: "https://github.com/Kesavannavashek/NetflixFrontEndClone",
    },
    {
      image: "/todo.png",
      desc: "A clean and intuitive task management app to help you stay organized and productive.",
      title: "Simple ToDo List",
      hashtages: ["React.js", "Local Storage"],
      github: "https://github.com/Kesavannavashek/React/tree/master/Todo-List",
      live: "https://todos-done.web.app/",
    },
    {
      image: "/weather.png",
      desc: "A real-time weather tracker providing accurate forecasts and location-based climate information.",
      title: "Weather Application (OpenWeather API) ",
      hashtages: ["React.js", "OpenWeather API", "Axios"],
      github: "https://github.com/Kesavannavashek/React/tree/master/WeatherForecst",
    },
  ];
  return (
    <div className="lg:mx-15">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-cherry font-bold text-center lg:my-4 my-3"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg text-center font-inconsolata my-2"
      >
        Here Is My Works
      </motion.p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 ">
        {myprojects?.map((project, i) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i}
            className="flex flex-col border rounded-2xl hover:-translate-y-2 transition duration-500 group 
                 w-full sm:w-90 md:w-100 lg:w-[calc(33.333%-1rem)] backdrop-blur-xs"
          >
            <motion.div className="w-full h-56 relative">
              <Image
                src={project.image}
                alt="image"
                fill
                priority
                className="object-cover rounded-t-2xl"
              />
              <div className="opacity-0 group-hover:opacity-100 z-10 bg-gradient-to-b from-transparent to-black h-full w-full absolute bottom-0 left-0"></div>
              <div
                className="flex gap-3 left-2 bottom-2 absolute p-1 rounded-full
                     lg:opacity-0 lg:translate-y-3 
                     lg:group-hover:opacity-100 lg:group-hover:translate-y-0 
                     transition-all duration-300 ease-out z-20"
              >
                <Link
                  href={project.github}
                  target="_blank"
                  className="border rounded-full p-1 bg-purple-400 hover:scale-125 transition-all duration-500 cursor-none"
                >
                  <Image
                    src={"/github.svg"}
                    width={24}
                    height={24}
                    alt=""
                    className="object-cover h-6 w-6"
                  />
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="border rounded-full p-1 bg-purple-400 hover:scale-125 transition-all duration-500 cursor-none"
                  >
                    <Image
                      src={"/view.svg"}
                      width={24}
                      height={24}
                      alt=""
                      className="object-cover h-6 w-6"
                    />
                  </Link>
                )}
              </div>
            </motion.div>

            <div className="flex flex-col gap-3 px-5 pt-4 pb-5">
              <div>
                <h1 className="text-2xl font-cherry">{project.title}</h1>
                <p className="font-inconsolata mt-2">{project.desc}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {project?.hashtages.map((tag, j) => (
                  <span
                    key={j}
                    className="border border-purple-400 rounded-3xl px-3 py-1 bg-purple-500/20 text-xs font-medium text-purple-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default projects;
