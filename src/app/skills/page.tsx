"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Skills = () => {
  console.log("motion", motion);

  const skills = [
    {
      name: "Front End",
      desc: "Technologies I Used In Front End To Create The User Interfaces",
      tools: [
        { icon: "/html.png", name: "HTML" },
        { icon: "/css.png", name: "CSS" },
        { icon: "/js.png", name: "javaScript" },
        { icon: "/react.png", name: "React" },
        { icon: "/next.png", name: "Next" },
        { icon: "/ts.png", name: "TypeScript" },
      ],
    },
    {
      name: "Back End",
      desc: "Languages And Frameworks Used To Create Robust Backend",
      tools: [
        { icon: "/java.png", name: "Java" },
        { icon: "/python.png", name: "Python" },
        { icon: "/nodejs.png", name: "Node" },
        { icon: "/springboot.png", name: "SpringBoot" },
        { icon: "/express.png", name: "Express" },
        { icon: "/mongoose.png", name: "Mongoose" },
      ],
    },
    {
      name: "Database",
      desc: "Databases I Used To Handle The Large Data",
      tools: [
        { icon: "/mysql.png", name: "My SQL" },
        { icon: "/mongodb.png", name: "Mongo DB" },
      ],
    },
    {
      name: "Tools & Technologies",
      desc: "Tools I Used To Crafting The Web",
      tools: [
        { icon: "/git.png", name: "Git" },
        { icon: "/github.png", name: "GitHub" },
        { icon: "/intellij.png", name: "Intellij IDEA" },
        { icon: "/vscode.png", name: "Vs Code" },
        { icon: "/postman.png", name: "Postman" },
        { icon: "/vercel.svg", name: "Vercel" },
      ],
    },
    {
      name: "Styling Tools & Frameworks",
      desc: "Tools I Used To Shape The Eye Catching UI",
      tools: [
        { icon: "/bootstrap.png", name: "Bootstrap" },
        { icon: "/tailwindcss.png", name: "Tailwind CSS" },
        { icon: "/framer.png", name: "Framer Motion" },
      ],
    },
    {
      name: "Familier With",
      desc: "Other Tech I Work With",
      tools: [
        { icon: "/django.png", name: "Django" },
        { icon: "/c.png", name: "C programming" },
        { icon: "/firebase.png", name: "Firebase" },
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-cherry font-bold text-center my-4"
      >
        Skills
      </motion.h1>
      <motion.p
        initial={{ opacity: 0,y:20}}
        whileInView={{ opacity: 1,y:0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{originX:0}}
        className="text-xl font-inconsolata text-center mb-8"
      >
        Skills to craft high-performance, efficient websites
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 2xl:gap-8 mt-10 place-items-center items-stretch lg:mx-0 md:mx-5">
        {skills.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex w-full lg:w-[80%] 2xl:w-full text-center flex-col gap-4 border rounded-2xl p-2 lg:p-5 bg-gradient-to-tr bg-white/10 backdrop-blur-lg"
          >
            <h1 className="text-2xl font-cherry">{item.name}</h1>
            <p className="font-inconsolata text-lg">{item.desc}</p>

            <div className="grid grid-cols-3 gap-4 p-1 md:p-5 lg:p-4">
              {item.tools.map((tool, j) => (
                <div
                  key={j}
                  className="border px-2 py-4 flex flex-col gap-3 items-center rounded-2xl bg-white/15"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    priority
                  />
                  <p className="font-cherry text-xs">{tool.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
// from-[#272561]/70 to-[#54004e]/50