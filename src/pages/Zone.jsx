import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FiPlus, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import CreateZoneModal from "../components/CreateZoneModal";
import ComingSoonModal from "../components/ComingSoonModal";

const Zone = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const zones = [
    {
      zoneCode: "Z101",
      zoneName: "North Wing",
      clusterName: "North Cluster",
      supervisor: "Alice Brown",
      capacity: 300,
    },
    {
      zoneCode: "Z102",
      zoneName: "South Wing",
      clusterName: "South Cluster",
      supervisor: "Bob Green",
      capacity: 250,
    },
  ];

  const filteredZones = zones.filter((zone) =>
    [zone.zoneCode, zone.zoneName, zone.supervisor].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex min-h-screen p-4">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="bg-white rounded-xl md:shadow-lg p-4 sm:p-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-2 mt-4">
            Home <span className="mx-1">›</span>{" "}
            <span className="text-purple-700 font-semibold">Zone</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Zone</h1>

          {/* Top Cards */}
          <div className="w-full flex mt-4">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
              {/* Total Zones Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 w-full md:w-1/2 h-32 shadow flex flex-col justify-between">
                <p className="text-sm text-gray-600">Total Zones</p>
                <p className="text-2xl font-bold text-purple-800">
                  {zones.length}
                </p>
                <p className="text-green-500 text-sm">+1 from last month</p>
              </div>

              {/* Create Zone Button */}
              <div
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-[#F0CE30] to-[#FCB51F] rounded-[14px] p-6 w-full md:w-1/2 h-32 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center mb-2">
                    <FiPlus className="text-white" size={24} />
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base">
                    Create Zone
                  </p>
                </div>
              </div>
              <CreateZoneModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
              />
              <ComingSoonModal
                isOpen={exportModalOpen}
                onClose={() => setExportModalOpen(false)}
              />
            </div>
          </div>

          {/* Zone Table */}
          <div className="bg-white mt-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">All Zones</h3>
              <button
                onClick={() => setExportModalOpen(true)}
                className="md:hidden bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm"
              >
                Export Data
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              {/* Search Box */}
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/3 px-4 py-2 mb-4 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button onClick={() => setExportModalOpen(true)} className="hidden md:block bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Export Data
              </button>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200">
                    <th className="p-2">Zone Code</th>
                    <th className="p-2">Zone Name</th>
                    <th className="p-2">Cluster</th>
                    <th className="p-2">Supervisor</th>
                    <th className="p-2">Capacity</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredZones.map((zone, index) => (
                    <tr key={index} className="hover:bg-gray-50 text-gray-700">
                      <td className="p-2">{zone.zoneCode}</td>
                      <td className="p-2">{zone.zoneName}</td>
                      <td className="p-2">{zone.clusterName}</td>
                      <td className="p-2">{zone.supervisor}</td>
                      <td className="p-2">{zone.capacity}</td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white p-3 rounded-lg shadow-md hover:opacity-90 transition">
                            <FiEye size={16} />
                          </button>
                          <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white p-3 rounded-lg shadow-md hover:opacity-90 transition">
                            <FiEdit2 size={16} />
                          </button>
                          <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white p-3 rounded-lg shadow-md hover:opacity-90 transition">
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="flex text-sm text-gray-400 border-b border-gray-300 px-4 py-2">
                  <div className="w-1/2">Zone ID</div>
                  <div className="w-1/2">Zone Name</div>
                </div>
                {filteredZones.map((z, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <div key={index} className="last:border-b-0">
                      <div className="flex items-center px-4 py-3 justify-between">
                        <div className="w-1/2 text-sm text-gray-800">
                          {z.zoneCode}
                        </div>
                        <div className="w-1/2 flex items-center justify-between">
                          <span className="text-sm text-gray-700">
                            {z.zoneName}
                          </span>
                          <button
                            onClick={() =>
                              setExpandedIndex(isExpanded ? null : index)
                            }
                            className="text-gray-500 ml-2"
                          >
                            <svg
                              className={`w-4 h-4 transform transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="grid grid-cols-2 gap-2 px-4 py-2 space-y-6 text-gray-700">
                          <div className="text-gray-500">Zone Supervisor:</div>
                          <div className="text-gray-800">{z.supervisor}</div>

                          <div className="text-gray-500">Capacity:</div>
                          <div className="text-gray-800">{z.capacity}</div>

                          <div className="text-gray-500">Action:</div>
                          <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white">
                              <FiEye size={16} />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white">
                              <FiEdit2 size={16} />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white">
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Zone;
