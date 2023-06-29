"use client";
import Bubble from "@/components/bubble";
import { motion } from "framer-motion";
import { BiLogoJava } from "react-icons/bi";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    color: "yellow",
    icon: <BiLogoJava size={120} />,
  },
  {
    color: "blue",
    icon: <div></div>,
  },
  {
    color: "red",
    icon: <div></div>,
  },
  {
    color: "blue",
    icon: <div></div>,
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
            I'm Jakob.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl mt-6 text-gray-400"
          >
            I'm a software developer
          </motion.p>
          <Link href="https://github.com/SturzGefahr123">
            <AiFillGithub size={80} />
          </Link>
        </div>
        {/*
        <motion.div
          className="absolute !w-1/2 h-screen top-0 right-0 grid place-items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/iauwbdizawfiuwabdawiuawdiubawdiwi.png"
            alt=""
            fill
            className="object-contain w-full !h-[50vh] relative"
          />
  </motion.div>*/}
        {
          <Spline
            scene="https://prod.spline.design/QT2LktMDXwhJ3wff/scene.splinecode"
            className="absolute !w-1/2 h-screen right-0 top-0 "
          />
        }
      </div>
      <div className="h-screen flex items-center">
        <div className="w-full">
          <ul className="text-4xl flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-[70%] gap-x-12">
              {skills.map((skill) => (
                <Bubble {...skill} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-6xl font-bold w-full text-right"
            >
              Skills
            </motion.div>
          </ul>
        </div>
      </div>
    </main>
  );
}
