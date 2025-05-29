import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaLayerGroup,
  FaBuilding,
  FaFutbol,
  FaMapMarkedAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  // Auto-close on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  return (
    <>
      {/* Background Overlay for mobile */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
      )}

      {/* Sidebar wrapper */}
      <div className="relative flex">
        {/* Hamburger Menu (Mobile Only) - Now placed under profile */}
        <div className="absolute left-86 top-17 md:hidden mb-4">
          <button
            id="mobileMenuBtn"
            className="bg-purple-600 text-white p-2 rounded-md"
            onClick={toggleMobileSidebar}
          >
            <FaBars />
          </button>
        </div>
        <aside
          ref={sidebarRef}
          className={`
            ${isCollapsed ? "w-0" : "w-64"}
            fixed top-0 md:left-0 h-screen md:h-auto z-40 bg-[#f4f4f6] overflow-hidden
            transition-transform duration-300 ease-in-out
            md:translate-x-0 
            ${
              isMobileOpen
                ? "translate-x-0 right-0"
                : "translate-x-full right-0"
            } 
            md:static
          `}
        >
          <div className="px-4 py-5 md:px-0 md:py-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
              <img src="/vms_logo.webp" alt="Logo" className="h-6" />
            </Link>

            <div className="flex items-center space-x-2 mb-6 mt-8">
              <img
                src="/images.webp"
                alt="Admin"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Venue Management
                </h4>
                <p className="text-xs text-gray-500">gtccadmin@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm px-2 py-2 text-[#3F3F46B2] hover:text-[#7a3bf5] rounded-md">
              Platform
            </div>

            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                to="/module-user"
                className="flex items-center gap-2 text-sm px-2 py-2 w-[90%] text-[#3F3F46B2] hover:bg-white hover:text-[#7a3bf5] rounded-lg hover:shadow "
              >
                <FaUsers />
                <span>Module Users</span>
              </Link>
              <Link
                to="/cluster"
                className="flex items-center gap-2 text-sm px-2 py-2 w-[90%] text-[#3F3F46B2] hover:bg-white hover:text-[#7a3bf5] rounded-lg hover:shadow "
              >
                <FaLayerGroup />
                <span>Clusters</span>
              </Link>
              <Link
                to="/venue"
                className="flex items-center gap-2 text-sm px-2 py-2 w-[90%] text-[#3F3F46B2] hover:bg-white hover:text-[#7a3bf5] rounded-lg hover:shadow "
              >
                <FaBuilding />
                <span>Venues</span>
              </Link>
              <Link
                to="/facilities"
                className="flex items-center gap-2 text-sm px-2 py-2 w-[90%] text-[#3F3F46B2] hover:bg-white hover:text-[#7a3bf5] rounded-lg hover:shadow "
              >
                <FaFutbol />
                <span>Sports Facilities</span>
              </Link>
              <Link
                to="/zones"
                className="flex items-center gap-2 text-sm px-2 py-2 w-[90%] text-[#3F3F46B2] hover:bg-white hover:text-[#7a3bf5] rounded-lg hover:shadow "
              >
                <FaMapMarkedAlt />
                <span>Zones</span>
              </Link>
            </nav>

            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/images.webp"
                  alt="Admin"
                  className="h-8 w-8 rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Admin
                  </div>
                  <div className="text-xs text-gray-500">
                    gtccadmin@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 md:px-4 md:py-5 ">
              <div className="bg-gradient-to-br from-[#7942D1] to-[#2A1647] rounded-xl p-6 text-center relative shadow-lg w-52 my-24">
                {/* Icon Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full shadow-md">
                  <FaUsers className="w-10 h-10 p-2 rounded-full text-white bg-gradient-to-r from-[#7942D1] to-[#2A1647]" />
                </div>

                {/* Title */}
                <h3 className="text-white mt-6 mb-6 text-lg leading-snug">
                  Manage Module
                  <br />
                  Users
                </h3>

                {/* Button */}
                <Link
                  to="/module-user"
                  className="bg-white text-[#2A1647] font-medium py-2 px-10 rounded-lg text-sm hover:bg-gray-100 transition"
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Collapse Toggle (Desktop only) */}
        <button
          onClick={toggleSidebar}
          className="hidden md:block absolute top-20 z-50 bg-purple-200 border-none rounded-full p-1 hover:bg-purple-300 transition-all duration-300"
          style={{
            left: isCollapsed ? "-1rem" : "15rem",
          }}
        >
          <div className="text-purple-600 text-xl">
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </div>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
