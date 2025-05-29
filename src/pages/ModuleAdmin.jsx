import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaUserCircle,
} from "react-icons/fa";

const ModuleAdmin = () => {
  const admins = [
    { name: "AccoUser", email: "ken98@yahoo.com" },
    { name: "Failed", email: "carmell@hotmail.com" },
    { name: "Success", email: "Silas22@gmail.com" },
    { name: "Processing", email: "Monserrat44@gmail.com" },
    { name: "Success", email: "Abe456@gmail.com" },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
    setForm({ ...form, photo: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex min-h-screen p-4">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="bg-white rounded-xl md:shadow-lg p-4 sm:p-6">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm text-gray-500 mb-2 mt-4">
            Home <span className="mx-1">›</span>{" "}
            <span className="text-purple-700 font-semibold">Module Admin</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Module Admin
          </h1>

          {/* Form Section */}
          <div className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-4 sm:p-6 mb-6">
            <div
              className="flex justify-between items-center mb-4 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Create Module Admin
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Create users for each module and assign them specific
                  permissions.
                </p>
              </div>
              <div className="text-purple-600 text-xl">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {isOpen && (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
              >
                {/* LEFT COLUMN */}
                <div className="flex flex-col space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  {/* Password */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Enter Confirm Password"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">
                      Select Cluster
                    </label>
                    <select
                      name="cluster"
                      value={form.cluster}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                    >
                      <option value="">Select Cluster</option>
                    </select>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter Email ID"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  {/* Upload Photo */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Upload Photo
                    </label>
                    <div className="border border-dashed border-purple-600 rounded-xl p-4 w-full flex flex-col items-center">
                      <input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/png, image/jpeg"
                        className="hidden"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="photo"
                        className="cursor-pointer relative"
                      >
                        {previewImage ? (
                          <div className="relative">
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="w-24 h-24 rounded-full object-cover"
                            />
                            <div className="absolute top-0 right-0 bg-white rounded-full p-1 shadow">
                              <FaEdit className="text-sm text-gray-700" />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <FaUserCircle className="text-[88px] text-gray-400 mb-2" />
                            <div className="absolute top-0 right-0 bg-white rounded-full p-1 shadow">
                              <FaEdit className="text-sm text-gray-700" />
                            </div>
                          </div>
                        )}
                      </label>
                      <button
                        type="button"
                        onClick={handleDeleteImage}
                        className="text-xs text-purple-600 underline mt-2"
                      >
                        Delete
                      </button>
                      <p className="text-[10px] text-center text-gray-400 mt-1">
                        Allowed file types: png, jpg, jpeg. <br />
                        Allowed file size less than 1mb
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">
                      Select Venue
                    </label>
                    <select
                      name="venue"
                      value={form.venue}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                    >
                      <option value="">Select Venue</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-8 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Create Module Admin
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Table Section */}
          <div className="bg-white mt-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Module Admin
              </h3>
              <button className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm">
                Export Data
              </button>
            </div>

            <div className="hidden md:block overflow-x-auto border border-[#E4E4E7] rounded-lg">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 border-b border-[#E4E4E7]">
                    <th className="p-2 whitespace-nowrap">Name</th>
                    <th className="p-2 whitespace-nowrap">Email</th>
                    <th className="p-2 whitespace-nowrap">Phone Number</th>
                    <th className="p-2 whitespace-nowrap">Permissions</th>
                    <th className="p-2 whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-2">{admin.name}</td>
                      <td className="p-2">{admin.email}</td>
                      <td className="p-2">9876543210</td>
                      <td className="p-2 text-purple-600 underline cursor-pointer">
                        View Permissions
                      </td>
                      <td className="p-2">
                        <button className="bg-[#7942D1] text-white px-2 py-1 rounded text-xs mr-2">
                          User
                        </button>
                        <button className="bg-[#7942D1] text-white px-2 py-1 rounded text-xs">
                          Password
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-4">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="flex text-sm text-gray-400 border-b border-gray-300 px-4 py-2">
                  <div className="w-1/2">Name</div>
                  <div className="w-1/2">Email</div>
                </div>

                {/* Table Rows */}
                {admins.map((admin, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <div key={index} className=" last:border-b-0">
                      {/* Cluster Row */}
                      <div className="flex items-center px-4 py-3 justify-between">
                        {/* Left: Cluster ID */}
                        <div className="w-1/2 text-sm text-gray-800">
                          {admin.name}
                        </div>

                        {/* Right: Image + Name + Toggle */}
                        <div className="w-1/2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {/* <img
                              src={admin.imageUrl || "/Play7.jpg"}
                              alt="cluster"
                              className="w-6 h-6 rounded-full"
                            /> */}
                            <span className="text-sm text-gray-700">
                              {admin.email}
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
                          <div className="text-gray-500">Phone Number:</div>
                          <div className="text-gray-800">0987654321</div>

                          <div className="text-gray-500">Permissions:</div>
                          <div className="text-gray-800">
                            <span className="text-purple-600 underline cursor-pointer">
                              View Permissions
                            </span>
                          </div>

                          <div className="text-gray-500">Action:</div>
                          <div className="flex gap-2">
                            <button className="bg-[#7942D1] text-white h-6 px-2 py-1 rounded text-xs mr-2">
                              User
                            </button>
                            <button className="bg-[#7942D1] text-white h-6 px-2 py-1 rounded text-xs">
                              Password
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="md:hidden space-y-4">
              {admins.map((admin, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-white border rounded-lg p-4 shadow-sm"
                  >
                    Top row: Name, Email, Toggle Button
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-sm text-gray-800">
                          {admin.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {admin.email}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : index)
                        }
                        className="text-gray-500 focus:outline-none"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
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

                    Expanded Details
                    {isExpanded && (
                      <div className="mt-3 text-sm text-gray-700 space-y-2">
                        <div>
                          <span className="font-semibold">Phone Number:</span>{" "}
                          0987654321
                        </div>
                        <div>
                          <span className="font-semibold">Permissions:</span>{" "}
                          <span className="text-purple-600 underline cursor-pointer">
                            View Permissions
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-[#7942D1] text-white px-3 py-1 rounded text-xs">
                            User
                          </button>
                          <button className="bg-[#7942D1] text-white px-3 py-1 rounded text-xs">
                            Password
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModuleAdmin;
