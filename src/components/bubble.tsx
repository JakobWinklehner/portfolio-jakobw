import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";

interface BubbleProps {
  color: string;
  icon: React.ReactNode;
}

const Bubble: React.FC<BubbleProps> = ({ color, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const circleBackgroundColor = isHovered ? "white" : "black";
  const textColor = isHovered ? "black" : "white";
  const borderColor = isHovered ? "transparent" : "white";

  return (
    <div
      className={`text-center ${textColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="h-[25vh] aspect-square rounded-full border-8 flex items-center justify-center"
        style={{ borderColor: borderColor }}
        whileHover={{ scale: 1.2 }} // Increase the scale on hover
      >
        <motion.div
          className="rounded-full w-full h-full flex items-center justify-center"
          style={{ backgroundColor: circleBackgroundColor }}
        >
          <motion.div
            className={`text-center ${isHovered ? "text-black" : "text-white"}`}
            style={{ fontSize: "4rem" }}
          >
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bubble;
