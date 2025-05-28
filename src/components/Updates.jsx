import React from "react";

const Updates = () => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-lg font-semibold leading-none mb-4">Updates</h2>
    <ul className="text-sm text-gray-700 space-y-2">
      <li className="border-b-2 border-[#EFEFEF] pb-2">
        <h3 className="text-sm font-medium text-black pb-2">
          New Admin Access Granted
        </h3>
        <p className="text-[#A0AEC0] text-xs">
          Kunal has been granted admin access to the Travel management module.
        </p>
      </li>
      <li className="border-b-2 border-[#EFEFEF] pb-2">
        <h3 className="text-sm font-medium text-black pb-2">
          Game Result Submission
        </h3>{" "}
        <p className="text-[#A0AEC0] text-xs">
          {" "}
          The result entries for Football match - Team A vs Team B have been
          recorded.
        </p>
      </li>
      <li>
        <h3 className="text-sm font-medium text-black pb-2">
          Player Registration Status
        </h3>{" "}
        <p className="text-[#A0AEC0] text-xs">
          Player registration for the 2024 Spring Soccer League has been
          officially closed.
        </p>
      </li>
      {/* <li className="border-b-2"><strong>New Admin Access Granted</strong> <br />Kunal has been granted admin access to the Travel management module.</li> */}
    </ul>
  </div>
);
export default Updates;
