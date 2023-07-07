"use client";
import Bubble from "@/components/bubble";
import { motion } from "framer-motion";
import { BiLogoJava } from "react-icons/bi";

import Spline from "@splinetool/react-spline";

import { Suspense } from "react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { SiAdobephotoshop } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { About } from "@/components/about";

{
  /*import Spline from "./room_relaxing_copy_copy.spline"; */
}

const skills = [
  {
    icon: <BiLogoJava size={120} />,
    cardTitle: "Java",
    cardDescription:
      "Java is a widely-used, object-oriented programming language known for its platform independence and versatility in building applications for diverse environments.",
  },
  {
    icon: <TbBrandCSharp size={120} />,
    cardTitle: "C#",
    cardDescription:
      "C# is a powerful, modern programming language developed by Microsoft, commonly used for building Windows applications, web services, and games.",
  },
  {
    icon: <SiAdobephotoshop size={120} />,
    cardTitle: "Photoshop",
    cardDescription:
      "Professional image editing software for graphic design, photo editing, and digital art with a wide range of tools and features.",
  },
  {
    icon: <FiFigma size={120} />,
    cardTitle: "Figma",
    cardDescription:
      "Cloud-based collaborative design tool for creating, prototyping, and collaborating on user interfaces and digital designs in real-time.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24">
      <div className="flex items-center h-screen">
        <div>
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-full h-40 w-40 p-1 bg-gradient-to-br from-[#772f94] to-cyan-600"
            >
              <img
                className="h-full w-full object-cover border-4 border-black rounded-full"
                src="https://avatars.githubusercontent.com/u/58228313?v=4"
                alt="Profile Picture"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mt-10 text-cyan-300"
          >
            Hey there,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-8xl font-bold mt-2"
          >
            I&apos;m Jakob.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl mt-6 text-gray-400"
          >
            I&apos;m a software developer
          </motion.p>

          <div className="pt-6" style={{ display: "flex" }}>
            <Link href="https://github.com/SturzGefahr123">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <AiFillGithub size={60} />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/jakob-winklehner-43476a228/">
              <div className="pl-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <BsLinkedin size={60} />
                </motion.div>
              </div>
            </Link>
          </div>
        </div>

        {/*}
        <Spline
          scene="../room_relaxing_copy_copy.spline"
          className="absolute !w-1/2 h-screen right-0 top-0 "
  />*/}
      </div>
      <div className="h-screen flex items-center">
        <About />
      </div>
      <div className="h-screen flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-6xl font-bold w-full text-center"
          >
            My Skills
          </motion.div>
          <div className="text-2xl text-center pt-6 pb-20 text-gray-500">
            (Click the bubbles for more info)
          </div>

          <ul className="text-4xl flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center w-[70%] gap-x-12">
              {skills.map((skill) => (
                <Bubble key={crypto.randomUUID()} {...skill} />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
}
