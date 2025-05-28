// import React from "react";
// import { MdArrowOutward } from "react-icons/md";

// const ActionCard = ({ icon, title, description, color }) => (
//     <div className={`p-6 rounded-lg ${color} bg-opacity-10`}>
//       <div className="flex justify-between items-center mb-2">
//         <div className={`p-2 rounded-full bg-${color}-500 text-white`}>
//           {icon}
//         </div>
//         <a href="#" className="text-xs text-purple-400 flex items-center space-x-1 underline"><span>View</span> <MdArrowOutward /></a>
//       </div>
//       <h3 className="text-md font-semibold text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
  
//   export default ActionCard;
  

  

import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ActionCard = ({ icon, title, description, color }) => (
  <div className={`rounded-xl p-4 sm:p-6 ${color}`}>
    <div className="flex justify-between items-start mb-3">
      <div className="rounded-lg p-2 bg-white shadow-md">{icon}</div>
      <a
        href="#"
        className="text-xs sm:text-sm text-purple-600 hover:underline flex items-center space-x-1"
      >
        <span>View</span>
        <MdArrowOutward />
      </a>
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

export default ActionCard;
