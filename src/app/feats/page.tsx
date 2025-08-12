"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { span } from "motion/react-client";

const Feats = () => {
  const experiences = [
    {
      image: "/brandwaves.jpeg",
      name: "Full Stack Developer (Intern)",
      organization: "Brandwaves",
      location: "Chennai",
      duration: "4 Weeks",
      hashtags: ["Next.js", "SpringBoot", "MySQL"],
    },
    // {
    //   image: "/brandwaves.jpeg",
    //   name: "Full Stack Developer (Intern)",
    //   organization: "BrandWaves",
    //   location: "Chennai",
    //   duration: "4 Weeks",
    //   hashtags: ["Next.js", "SpringBoot", "MySQL"],
    // },
    // {
    //   image: "/brandwaves.jpeg",
    //   name: "Full Stack Developer (Intern)",
    //   organization: "BrandWaves",
    //   location: "Chennai",
    //   duration: "4 Weeks",
    //   hashtags: ["Next.js", "SpringBoot", "MySQL"],
    // },
    // {
    //   image: "/brandwaves.jpeg",
    //   name: "Full Stack Developer (Intern)",
    //   organization: "BrandWaves",
    //   location: "Chennai",
    //   duration: "4 Weeks",
    //   hashtags: ["Next.js", "SpringBoot", "MySQL"],
    // },
  ];

  const profiles = [
    {
      name: "LeetCode",
      image: "https://leetcard.jacoblin.cool/Kesavan_m_07?theme=dark&font=Martel%20Sans",
    },
    {
      name: "HackerRank",
      image: "/hackerrank1.png",
    },
    {
      name: "GeeksForGeeks",
      image: "https://gfgstatscard.vercel.app/heyt1vl9n?theme=dark",
    },
  ];
  return (
    <div className="mx-6">
      <div>
       
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-cherry font-bold text-center lg:my-4 my-3"
        >
          Feats
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-center font-inconsolata my-2"
        >
          Here Are Some Milestones
        </motion.p>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:mx-6 my-5 font-cherry"
          >
            Coding Profiles
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
            {profiles?.map((profile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className=" border rounded-2xl hover:-translate-y-3 transition-all duration-800"
              >
                <div className="relative h-56 group">
                  <Image
                    src={profile.image}
                    fill
                    alt={profile.name}
                    unoptimized
                    className="rounded-t-2xl  object-left-bottom "
                  />
                  <div className="h-full w-full group-hover:opacity-100 opacity-0 bg-gradient-to-b from-white/0 to-black/50 absolute rounded-t-2xl"></div>
                </div>
                <p className="text-xl font-cherry text-center  my-2">
                  {profile.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:mx-6 mt-10 font-cherry"
        >
          Experiences
        </motion.h1>
        <div className="lg:mx-6 grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-3 gap-10 my-5">
          {experiences?.map((experience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className=" border rounded-2xl hover:-translate-y-3 transition-all duration-800"
            >
              <div className="relative h-56 group">
                <Image
                  src={experience.image}
                  fill
                  alt={experience.name}
                  priority
                  className="object-cover rounded-t-2xl blur-[2px] "
                />
                <div className="h-full w-full group-hover:opacity-100 opacity-0 bg-gradient-to-b from-white/0 to-black/50 absolute rounded-t-2xl"></div>
              </div>
              <div className="p-3 flex flex-col  border-t-2 border-black">
                <p className="text-xl font-cherry">{experience.name}</p>
                <span className="text-base font-inconsolata">
                  {experience.duration}
                </span>
                <p className="text-lg font-cherry">
                  {experience.organization},{" "}
                  <span className="text-base font-inconsolata">
                    {experience.location}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 my-2">
                  {experience?.hashtags.map((hash, j) => (
                    <span
                      className="border border-purple-400 rounded-3xl px-3 py-1 bg-purple-500/20 text-xs font-medium text-purple-300"
                      key={j}
                    >
                      #{hash}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feats;
