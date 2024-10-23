import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({
  image,
  subtitle,
  title,
  rating,
  reviews,
  price,
  oldPrice,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-5 w-[300px] ">
      <img
        src={image}
        alt="Course"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="text-sm text-gray-500">{subtitle}</h4>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <button className="bg-[#FF006B] p-2 flex gap-2 items-center rounded-md">
          <h1 className="text-white">View More</h1>
          <FiArrowRight color="white" size={20} />
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;
