import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaChevronDown, FaChevronUp, FaEdit, FaTrash } from "react-icons/fa";
import CreateClusterModal from "../components/CreateClusterModal";
import { GoPlus } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

const Cluster = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const clusters = [
    {
      clusterCode: "C101",
      clusterName: "North Zone",
      supervisorName: "John Doe",
      venue: "Stadium A",
      capacity: 200,
    },
    {
      clusterCode: "C102",
      clusterName: "South Zone",
      supervisorName: "Jane Smith",
      venue: "Hall B",
      capacity: 150,
    },
    {
      clusterCode: "C102",
      clusterName: "South Zone",
      supervisorName: "Jane Smith",
      venue: "Hall B",
      capacity: 150,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="flex min-h-screen p-4">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="bg-white rounded-xl md:shadow-lg p-4 sm:p-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-2 mt-4">
            Home <span className="mx-1">›</span>{" "}
            <span className="text-purple-700 font-semibold">My Clusters</span>
          </nav>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Cluster</h1>

          {/* Top Cards */}

          <div className="w-full flex  mt-4">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
              {/* Total Clusters Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 w-full md:w-1/2 h-32 shadow flex flex-col justify-between">
                <p className="text-sm text-gray-600">Total Clusters</p>
                <p className="text-2xl font-bold text-purple-800">12</p>
                <p className="text-green-500 text-sm">+4 from last month</p>
              </div>

              {/* Create Cluster Button */}
              <div
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-[#F0CE30] to-[#FCB51F] rounded-[14px] p-6 w-full md:w-1/2 h-32 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center mb-2">
                    <FiPlus className="text-white" size={24} />
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base">
                    Create Cluster
                  </p>
                </div>
              </div>

              {/* Modal */}
              <CreateClusterModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
              />
            </div>
          </div>

          {/* Cluster List Table */}
          <div className="bg-white mt-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                All Clusters
              </h3>
              <button className="md:hidden bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm">
                Export Data
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              {/* Search Box */}
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-1/3 px-4 py-2 mb-4 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button className="hidden md:block bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Export Data
              </button>
            </div>

            <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200">
                    <th className="p-2">Cluster Code</th>
                    <th className="p-2">Cluster Name</th>
                    <th className="p-2">Cluster Supervisor</th>
                    <th className="p-2">Venue</th>
                    <th className="p-2">Capacity</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clusters.map((cluster, index) => (
                    <tr key={index} className="hover:bg-gray-50 text-gray-700">
                      <td className="p-2">{cluster.clusterCode}</td>
                      <td className="p-2">{cluster.clusterName}</td>
                      <td className="p-2">{cluster.supervisorName}</td>
                      <td className="p-2">{cluster.venue}</td>
                      <td className="p-2">{cluster.capacity}</td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          {/* View Button */}
                          <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white p-3 rounded-lg shadow-md hover:opacity-90 transition">
                            <FiEye size={16} />
                          </button>

                          {/* Edit Button */}
                          <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white p-3 rounded-lg shadow-md hover:opacity-90 transition">
                            <FiEdit2 size={16} />
                          </button>

                          {/* Delete Button */}
                          <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white p-3 rounded-lg shadow-md hover:opacity-90 transition">
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {clusters.length === 0 && (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center text-gray-400 py-4"
                      >
                        No clusters found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-4">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="flex text-sm text-gray-400 border-b border-gray-300 px-4 py-2">
                  <div className="w-1/2">Cluster ID</div>
                  <div className="w-1/2">Cluster Name</div>
                </div>

                {/* Table Rows */}
                {clusters.map((c, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <div key={index} className=" last:border-b-0">
                      {/* Cluster Row */}
                      <div className="flex items-center px-4 py-3 justify-between">
                        {/* Left: Cluster ID */}
                        <div className="w-1/2 text-sm text-gray-800">
                          {c.clusterCode}
                        </div>

                        {/* Right: Image + Name + Toggle */}
                        <div className="w-1/2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={c.imageUrl || "/Play7.jpg"}
                              alt="cluster"
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm text-gray-700">
                              {c.clusterName}
                            </span>
                          </div>
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

                      {/* Expanded Row */}

                      {isExpanded && (
                        <div className="grid grid-cols-2 gap-2 px-4 py-2 space-y-6 text-gray-700">
                          <div className="text-gray-500">Cluster Supervisor:</div>
                          <div className="text-gray-800">
                            {c.supervisorName}
                          </div>

                          <div className="text-gray-500">Venue:</div>
                          <div className="text-purple-600 underline cursor-pointer">
                            View
                          </div>

                          <div className="text-gray-500">Capacity:</div>
                          <div className="text-gray-800">{c.capacity}</div>

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

export default Cluster;
