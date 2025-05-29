import React from "react";
import { Link } from "react-router-dom";

const ManageModuleAdminCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-6 w-full">
      <div className="flex flex-col gap-2 max-w-2xl">
        <h3 className="text-lg font-semibold text-gray-800">
          Create And Manage Module Admin
        </h3>
        <p className="text-sm text-gray-500">
          create and manage users for each module type, ensuring clear
          organization and control.
        </p>
        <Link
          to="/ModuleAdmin"
          className="mt-2 inline-block w-fit bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white text-sm px-4 py-2 rounded-md shadow-sm hover:opacity-90 transition"
        >
          Manage
        </Link>
      </div>

      {/* <div className="w-72 hidden md:block"> */}
      <div className="w-72">
        <img
          src="/infoModule.jpg"
          alt="Upload Travel Record"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ManageModuleAdminCard;
