import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const circleBackgroundColor = isHovered ? "#4C51BF" : "#1A202C";
  const textColor = isHovered ? "#1A202C" : "#FFFFFF";

  return (
    <div
      className={`text-center ${textColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="h-[25vh] aspect-square rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.2 }} // Increase the scale on hover
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="rounded-full w-full h-full flex items-center justify-center"
          style={{ backgroundColor: circleBackgroundColor }}
        >
          <motion.div
            className={`text-center ${isHovered ? "text-black" : "text-white"}`}
            style={{ fontSize: "4rem" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bubble;
