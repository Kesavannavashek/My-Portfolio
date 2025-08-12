import React from "react";
import { motion } from "motion/react";

const AboutMe = () => {
    console.log("motion",motion);
  
  let bulletinStyle =
    "before:content-['•'] font-inconsolata before:mr-2 before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-[#6f6cde] before:to-[#ed24df]";

  return (
    <div className="lg:mx-18 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-cherry font-black text-5xl text-center my-8"
      >
        About Me
      </motion.h1>
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:m-6">
          <motion.div className="lg:w-3/5 font-inconsolata">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut",delay:0.1 }}
              className=" text-justify lg:text-left border-2 rounded-3xl p-4 m-5 text-lg bg-black/20 backdrop-blur-xs"
            >
              Hey there! I’m recently Graduated with a Bachelor's in Computer
              Science, I’ve built a strong foundation in software development,
              problem-solving, and core computer science principles. My academic
              experience has shaped the way I approach technical challenges,
              with a focus on clean code and efficient architecture.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut",delay:0.1 }}
              className="text-justify lg:text-left border-2 rounded-3xl p-4 m-5 text-lg bg-black/20 backdrop-blur-xs"
            >
              As a Full Stack Developer, I specialize in both front-end and
              back-end technologies and have hands-on experience using Git for
              version control. I’m passionate about building high-performance,
              secure, and scalable web applications, and I’m always eager to
              contribute my skills to innovative and collaborative teams.
            </motion.p>
          </motion.div>

          <div className=" flex lg:w-2/5 lg:justify-around justify-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut",delay:0.1 }}
              className="flex w-5/12 flex-col items-center gap-3 border-2 rounded-3xl
            p-4 bg-black/10 backdrop-blur-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-8 "
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6f6cde" />
                    <stop offset="100%" stopColor="#ed24df" />
                  </linearGradient>
                </defs>
                <path
                  stroke="url(#grad)"
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h2 className="font-cherry text-lg lg:text-2xl text-center">
                Web Development
              </h2>
              <p className="font-inconsolata text-justify lg:mx-2">
                Building scalable web apps using Next.js, React, Node.js, and
                Spring Boot, with a focus on performance, security, and clean
                code.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex w-5/12 flex-col items-center gap-3 border-2 rounded-3xl
            p-4 bg-black/10 backdrop-blur-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-8"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6f6cde" />
                    <stop offset="100%" stopColor="#ed24df" />
                  </linearGradient>
                </defs>
                <path
                  stroke="url(#grad)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                />
              </svg>
              <h2 className="font-cherry text-lg lg:text-2xl text-center">
                Problem Solving
              </h2>
              <p className="font-inconsolata text-justify">
                Solved challenges on LeetCode, HackerRank, and Geeks for Geeks
                to sharpen my algorithmic thinking and coding efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-8 mx-6 lg:mx-13 mt-10 lg:mt-0 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=""
        >
          <div className=" flex justify-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#grad"
              className="size-8"
            >
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6f6cde" />
                <stop offset="100%" stopColor="#ed24df" />
              </linearGradient>
              <path
                stroke="url(#grad)"
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                clipRule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
            <h2 className="font-cherry text-2xl text-center">
              Always Evolving
            </h2>
          </div>
          <ul className="ml-11 my-3 list-none space-y-2">
            <li className={bulletinStyle}>
              Embracing new tools and ideas to stay ahead of the curve.
            </li>
            <li className={bulletinStyle}>
              Seeking challenges that push my skills beyond comfort zones.
            </li>
            <li className={bulletinStyle}>
              Continuously refining my craft through learning and practice.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className=" flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6f6cde" />
                <stop offset="100%" stopColor="#ed24df" />
              </linearGradient>
              <path
                stroke="url(#grad)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <h2 className="font-cherry text-2xl text-center">
              Detail Oriented
            </h2>
          </div>
          <ul className="ml-11 my-3 list-none space-y-2">
            <li className={bulletinStyle}>
              Ensuring every pixel, line, and element aligns with precision.
            </li>
            <li className={bulletinStyle}>
              Spotting inconsistencies others might overlook.
            </li>
            <li className={bulletinStyle}>
              Delivering polished work that reflects care and intention.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className=" flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6f6cde" />
                <stop offset="100%" stopColor="#ed24df" />
              </linearGradient>
              <path
                stroke="url(#grad)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <h2 className="font-cherry text-2xl text-center">
              Collaboration Over Competition
            </h2>
          </div>
          <ul className="ml-11 my-3 list-none space-y-2">
            <li className={bulletinStyle}>
              Thriving in team settings where diverse voices are valued.
            </li>
            <li className={bulletinStyle}>
              Building solutions through shared creativity and respect.
            </li>
            <li className={bulletinStyle}>
              Celebrating collective success over individual credit.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className=" flex justify-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6f6cde" />
                <stop offset="100%" stopColor="#ed24df" />
              </linearGradient>
              <path
                stroke="url(#grad)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>

            <h2 className="font-cherry text-2xl text-center">
              Lifelong Builder
            </h2>
          </div>
          <ul className="ml-11 my-3 list-none space-y-2">
            <li className={bulletinStyle}>
              Turning concepts into tangible, functional creations.
            </li>
            <li className={bulletinStyle}>
              Experimenting with projects that challenge conventional thinking.
            </li>
            <li className={bulletinStyle}>
              Crafting digital experiences that stand the test of time.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
