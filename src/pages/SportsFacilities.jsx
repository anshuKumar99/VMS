import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

const sportsFacilitiesData = [
  {
    id: "SF001",
    name: "Football",
    supervisor: "Tarun Uniyal",
    venue: "JLN Stadium",
    capacity: 1026,
    zone: "East",
    image: "/images/football.jpg", // sample path
  },
  // Add more mock data as needed
];

export default function SportsFacilities() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Sports Facilities</h1>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition">
              + Create Facility
            </button>
          </div>

          {/* Stats Box */}
          <div className="mb-6">
            <div className="bg-white p-4 rounded shadow w-60">
              <h2 className="text-lg font-medium">Total Facilities</h2>
              <p className="text-3xl font-bold text-purple-700">132</p>
              <span className="text-green-500 text-sm">+4 from last month</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold">
                  <th className="py-3 px-4">Facility Code</th>
                  <th className="py-3 px-4">Facility Name</th>
                  <th className="py-3 px-4">Facility Supervisor</th>
                  <th className="py-3 px-4">Venue Name</th>
                  <th className="py-3 px-4">Capacity</th>
                  <th className="py-3 px-4">Zone</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {sportsFacilitiesData.map((facility) => (
                  <tr
                    key={facility.id}
                    className="border-b text-sm hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{facility.id}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {facility.name}
                    </td>
                    <td className="py-3 px-4">{facility.supervisor}</td>
                    <td className="py-3 px-4">{facility.venue}</td>
                    <td className="py-3 px-4">{facility.capacity}</td>
                    <td className="py-3 px-4">{facility.zone}</td>
                    <td className="py-3 px-4 flex gap-2 text-purple-700">
                      <button title="View">
                        <FiEye />
                      </button>
                      <button title="Edit">
                        <FiEdit2 />
                      </button>
                      <button title="Delete">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-4 text-sm text-gray-600">
            <button className="px-3 py-1 border rounded mr-2">Previous</button>
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
