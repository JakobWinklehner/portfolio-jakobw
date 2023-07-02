import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./card";

interface BubbleProps {
  icon: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
}

const Bubble: React.FC<BubbleProps> = ({
  icon,
  cardDescription,
  cardTitle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBubbleClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  const circleBackgroundColor = isHovered ? "#4C51BF" : "#1A202C";
  const textColor = isHovered ? "#1A202C" : "#FFFFFF";

  return (
    <div>
      <motion.div
        className="h-[25vh] aspect-square rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.05, backgroundColor: "#4C51BF" }} // Increase the scale and change background color on hover
        transition={{ duration: 0.3 }}
        onClick={handleBubbleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }} // Show pointer cursor on hover
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

      {isCardOpen && (
        <Card
          icon={icon}
          isCardOpen={isCardOpen}
          setIsCardOpen={setIsCardOpen}
          cardDescription={cardDescription}
          cardTitle={cardTitle}
        />
      )}
    </div>
  );
};

export default Bubble;
