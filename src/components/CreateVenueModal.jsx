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
//           <input type="text" placeholder="Enter venue Code" className="input" />
//           <input type="text" placeholder="Enter venue Name" className="input" />
//           <input type="text" placeholder="Enter Capacity" className="input" />

//           <div className="flex gap-2">
//             <input type="text" placeholder="Latitude" className="input w-1/2" />
//             <input type="text" placeholder="Longitude" className="input w-1/2" />
//           </div>
//           <input type="text" placeholder="Enter venue Radius" className="input" />
//           <select className="input">
//             <option>Select venue</option>
//             {/* Map through venues here */}
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

// import React from 'react';

// const CreateVenueModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-2/3 h-[80vh] p-6 overflow-y-auto relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
//         >
//           &times;
//         </button>

//         <h2 className="text-xl font-semibold text-center mb-4">Edit Venue</h2>

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
//           <input type="text" placeholder="Enter venue Code" className="input" />
//           <input type="text" placeholder="Enter venue Name" className="input" />
//           <input type="text" placeholder="Enter Capacity" className="input" />

//           <div className="flex gap-2">
//             <input type="text" placeholder="Latitude" className="input w-1/2" />
//             <input type="text" placeholder="Longitude" className="input w-1/2" />
//           </div>
//           <input type="text" placeholder="Enter venue Radius" className="input" />
//           <select className="input">
//             <option>Select venue</option>
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
//           <button className="bg-gradient-to-r from-[#5C1DF1] to-[#AE40F9] text-white px-8 py-2 rounded-md">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateVenueModal;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  venueCode: yup.string().required("venue code is required"),
  venueName: yup.string().required("venue name is required"),
  latitude: yup.number().required("Latitude is required"),
  longitude: yup.number().required("Longitude is required"),
  capacity: yup.number().required("Capacity is required"),
  radius: yup.number().required("Radius is required"),
  address: yup.string().required("Address is required"),
  supervisorName: yup.string().required("Supervisor name is required"),
  supervisorContact: yup.string().required("Contact number is required"),
  supervisorEmail: yup.string().email().required("Email is required"),
  cluster: yup.string().required("Cluster is required"),
  description: yup.string(),
  image: yup
    .mixed()
    .required("Image is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value[0]?.size <= 1048576
    )
    .test(
      "fileType",
      "Unsupported format",
      (value) =>
        value &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0]?.type)
    ),
});

const CreateVenueModal = ({ isOpen, onClose }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const imageFile = watch("image");

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      return () => URL.revokeObjectURL(previewUrl);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "image") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      await axios.post("/api/venues", formData);
      alert("venue created successfully!");
      reset();
      setImagePreview(null);
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create venue.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-2/3 h-[80vh] p-6 overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center py-4">Create Venue</h2>

        {/* Map */}
        <div className="w-full h-56 rounded-md overflow-hidden mb-4">
          <iframe
            title="Venue Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?...your_link_here..."
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button className="px-4 py-1 rounded-full bg-[#5C1DF1] text-white mr-2">
            Polygon
          </button>
          <button className="px-4 py-1 rounded-full bg-[#E4DAFB] text-[#5C1DF1]">
            Radius
          </button>
        </div>

        {/* Form Inputs */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Venue Code */}
          <div className="flex flex-col">
            <label className="label">Venue Code</label>
            <input
              {...register("venueCode")}
              className="input"
              placeholder="Enter Venue Code"
            />
            <p className="error">{errors.venueCode?.message}</p>
          </div>

          {/* Venue Name */}
          <div className="flex flex-col">
            <label className="label">Venue Name</label>
            <input
              {...register("venueName")}
              className="input"
              placeholder="Enter venue Name"
            />
            <p className="error">{errors.venueName?.message}</p>
          </div>

          {/* Venue Capacity */}
          <div className="flex flex-col">
            <label className="label">Venue Capacity</label>
            <input
              {...register("capacity")}
              type="number"
              className="input"
              placeholder="Enter Capacity"
            />
            <p className="error">{errors.capacity?.message}</p>
          </div>

          {/* Coordinates */}
          <div className="flex flex-col">
            <label className="label">Coordinates</label>
            <div className="flex gap-2">
              <div className="w-1/2">
                <input
                  {...register("latitude")}
                  type="number"
                  className="input"
                  placeholder="Latitude"
                />
                <p className="error">{errors.latitude?.message}</p>
              </div>
              <div className="w-1/2">
                <input
                  {...register("longitude")}
                  type="number"
                  className="input"
                  placeholder="Longitude"
                />
                <p className="error">{errors.longitude?.message}</p>
              </div>
            </div>
          </div>

          {/* Radius */}
          <div className="flex flex-col">
            <label className="label">Radius</label>
            <input
              {...register("radius")}
              type="number"
              className="input"
              placeholder="Enter venue Radius"
            />
            <p className="error">{errors.radius?.message}</p>
          </div>

          {/* Select venue */}
          <div className="flex flex-col">
            <label className="label">Select Cluster</label>
            <select {...register("venue")} className="input">
              <option value="">Select Cluster</option>
              <option value="Cluster A">Cluster A</option>
              <option value="Cluster B">Cluster B</option>
            </select>
            <p className="error">{errors.cluster?.message}</p>
          </div>

          {/* Supervisor Name */}
          <div className="flex flex-col">
            <label className="label">Venue Supervisor</label>
            <input
              {...register("supervisorName")}
              className="input"
              placeholder="Enter Supervisor Name"
            />
            <p className="error">{errors.supervisorName?.message}</p>
          </div>

          {/* Supervisor Contact */}
          <div className="flex flex-col">
            <label className="label">Supervisor Contact No</label>
            <input
              {...register("supervisorContact")}
              className="input"
              placeholder="Enter Supervisor Contact No"
            />
            <p className="error">{errors.supervisorContact?.message}</p>
          </div>

          {/* Supervisor Email */}
          <div className="flex flex-col">
            <label className="label">Supervisor Email</label>
            <input
              {...register("supervisorEmail")}
              className="input"
              placeholder="Enter Supervisor Email"
            />
            <p className="error">{errors.supervisorEmail?.message}</p>
          </div>

          {/* Upload Image */}
          <div className="flex flex-col">
            <label className="label">Upload Image</label>
            <input
              type="file"
              {...register("image")}
              accept="image/*"
              className="input"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 h-20 rounded"
              />
            )}
            <p className="error">{errors.image?.message}</p>
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="label">Description</label>
            <input
              {...register("description")}
              className="input"
              rows="3"
              placeholder="Enter Description"
            />
            <p className="error">{errors.description?.message}</p>
          </div>
          {/* </div> */}

          {/* Address */}
          <div className="flex flex-col md:col-span-3">
            <label className="label">Address</label>
            <input
              {...register("address")}
              className="input"
              placeholder="Enter Address"
            />
            <p className="error">{errors.address?.message}</p>
          </div>

          {/* Save Button */}
          <div className="md:col-span-3 col-span-1 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Save venue
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateVenueModal;
