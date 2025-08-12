"use client";
import React, { FormEvent, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    toast
      .promise(
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            form.current,
            {
              publicKey: process.env.NEXT_PUBLIC_API_KEY!,
            }
          )
          .then(() => {
            form.current?.reset();
          }),
        {
          loading: "Sending Your Message..",
          success: <b>Message Sent Successfully..</b>,
          error: <b>Error Occurred...</b>,
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const gradientMap: Record<string, string> = {
    red:"to-red-700 shadow-red-700",
    blue: "to-blue-700 shadow-blue-700",
    green: "to-green-700 shadow-green-700",
    yellow: "to-yellow-700 shadow-yellow-700",
  };
  const socials = [
    {
      icon: "/github.svg",
      link: "https://github.com/Kesavannavashek",
      color: "green",
    },
    {
      icon: "/linkedin.svg",
      link: "https://www.linkedin.com/in/kesavan-m-1111191a3",
      color: "red",
    },
    // {
    //   icon: "/leetcode.svg",
    //   link: "https://leetcode.com/u/Kesavan_m_07/",
    //   color: "yellow-700",
    // },
    // {
    //   icon: "/hackerrank.svg",
    //   link: "https://www.hackerrank.com/profile/kesavannavi77",
    //   color: "green-700",
    // },
  ];

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-cherry font-bold text-center lg:my-4 my-3"
      >
        Reach Out
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg cursor-none text-center font-inconsolata my-2"
      >
        Let’s connect, whether you have a project idea, collaboration in mind,
        or just want to say hello, I’d love to hear from you.
      </motion.p>
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-20 items-center lg:items-start">
        <div className="lg:w-[30%] w-full md:w-[70%] my-5 rounded-2xl border p-4 backdrop-blur-xs">
          <motion.div className="flex flex-col gap-8 items-center justify-center lg:justify-start ">
            <h1 className="text-3xl font-cherry mt-3">Socials</h1>
            <div className="flex gap-20 items-center justify-center w-full">
              {socials?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0, delay: i * 0.1 }}
                  className={`bg-gradient-to-br from-white ${
                    gradientMap[item.color]
                  } border cursor-none p-3 rounded-2xl hover:scale-105 transition duration-500 hover:shadow-[0px_0px_40px]`}
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
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="border p-4 w-full sm:w-[80%] md:w-[80%] lg:w-5/12 rounded-2xl my-5 backdrop-blur-xs "
        >
          <h1 className="text-3xl font-cherry mt-3 mb-5">Send Message</h1>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name + Email in one row */}
            <div className="flex gap-4">
              <div className="flex flex-col lg:w-52 w-24 md:w-64">
                <label htmlFor="name" className="text-lg cursor-none">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border rounded-lg py-2 px-3 transition-all duration-200  focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <label htmlFor="email" className="text-lg cursor-none">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border rounded-lg py-2 px-3 w-full transition-all duration-200  focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-lg cursor-none">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="border rounded-lg py-2 px-3 transition-all duration-200  focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
              />
            </div>
            {/* Message textarea */}
            <div>
              <label htmlFor="message" className="text-lg cursor-none">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full border rounded-lg py-2 px-3 h-72 transition-all duration-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-xl disabled:hover:bg-gray-900 disabled:hover:shadow-none disabled:hover:scale-100 text-center my-auto cursor-none px-4 py-2 border hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-500 hover:shadow-[0_0_15px_] shadow-purple-500"
              >
                {!isSending ? "Send Message" : "Sending"}

                {!isSending ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 inline ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                ) : (
                  <div className="inline-flex items-center w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ml-4 align-middle" />
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactMe;
