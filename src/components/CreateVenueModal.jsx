// import React from 'react';

// const CreateVenueModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
//       <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-5xl p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-center w-full">Edit Venue</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
//         </div>

//         <div className="w-full h-56 rounded-md overflow-hidden mb-4">
//           <iframe
//             title="Venue Location"
//             className="w-full h-full"
//             src="https://www.google.com/maps/embed?..."
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>

//         <div className="flex justify-center mb-6">
//           <button className="px-4 py-1 rounded-full bg-[#5C1DF1] text-white mr-2">Polygon</button>
//           <button className="px-4 py-1 rounded-full bg-[#E4DAFB] text-[#5C1DF1]">Radius</button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input type="text" placeholder="Enter Cluster Code" className="input" />
//           <input type="text" placeholder="Enter Cluster Name" className="input" />
//           <input type="text" placeholder="Enter Capacity" className="input" />

//           <div className="flex gap-2">
//             <input type="text" placeholder="Latitude" className="input w-1/2" />
//             <input type="text" placeholder="Longitude" className="input w-1/2" />
//           </div>
//           <input type="text" placeholder="Enter Cluster Radius" className="input" />
//           <select className="input">
//             <option>Select Cluster</option>
//             {/* Map through clusters here */}
//           </select>

//           <input type="text" placeholder="Enter Supervisor Name" className="input" />
//           <input type="text" placeholder="Enter Supervisor Contact" className="input" />
//           <input type="email" placeholder="Enter Supervisor Email" className="input" />

//           <input type="file" className="input" />
//           <input type="text" placeholder="Enter Description" className="input" />
//         </div>

//         <div className="mt-4">
//           <input type="text" placeholder="Enter Address" className="input w-full" />
//         </div>

//         <div className="flex justify-center mt-6">
//           <button className="bg-gradient-to-r from-[#5C1DF1] to-[#AE40F9] text-white px-8 py-2 rounded-md">Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateVenueModal;



import React from 'react';

const CreateVenueModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-2/3 h-[80vh] p-6 overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">Edit Venue</h2>

        <div className="w-full h-56 rounded-md overflow-hidden mb-4">
          <iframe
            title="Venue Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center mb-6">
          <button className="px-4 py-1 rounded-full bg-[#5C1DF1] text-white mr-2">Polygon</button>
          <button className="px-4 py-1 rounded-full bg-[#E4DAFB] text-[#5C1DF1]">Radius</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Enter Cluster Code" className="input" />
          <input type="text" placeholder="Enter Cluster Name" className="input" />
          <input type="text" placeholder="Enter Capacity" className="input" />

          <div className="flex gap-2">
            <input type="text" placeholder="Latitude" className="input w-1/2" />
            <input type="text" placeholder="Longitude" className="input w-1/2" />
          </div>
          <input type="text" placeholder="Enter Cluster Radius" className="input" />
          <select className="input">
            <option>Select Cluster</option>
          </select>

          <input type="text" placeholder="Enter Supervisor Name" className="input" />
          <input type="text" placeholder="Enter Supervisor Contact" className="input" />
          <input type="email" placeholder="Enter Supervisor Email" className="input" />

          <input type="file" className="input" />
          <input type="text" placeholder="Enter Description" className="input" />
        </div>

        <div className="mt-4">
          <input type="text" placeholder="Enter Address" className="input w-full" />
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-gradient-to-r from-[#5C1DF1] to-[#AE40F9] text-white px-8 py-2 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVenueModal;
