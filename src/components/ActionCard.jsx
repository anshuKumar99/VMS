
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ActionCard = ({ icon, title, description, color }) => (
  <div className={`rounded-xl p-4 sm:p-6 ${color}`}>
    <div className="flex justify-between items-start mb-3">
      <div className="rounded-lg text-white mb-2">{icon}</div>
      <a
        href="#"
        className="text-xs sm:text-sm text-purple-600 hover:underline flex items-center space-x-1"
      >
        <span>View</span>
        <MdArrowOutward />
      </a>
    </div>
    <h4 className="text-base sm:text-lg font-semibold text-gray-800 my-2">{title}</h4>
    <p className="text-sm text-[#A0AEC0] mt-1">{description}</p>
  </div>
);

export default ActionCard;
