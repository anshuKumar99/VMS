// import React from "react";
// import { FaUserCircle, FaCog } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <header className="bg-[#f4f4f6] py-4 px-6 flex items-center justify-between">
//       <nav className="flex items-center space-x-6">
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Dashboard</a>
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Documentation</a>
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Terms & Conditions</a>
//         <a href="#" className="ml-4 px-4 py-1 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-full text-sm font-semibold shadow">
//           Contact us
//         </a>
//       </nav>

//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="border rounded-full px-4 py-1 text-sm w-64"
//         />
//         <FaCog className="text-gray-600 text-lg" />
//         {/* <FaUserCircle className="text-gray-600 text-2xl" /> */}
//         <img src="https://i.pravatar.cc/32" alt="profile" className="w-8 h-8 rounded-full" />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import { CgMenuGridR } from "react-icons/cg";
// import { FaUserCircle, FaCog, FaSearch , FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const searchRef = useRef(null);

//    // Close search bar when clicking outside (mobile only)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchRef.current && !searchRef.current.contains(e.target)) {
//         setSearchOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-[#f4f4f6] py-4 px-6 flex items-center justify-between relative">
//       {/* Desktop Nav */}
//       <nav className="hidden md:flex items-center space-x-6">
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Dashboard</a>
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Documentation</a>
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Terms & Conditions</a>
//         <a href="#" className="ml-4 px-4 py-1 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-full text-sm font-semibold shadow">
//           Contact us
//         </a>
//       </nav>

//       {/* Search & Icons */}
//       <div className="flex items-center space-x-6">
//         <Link to="/" className="flex items-center space-x-2 mb-4">
//               <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
//               <img src="/vms_logo.webp" alt="Logo" className="h-6" />
//             </Link>
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="border rounded-full px-4 py-1 text-sm w-40 md:w-64"
//         />
//         <FaCog className="text-gray-600 text-lg" />
//         <img
//           src="https://i.pravatar.cc/32"
//           alt="profile"
//           className="w-8 h-8 rounded-full"
//         />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import { FaUserCircle, FaCog, FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const searchRef = useRef(null);

//   // Close search bar when clicking outside (mobile only)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchRef.current && !searchRef.current.contains(e.target)) {
//         setSearchOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-[#f4f4f6] py-4 px-6 flex items-center justify-between">
//       {/* Left Navigation */}
//       <nav className="hidden md:flex items-center space-x-6">
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Dashboard</a>
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Documentation</a>
//         <a href="#" className="text-sm text-gray-700 hover:text-purple-700">Terms & Conditions</a>
//         <a
//           href="#"
//           className="ml-4 px-4 py-1 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-full text-sm font-semibold shadow"
//         >
//           Contact us
//         </a>
//       </nav>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         {/* Search Input */}
//         <div ref={searchRef} className="relative">
//           {/* Desktop: Always visible input */}
//           <input
//             type="text"
//             placeholder="Search here..."
//             className="hidden md:block border rounded-full px-4 py-1 text-sm w-64"
//           />

//           {/* Mobile: Toggle search input with icon */}
//           <div className="relative right-4 md:hidden">
//             {searchOpen ? (
//               <input
//                 type="text"
//                 autoFocus
//                 placeholder="Search..."
//                 className="border rounded-full px-4 py-1 text-sm w-44 transition-all duration-300"
//               />
//             ) : (
//               <button
//                 onClick={() => setSearchOpen(true)}
//                 className="text-gray-600 hover:text-purple-700"
//               >
//                 <FaSearch className="text-lg" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Settings Icon: Hidden on mobile */}
//         <FaCog className="hidden md:block text-gray-600 text-lg" />

//         {/* Profile Avatar */}
//         <img
//           src="https://i.pravatar.cc/32"
//           alt="profile"
//           className="w-8 h-8 rounded-full"
//         />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaCog, FaSearch } from "react-icons/fa";
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
    <header className="bg-white md:bg-[#f4f4f6] py-4 px-6 flex items-center justify-between">
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
          <a href="/" className="text-sm text-gray-700 hover:text-purple-700">
            Dashboard
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-purple-700">
            Documentation
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-purple-700">
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
          <input
            type="text"
            placeholder="Search here..."
            className="hidden md:block border rounded-full px-4 py-1 text-sm w-64"
          />

          {/* Mobile Search Toggle */}
          <div className="md:hidden">
            {searchOpen ? (
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                className="border rounded-full px-4 py-1 text-sm w-44 transition-all duration-300"
              />
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
        <FaCog className="hidden md:block text-gray-600 text-lg" />

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
