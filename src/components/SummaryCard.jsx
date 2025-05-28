// import React from "react";

// const SummaryCard = ({ title, count, delta }) => (
//     <div className="bg-white rounded-xl shadow-md p-5 w-full">
//       <h3 className="text-gray-500 text-sm">{title}</h3>
//       <p className="text-3xl font-semibold">{count}</p>
//       <p className="text-green-600 text-sm mt-1">{delta} from last month</p>
//     </div>
//   );
//   export default SummaryCard;


import React from "react";

const SummaryCard = ({ title, count, delta }) => (
  <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 w-full">
    <h3 className="text-gray-500 text-sm sm:text-base">{title}</h3>
    <p className="text-2xl sm:text-3xl font-semibold mt-1">{count}</p>
    <p className="text-green-600 text-sm mt-1">{delta} from last month</p>
  </div>
);

export default SummaryCard;
