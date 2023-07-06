import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  icon: React.ReactNode;
  isCardOpen: boolean;
  setIsCardOpen: (isOpen: boolean) => void;
  cardTitle: string;
  cardDescription: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  isCardOpen,
  setIsCardOpen,
  cardTitle,
  cardDescription,
}) => {
  const handleBubbleClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <>
      {isCardOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center"
        >
          <div className="min-w-[800px] min-h-[500px] max-w-5xl mx-auto bg-white rounded-lg p-8 relative flex flex-col">
            <div className="flex flex-col h-full">
              <div className="flex justify-between mb-6">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleBubbleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex grow h-full items-center">
                <div className="flex items-center justify-center pr-36 text-black flex-shrink-0">
                  {icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-black font-bold">{cardTitle}</h1>
                  <p className="text-gray-600 pt-2">{cardDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Card;
