import React from "react";
import { MdSportsTennis } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { FaSkiing } from "react-icons/fa";

export const About = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-2/3">
        <div className="text-6xl font-bold">About me</div>
        <div className="text-2xl pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam
          adipisci, fugit officia reprehenderit modi natus eaque atque aliquam
          ex odit deserunt! Suscipit accusamus dignissimos beatae excepturi
          tempora, a cum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. In ullam praesentium voluptatum quas ipsum delectus quia
          officiis temporibus iure qui repellat cumque minima porro nobis fuga
          numquam, vitae ratione inventore.
        </div>
        <div className="text-4xl pt-10 font-bold">Hobbies:</div>

        <div className="flex pt-6">
          <div className="rounded-full h-20 w-20 bg-white flex justify-center items-center">
            <IoIosFitness size={50} color="black" />
          </div>
          <div className="w-6" />
          <div className="rounded-full h-20 w-20 bg-white flex justify-center items-center">
            <MdSportsTennis size={50} color="black" />
          </div>
          <div className="w-6" />
          <div className="rounded-full h-20 w-20 bg-white flex justify-center items-center">
            <FaSkiing size={50} color="black" />
          </div>
        </div>
      </div>
      <div className="w-1/3 ps-36 flex items-center">
        <div className="rounded-full h-80 w-80 p-1 bg-gradient-to-bl from-[#772f94] to-cyan-600 flex justify-center items-center">
          <img
            src="/picofme2.png"
            className="w-76 h-76 object-cover border-8 border-black rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
