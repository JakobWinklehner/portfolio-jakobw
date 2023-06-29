import React from "react";
import { AiFillHtml5 } from "react-icons/ai";

interface BubbleProps {
  color: string;
  icon: React.ReactNode;
}

const Bubble: React.FC<BubbleProps> = ({ color, icon }) => {
  return (
    <div
      style={{
        color,
      }}
    >
      <div className="h-[25vh] aspect-square rounded-full border-8 border-white grid place-items-center">
        {icon}
      </div>
    </div>
  );
};

export default Bubble;
