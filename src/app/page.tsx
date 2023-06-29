"use client";
import Bubble from "@/components/bubble";
import { motion } from "framer-motion";

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
              className="rounded-full h-40 w-40 p-1 bg-gradient-to-br from-[#ff0000] to-cyan-600"
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
        </div>
      </div>
      <div className="h-screen flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-6xl font-bold w-full text-right"
          >
            Skills
          </motion.div>

          <ul className="text-4xl mt-16 text-gray-600">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            {/* Add more skills as needed */}
            <Bubble />
          </ul>
        </div>
      </div>
    </main>
  );
}
