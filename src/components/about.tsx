import React from "react";
import { Hobbies } from "./hobbies";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Balancer } from "react-wrap-balancer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }, // Delay the container animation
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } }, // Delay the text animation
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } }, // Delay the image animation
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex"
    >
      <div className="flex flex-col w-2/3">
        <motion.div variants={textVariants} className="text-6xl font-bold">
          About me
        </motion.div>
        <motion.div variants={textVariants} className="text-2xl pt-6">
          <Balancer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ipsam adipisci, fugit officia reprehenderit modi natus eaque atque
            aliquam ex odit deserunt! Suscipit accusamus dignissimos beatae
            excepturi tempora, a cum! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. In ullam praesentium voluptatum quas ipsum
            delectus quia officiis temporibus iure qui repellat cumque minima
            porro nobis fuga numquam, vitae ratione inventore.
          </Balancer>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="text-4xl pt-10 font-bold"
        >
          Hobbies:
        </motion.div>

        <motion.div variants={textVariants}>
          <Hobbies />
        </motion.div>
      </div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.8 }} // Delay the image animation
        className="w-1/3 ps-36 flex items-center"
      >
        <div className="rounded-full h-80 w-80 p-1 bg-gradient-to-bl from-[#772f94] to-cyan-600 flex justify-center items-center">
          <img
            src="/picofme2.png"
            className="w-76 h-76 object-cover border-8 border-black rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
