import React from "react";
import { IoIosFitness } from "react-icons/io";
import { MdSportsTennis } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { motion } from "framer-motion";

export const Hobbies = () => {
  return (
    <div>
      <div className="flex pt-6">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          className="rounded-full h-20 w-20 bg-white flex justify-center items-center"
        >
          <IoIosFitness size={50} color="black" />
        </motion.div>
        <div className="w-6" />
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          className="rounded-full h-20 w-20 bg-white flex justify-center items-center"
        >
          <MdSportsTennis size={50} color="black" />
        </motion.div>
        <div className="w-6" />
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          className="rounded-full h-20 w-20 bg-white flex justify-center items-center"
        >
          <FaSkiing size={50} color="black" />
        </motion.div>
      </div>
    </div>
  );
};
