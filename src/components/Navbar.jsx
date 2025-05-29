
import React, { useState, useRef, useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white md:bg-[#f4f4f6] px-6 h-7 flex items-center justify-between mb-4">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Logo (always shown) */}
        <Link to="/" className="flex items-center space-x-2 md:hidden">
          {/* <Link to="/"> */}
          <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
          <img src="/vms_logo.webp" alt="Logo" className="h-6" />
        </Link>
        {/* <img src="/vms_logo.webp" alt="Logo" className="h-6 md:hidden" /> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-sm text-[#3F3F46B2] hover:text-purple-700"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-sm text-[#3F3F46B2] hover:text-purple-700"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-sm text-[#3F3F46B2] hover:text-purple-700"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="ml-4 px-4 py-1 bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white rounded-full text-sm font-semibold shadow"
          >
            Contact us
          </a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div ref={searchRef} className="relative">
          {/* Desktop Search Input */}
          <div className="hidden md:block relative focus-within:border-purple-600 border border-gray-300 rounded-full transition">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white rounded-full px-4 py-1 text-sm w-64 pl-10 focus:outline-none"
            />
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Mobile Search Toggle */}
          <div className="md:hidden">
            {searchOpen ? (
              <div className="relative border border-gray-300 rounded-full focus-within:border-purple-600 transition">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  className=" rounded-full px-4 py-1 text-sm w-44 pl-10 transition-all duration-300 focus:outline-none"
                />
                <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-600 hover:text-purple-700"
              >
                <FaSearch className="text-lg mt-2" />
              </button>
            )}
          </div>
        </div>

        {/* Settings Icon - Hidden on Mobile */}
        <FaCog className="hidden md:block text-[#A0AEC0] text-lg" />

        {/* Bell Icon - Hidden on Mobile */}
        <FaBell className="hidden md:block text-[#A0AEC0] text-lg" />

        {/* Profile Avatar */}
        <img
          src="https://i.pravatar.cc/32"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;
