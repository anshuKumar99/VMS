// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUsers,
//   FaLayerGroup,
//   FaBuilding,
//   FaFutbol,
//   FaMapMarkedAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { CgMenuGridR } from "react-icons/cg";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   return (
//     <div className="relative flex">
//       <aside
//   className={`${
//     isCollapsed ? "w-0" : "w-64"
//   } bg-[#f4f4f6] min-h-screen flex flex-col justify-between transition-all duration-300 overflow-hidden`}
// >
//         {!isCollapsed && (
//           <>
//             <div className="px-4 py-5">
//               <Link to="/" className="flex items-center space-x-2 mb-4">
//                 <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
//                 <img src="/vms_logo.webp" alt="Logo" className="h-6" />
//               </Link>

//               <div className="flex items-center space-x-2 mb-4">
//                 <img
//                   src="/images.webp"
//                   alt="Admin"
//                   className="h-8 w-8 rounded-full"
//                 />
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-800">
//                     Venue Management
//                   </h4>
//                   <p className="text-xs text-gray-500">gtccadmin@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-sm px-1 py-2 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md">
//                 Platform
//               </div>

//               <nav className="flex flex-col space-y-2 text-sm">
//                 <Link
//                   to="/ModuleAdmin"
//                   className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//                 >
//                   <FaUsers />
//                   <span>Module Users</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//                 >
//                   <FaLayerGroup />
//                   <span>Clusters</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//                 >
//                   <FaBuilding />
//                   <span>Venues</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//                 >
//                   <FaFutbol />
//                   <span>Sports Facilities</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//                 >
//                   <FaMapMarkedAlt />
//                   <span>Zones</span>
//                 </Link>
//               </nav>

//               <div className="mt-6">
//                 <div className="flex items-center space-x-2">
//                   <img
//                     src="/images.webp"
//                     alt="Admin"
//                     className="h-6 w-6 rounded-full"
//                   />
//                   <div>
//                     <div className="text-sm font-semibold text-gray-900">
//                       Kamran
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       gtccadmin@gmail.com
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 py-4">
//               <Link
//                 to="/ModuleAdmin"
//                 className="block bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center text-sm py-2 rounded-lg font-medium shadow"
//               >
//                 Manage Module Users
//               </Link>
//             </div>
//           </>
//         )}
//       </aside>

//       <button
//         onClick={toggleSidebar}
//         className="absolute top-22 z-50 bg-purple-200 border-none rounded-full p-1 hover:bg-purple-300 transition-all duration-300"
//         style={{
//           left: isCollapsed ? "-1rem" : "15rem",
//         }}
//       >
//         <div className="text-purple-600 text-xl">
//           {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//         </div>
//         {/* {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />} */}
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUsers,
//   FaLayerGroup,
//   FaBuilding,
//   FaFutbol,
//   FaMapMarkedAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { CgMenuGridR } from "react-icons/cg";

// const Sidebar = ({ isOpen, closeSidebar }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);
//   return (
//     <>
//       {/* Backdrop for mobile */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden transition-opacity duration-300 ${
//           isOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//         onClick={closeSidebar}
//       ></div>

//       {/* Sidebar */}
//       <aside
//         className={`${
//           isCollapsed ? "w-0" : "w-64"
//         } bg-[#f4f4f6] min-h-screen flex flex-col justify-between transition-all duration-300 overflow-hidden`}
//       >
//         {!isCollapsed && (
//           <div className="w-64 flex flex-col justify-between overflow-y-auto">
//             <div className="px-4 py-5">
//               {/* Logo */}
//               <Link to="/" className="flex items-center space-x-2 mb-4">
//                 <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
//                 <img src="/vms_logo.webp" alt="Logo" className="h-6" />
//               </Link>

//               {/* Admin Info */}
//               <div className="flex items-center space-x-2 mb-4">
//                 <img
//                   src="/images.webp"
//                   alt="Admin"
//                   className="h-8 w-8 rounded-full"
//                 />
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-800">
//                     Venue Management
//                   </h4>
//                   <p className="text-xs text-gray-500">gtccadmin@gmail.com</p>
//                 </div>
//               </div>

//               <div className="text-[#3F3F46] text-sm font-medium mb-1">
//                 Platform
//               </div>

//               <nav className="flex flex-col space-y-2 text-sm">
//                 <Link
//                   to="/ModuleAdmin"
//                   className="flex items-center gap-2 px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//                 >
//                   <FaUsers />
//                   <span>Module Users</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 px-2 py-1 hover:text-[#7a3bf5]"
//                 >
//                   <FaLayerGroup />
//                   <span>Clusters</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 px-2 py-1 hover:text-[#7a3bf5]"
//                 >
//                   <FaBuilding />
//                   <span>Venues</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 px-2 py-1 hover:text-[#7a3bf5]"
//                 >
//                   <FaFutbol />
//                   <span>Sports Facilities</span>
//                 </Link>
//                 <Link
//                   to="#"
//                   className="flex items-center gap-2 px-2 py-1 hover:text-[#7a3bf5]"
//                 >
//                   <FaMapMarkedAlt />
//                   <span>Zones</span>
//                 </Link>
//               </nav>

//               <div className="mt-6">
//                 <div className="flex items-center space-x-2">
//                   <img
//                     src="/images.webp"
//                     alt="Admin"
//                     className="h-6 w-6 rounded-full"
//                   />
//                   <div>
//                     <div className="text-sm font-semibold text-gray-900">
//                       Kamran
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       gtccadmin@gmail.com
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 py-4">
//               <Link
//                 to="/ModuleAdmin"
//                 className="block bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center text-sm py-2 rounded-lg font-medium shadow"
//               >
//                 Manage Module Users
//               </Link>
//             </div>
//           </div>
//         )}
//       </aside>
//       <button
//         onClick={toggleSidebar}
//         className="absolute top-22 z-50 bg-purple-200 border-none rounded-full p-1 hover:bg-purple-300 transition-all duration-300"
//         style={{
//           left: isCollapsed ? "-1rem" : "15rem",
//         }}
//       >
//         <div className="text-purple-600 text-xl">
//           {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//         </div>
//         {/* {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />} */}
//       </button>
//     </>
//   );
// };

// export default Sidebar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUsers,
//   FaLayerGroup,
//   FaBuilding,
//   FaFutbol,
//   FaMapMarkedAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { CgMenuGridR } from "react-icons/cg";
// import { FaBars } from "react-icons/fa";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);
//   const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

//   return (
//     <>
//       {/* Mobile Hamburger Toggle */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md"
//         onClick={toggleMobileSidebar}
//       >
//         <FaBars />
//       </button>

//       {/* Sidebar Container */}
//       <div className="relative flex">
//         <aside
//           className={`
//             ${
//               isCollapsed ? "w-0" : "w-64"
//             }
//             ${
//               isMobileOpen ? "translate-x-0" : "-translate-x-full"
//             }
//             md:translate-x-0
//             fixed md:static top-0 left-0 h-screen z-40 bg-[#f4f4f6] transition-transform duration-300 ease-in-out overflow-hidden
//           `}
//         >
//           <div className="px-4 py-5">
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//               <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
//               <img src="/vms_logo.webp" alt="Logo" className="h-6" />
//             </Link>

//             <div className="flex items-center space-x-2 mb-4">
//               <img
//                 src="/images.webp"
//                 alt="Admin"
//                 className="h-8 w-8 rounded-full"
//               />
//               <div>
//                 <h4 className="text-sm font-semibold text-gray-800">
//                   Venue Management
//                 </h4>
//                 <p className="text-xs text-gray-500">gtccadmin@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-sm px-1 py-2 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md">
//               Platform
//             </div>

//             <nav className="flex flex-col space-y-2 text-sm">
//               <Link
//                 to="/ModuleAdmin"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaUsers />
//                 <span>Module Users</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaLayerGroup />
//                 <span>Clusters</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaBuilding />
//                 <span>Venues</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaFutbol />
//                 <span>Sports Facilities</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaMapMarkedAlt />
//                 <span>Zones</span>
//               </Link>
//             </nav>

//             <div className="mt-6">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src="/images.webp"
//                   alt="Admin"
//                   className="h-6 w-6 rounded-full"
//                 />
//                 <div>
//                   <div className="text-sm font-semibold text-gray-900">
//                     Kamran
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     gtccadmin@gmail.com
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 py-4">
//               <Link
//                 to="/ModuleAdmin"
//                 className="block bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center text-sm py-2 rounded-lg font-medium shadow"
//               >
//                 Manage Module Users
//               </Link>
//             </div>
//           </div>
//         </aside>

//         {/* Collapse Toggle (only visible on desktop) */}
//         <button
//           onClick={toggleSidebar}
//           className="hidden md:block absolute top-20 z-50 bg-purple-200 border-none rounded-full p-1 hover:bg-purple-300 transition-all duration-300"
//           style={{
//             left: isCollapsed ? "-1rem" : "15rem",
//           }}
//         >
//           <div className="text-purple-600 text-xl">
//             {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//           </div>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Sidebar;


// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUsers,
//   FaLayerGroup,
//   FaBuilding,
//   FaFutbol,
//   FaMapMarkedAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { CgMenuGridR } from "react-icons/cg";
// import { FaBars } from "react-icons/fa";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);
//   const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

//   // Auto-close on outside click (mobile only)
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobileOpen &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         !event.target.closest("#mobileMenuBtn")
//       ) {
//         setIsMobileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isMobileOpen]);

//   return (
//     <>
//       {/* Hamburger (mobile only) */}
//       <button
//         id="mobileMenuBtn"
//         className="md:hidden fixed top-16 right-4 z-50 bg-purple-600 text-white p-2 rounded-md"
//         onClick={toggleMobileSidebar}
//       >
//         <FaBars />
//       </button>

//       {/* Background Overlay */}
//       {isMobileOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
//       )}

//       {/* Sidebar */}
//       <div className="relative flex">
//         <aside
//           ref={sidebarRef}
//           className={`
//             ${
//               isCollapsed ? "w-0" : "w-64"
//             }
//             ${
//               isMobileOpen ? "translate-x-0" : "-translate-x-full"
//             }
//             md:translate-x-0
//             fixed md:static top-0 left-0 h-screen z-40 bg-[#f4f4f6] transition-transform duration-300 ease-in-out overflow-hidden
//           `}
//         >
//           <div className="px-4 py-5">
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//               <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
//               <img src="/vms_logo.webp" alt="Logo" className="h-6" />
//             </Link>

//             <div className="flex items-center space-x-2 mb-4">
//               <img
//                 src="/images.webp"
//                 alt="Admin"
//                 className="h-8 w-8 rounded-full"
//               />
//               <div>
//                 <h4 className="text-sm font-semibold text-gray-800">
//                   Venue Management
//                 </h4>
//                 <p className="text-xs text-gray-500">gtccadmin@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-sm px-1 py-2 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md">
//               Platform
//             </div>

//             <nav className="flex flex-col space-y-2 text-sm">
//               <Link
//                 to="/ModuleAdmin"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaUsers />
//                 <span>Module Users</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaLayerGroup />
//                 <span>Clusters</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaBuilding />
//                 <span>Venues</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaFutbol />
//                 <span>Sports Facilities</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaMapMarkedAlt />
//                 <span>Zones</span>
//               </Link>
//             </nav>

//             <div className="mt-6">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src="/images.webp"
//                   alt="Admin"
//                   className="h-6 w-6 rounded-full"
//                 />
//                 <div>
//                   <div className="text-sm font-semibold text-gray-900">
//                     Kamran
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     gtccadmin@gmail.com
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 py-4">
//               <Link
//                 to="/ModuleAdmin"
//                 className="block bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center text-sm py-2 rounded-lg font-medium shadow"
//               >
//                 Manage Module Users
//               </Link>
//             </div>
//           </div>
//         </aside>

//         {/* Collapse Toggle (Desktop only) */}
//         <button
//           onClick={toggleSidebar}
//           className="hidden md:block absolute top-20 z-50 bg-purple-200 border-none rounded-full p-1 hover:bg-purple-300 transition-all duration-300"
//           style={{
//             left: isCollapsed ? "-1rem" : "15rem",
//           }}
//         >
//           <div className="text-purple-600 text-xl">
//             {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//           </div>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUsers,
//   FaLayerGroup,
//   FaBuilding,
//   FaFutbol,
//   FaMapMarkedAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { CgMenuGridR } from "react-icons/cg";
// import { FaBars } from "react-icons/fa";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);
//   const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

//   // Close mobile sidebar on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobileOpen &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         !event.target.closest("#mobileMenuBtn")
//       ) {
//         setIsMobileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isMobileOpen]);

//   return (
//     <>
//       {/* Background overlay */}
//       {isMobileOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
//       )}

//       {/* Sidebar */}
//       <div className="relative flex">
//         <aside
//           ref={sidebarRef}
//           className={`
//             ${isCollapsed ? "w-0" : "w-64"}
//             ${isMobileOpen ? "translate-x-0" : "translate-x-full"}
//             md:translate-x-0
//             fixed md:static top-0 right-0 h-screen z-40 bg-[#f4f4f6] transition-transform duration-300 ease-in-out overflow-hidden
//           `}
//         >
//           <div className="px-4 py-5">
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//               <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
//               <img src="/vms_logo.webp" alt="Logo" className="h-6" />
//             </Link>

//             <div className="flex items-center space-x-2 mb-4">
//               <img
//                 src="/images.webp"
//                 alt="Admin"
//                 className="h-8 w-8 rounded-full"
//               />
//               <div>
//                 <h4 className="text-sm font-semibold text-gray-800">
//                   Venue Management
//                 </h4>
//                 <p className="text-xs text-gray-500">gtccadmin@gmail.com</p>
//               </div>
//             </div>

//             {/* Hamburger Menu (now placed below profile) */}
//             <button
//               id="mobileMenuBtn"
//               className="md:hidden mt-2 mb-4 bg-purple-600 text-white p-2 rounded-md"
//               onClick={toggleMobileSidebar}
//             >
//               <FaBars />
//             </button>

//             <div className="flex items-center gap-2 text-sm px-1 py-2 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md">
//               Platform
//             </div>

//             <nav className="flex flex-col space-y-2 text-sm">
//               <Link
//                 to="/ModuleAdmin"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaUsers />
//                 <span>Module Users</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaLayerGroup />
//                 <span>Clusters</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaBuilding />
//                 <span>Venues</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaFutbol />
//                 <span>Sports Facilities</span>
//               </Link>
//               <Link
//                 to="#"
//                 className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
//               >
//                 <FaMapMarkedAlt />
//                 <span>Zones</span>
//               </Link>
//             </nav>

//             <div className="mt-6">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src="/images.webp"
//                   alt="Admin"
//                   className="h-6 w-6 rounded-full"
//                 />
//                 <div>
//                   <div className="text-sm font-semibold text-gray-900">
//                     Kamran
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     gtccadmin@gmail.com
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 py-4">
//               <Link
//                 to="/ModuleAdmin"
//                 className="block bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center text-sm py-2 rounded-lg font-medium shadow"
//               >
//                 Manage Module Users
//               </Link>
//             </div>
//           </div>
//         </aside>

//         {/* Collapse Toggle (Desktop only) */}
//         <button
//           onClick={toggleSidebar}
//           className="hidden md:block absolute top-20 z-50 bg-purple-200 border-none rounded-full p-1 hover:bg-purple-300 transition-all duration-300"
//           style={{
//             right: isCollapsed ? "-1rem" : "15rem",
//           }}
//         >
//           <div className="text-purple-600 text-xl">
//             {isCollapsed ? <FaChevronLeft /> : <FaChevronRight />}
//           </div>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



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
            fixed top-0 md:left-0 h-screen z-40 bg-[#f4f4f6] overflow-hidden
            transition-transform duration-300 ease-in-out
            md:translate-x-0 
            ${isMobileOpen ? "translate-x-0 right-0" : "translate-x-full right-0"} 
            md:static
          `}
        >
          <div className="px-4 py-5">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CgMenuGridR className="text-3xl text-[#A0AEC0]" />
              <img src="/vms_logo.webp" alt="Logo" className="h-6" />
            </Link>

            <div className="flex items-center space-x-2 mb-4">
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

            <div className="flex items-center gap-2 text-sm px-1 py-2 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md">
              Platform
            </div>

            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                to="/module-user"
                className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
              >
                <FaUsers />
                <span>Module Users</span>
              </Link>
              <Link
                to="/cluster"
                className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
              >
                <FaLayerGroup />
                <span>Clusters</span>
              </Link>
              <Link
                to="/venue"
                className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
              >
                <FaBuilding />
                <span>Venues</span>
              </Link>
              <Link
                to="/facilities"
                className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
              >
                <FaFutbol />
                <span>Sports Facilities</span>
              </Link>
              <Link
                to="/zones"
                className="flex items-center gap-2 text-sm px-2 py-1 text-[#3F3F46] hover:text-[#7a3bf5] rounded-md"
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
                  className="h-6 w-6 rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Kamran
                  </div>
                  <div className="text-xs text-gray-500">
                    gtccadmin@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              <Link
                to="/ModuleAdmin"
                className="block bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white text-center text-sm py-2 rounded-lg font-medium shadow"
              >
                Manage Module Users
              </Link>
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

