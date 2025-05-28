import React from 'react';
import { FaPlus, FaMapMarkerAlt } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ActionCard from "../components/ActionCard";
import Updates from "../components/Updates";
import ManageModuleAdminCard from "../components/ManageModuleAdminCard";

const VenueDashboard = () => {
  return (
    <div className="flex min-h-screen p-4">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="bg-white md:rounded-xl md:shadow-lg p-6">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm text-gray-500 mb-2 mt-4">
            Home <span className="mx-1">›</span>{" "}
            {/* <span className="text-purple-700 font-semibold">Module Admin</span> */}
          </nav>
          <h1 className="text-2xl font-bold mb-6">Venue Management</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <SummaryCard title="Total Cluster" count="15" delta="+4" />
            <SummaryCard title="Total Venues" count="15" delta="+4" />
            <SummaryCard title="Total Facilities" count="15" delta="+4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-6">
            <ActionCard
              icon={<FaPlus className='h-8 w-12 p-2 rounded-md bg-gradient-to-r from-[#7942D1] to-[#2A1647]'  />}
              title="Create Cluster"
              description="Add new venues and clusters by importing required data."
              color="bg-[#F8F4FF]"
            />
            <ActionCard
              icon={<FaMapMarkerAlt className='h-8 w-12 p-2 rounded-md bg-gradient-to-r from-[#F0CE30] to-[#FDB620]' />}
              title="Create Venue"
              description="Calculate the number of vehicles based on total travelers."
              color="bg-[#FFF7E5]"
            />
            {/* <div className="md:col-span-1 md:row-span-2"> */}
              <Updates />
            {/* </div> */}
            <div className="col-span-1 md:col-span-2">
              <ManageModuleAdminCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDashboard;
