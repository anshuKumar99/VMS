// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import CreateZoneModal from "../components/CreateZoneModal";

// const Zone = () => {
//   const [showModal, setShowModal] = useState(false);

//   const zones = [
//     {
//       id: 1,
//       code: "ZONE001",
//       name: "North Zone",
//       region: "North India",
//     },
//     {
//       id: 2,
//       code: "ZONE002",
//       name: "South Zone",
//       region: "South India",
//     },
//   ];

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-2xl font-bold">Zones</h1>
//             <button
//               onClick={() => setShowModal(true)}
//               className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//             >
//               + Create Zone
//             </button>
//           </div>

//           {/* Table View */}
//           <div className="hidden md:block">
//             <table className="w-full table-auto border-collapse">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border px-4 py-2">Zone Code</th>
//                   <th className="border px-4 py-2">Zone Name</th>
//                   <th className="border px-4 py-2">Region</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {zones.map((zone) => (
//                   <tr key={zone.id}>
//                     <td className="border px-4 py-2">{zone.code}</td>
//                     <td className="border px-4 py-2">{zone.name}</td>
//                     <td className="border px-4 py-2">{zone.region}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile Card View */}
//           <div className="md:hidden space-y-4">
//             {zones.map((zone) => (
//               <div
//                 key={zone.id}
//                 className="border rounded-lg p-4 shadow-sm bg-white"
//               >
//                 <p>
//                   <strong>Code:</strong> {zone.code}
//                 </p>
//                 <p>
//                   <strong>Name:</strong> {zone.name}
//                 </p>
//                 <p>
//                   <strong>Region:</strong> {zone.region}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <CreateZoneModal isOpen={showModal} onClose={() => setShowModal(false)} />
//     </div>
//   );
// };

// export default Zone;


import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FiPlus, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import CreateZoneModal from "../components/CreateZoneModal";

const Zone = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

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
                <p className="text-2xl font-bold text-purple-800">5</p>
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
            </div>
          </div>

          {/* Zone Table */}
          <div className="bg-white mt-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">All Zones</h3>
              <button className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 text-sm">
                Export Data
              </button>
            </div>

            {/* Search Box */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-1/3 px-4 py-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

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
                  {zones.map((zone, index) => (
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
                <div className="flex text-sm font-semibold text-gray-700 bg-gray-50 border-b px-4 py-2">
                  <div className="w-1/2">Zone ID</div>
                  <div className="w-1/2">Zone Name</div>
                </div>
                {zones.map((z, index) => {
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
                        <div className="px-4 py-2 text-sm text-gray-700 space-y-2 bg-gray-50">
                          <div>
                            <span className="text-gray-500">Cluster: </span>
                            <span>{z.clusterName}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Supervisor: </span>
                            <span>{z.supervisor}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Capacity: </span>
                            <span>{z.capacity}</span>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <button className="p-2 rounded-lg bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white">
                              <FiEye size={16} />
                            </button>
                            <button className="p-2 rounded-lg bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white">
                              <FiEdit2 size={16} />
                            </button>
                            <button className="p-2 rounded-lg bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white">
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
