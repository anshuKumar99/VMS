// import React, { useState } from 'react';

// const CreateClusterModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     clusterCode: '',
//     clusterName: '',
//     latitude: '',
//     longitude: '',
//     capacity: '',
//     radius: '',
//     supervisorName: '',
//     supervisorEmail: '',
//     supervisorContact: '',
//     venue: '',
//     description: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitting', formData);
//     // You can send the data to API here
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
//       <div className="bg-white w-full max-w-3xl p-6 rounded-2xl shadow-lg relative">
//         <h2 className="text-xl font-semibold text-center mb-6">Create Cluster</h2>
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl">&times;</button>

//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//           <input name="clusterCode" placeholder="Enter Cluster Code" className="input" value={formData.clusterCode} onChange={handleChange} />
//           <input name="clusterName" placeholder="Enter Cluster Name" className="input" value={formData.clusterName} onChange={handleChange} />

//           <div className="flex gap-2">
//             <input name="latitude" placeholder="Latitude" className="input w-1/2" value={formData.latitude} onChange={handleChange} />
//             <input name="longitude" placeholder="Longitude" className="input w-1/2" value={formData.longitude} onChange={handleChange} />
//           </div>
//           <input name="capacity" placeholder="Enter Capacity" className="input" value={formData.capacity} onChange={handleChange} />

//           <input name="radius" placeholder="Enter Cluster Radius" className="input" value={formData.radius} onChange={handleChange} />
//           <input name="supervisorName" placeholder="Enter Supervisor Name" className="input" value={formData.supervisorName} onChange={handleChange} />

//           <input name="supervisorContact" placeholder="Enter Supervisor Contact No" className="input" value={formData.supervisorContact} onChange={handleChange} />
//           <input name="supervisorEmail" placeholder="Enter Supervisor Email" className="input" value={formData.supervisorEmail} onChange={handleChange} />

//           <input type="file" name="image" onChange={handleChange} className="input file-input" />
//           <select name="venue" value={formData.venue} onChange={handleChange} className="input">
//             <option value="">Select Venue</option>
//             <option value="Venue A">Venue A</option>
//             <option value="Venue B">Venue B</option>
//           </select>

//           <textarea name="description" placeholder="Enter Description" className="input col-span-2" value={formData.description} onChange={handleChange} />

//           <button type="submit" className="col-span-2 mt-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md hover:opacity-90">
//             Save Cluster
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateClusterModal;

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "axios";

// const schema = yup.object().shape({
//   clusterCode: yup.string().required("Cluster code is required"),
//   clusterName: yup.string().required("Cluster name is required"),
//   latitude: yup.number().required("Latitude is required"),
//   longitude: yup.number().required("Longitude is required"),
//   capacity: yup.number().required("Capacity is required"),
//   radius: yup.number().required("Radius is required"),
//   supervisorName: yup.string().required("Supervisor name is required"),
//   supervisorContact: yup.string().required("Contact number is required"),
//   supervisorEmail: yup.string().email().required("Email is required"),
//   venue: yup.string().required("Venue is required"),
//   description: yup.string(),
//   image: yup
//     .mixed()
//     .required("Image is required")
//     .test(
//       "fileSize",
//       "File too large",
//       (value) => value && value[0]?.size <= 1048576
//     )
//     .test(
//       "fileType",
//       "Unsupported format",
//       (value) =>
//         value &&
//         ["image/jpeg", "image/png", "image/jpg"].includes(value[0]?.type)
//     ),
// });

// const CreateClusterModal = ({ isOpen, onClose }) => {
//   const [imagePreview, setImagePreview] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const imageFile = watch("image");

//   useEffect(() => {
//     if (imageFile && imageFile.length > 0) {
//       const file = imageFile[0];
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl);

//       // ✅ Revoke object URL when component unmounts or new file is chosen
//       return () => URL.revokeObjectURL(previewUrl);
//     } else {
//       setImagePreview(null);
//     }
//   }, [imageFile]);

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     Object.keys(data).forEach((key) => {
//       if (key === "image") {
//         formData.append(key, data[key][0]);
//       } else {
//         formData.append(key, data[key]);
//       }
//     });

//     try {
//       const response = await axios.post("/api/clusters", formData);
//       console.log("Success:", response.data);
//       alert("Cluster created successfully!");
//       reset();
//       setImagePreview(null);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to create cluster.");
//     }
//     onClose();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImagePreview(URL.createObjectURL(file));
//     } else {
//       setImagePreview(null);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
//       <div className="bg-white w-full max-w-3xl p-6 rounded-2xl shadow-lg relative">
//         <h2 className="text-xl font-semibold text-center mb-6">
//           Create Cluster
//         </h2>
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
//         >
//           &times;
//         </button>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="grid grid-cols-2 gap-4"
//         >
//           <div>
//             <label className="block font-medium">Cluster Code</label>
//             <input {...register("clusterCode")} className="input" />
//             <p className="text-red-500 text-sm">
//               {errors.clusterCode?.message}
//             </p>
//           </div>

//           <div>
//             <label className="block font-medium">Cluster Name</label>
//             <input {...register("clusterName")} className="input" />
//             <p className="text-red-500 text-sm">
//               {errors.clusterName?.message}
//             </p>
//           </div>

//           <div>
//             <label className="block font-medium">Latitude</label>
//             <input {...register("latitude")} type="number" className="input" />
//             <p className="text-red-500 text-sm">{errors.latitude?.message}</p>
//           </div>

//           <div>
//             <label className="block font-medium">Longitude</label>
//             <input {...register("longitude")} type="number" className="input" />
//             <p className="text-red-500 text-sm">{errors.longitude?.message}</p>
//           </div>

//           <div>
//             <label className="block font-medium">Capacity</label>
//             <input {...register("capacity")} type="number" className="input" />
//             <p className="text-red-500 text-sm">{errors.capacity?.message}</p>
//           </div>

//           <div>
//             <label className="block font-medium">Radius</label>
//             <input {...register("radius")} type="number" className="input" />
//             <p className="text-red-500 text-sm">{errors.radius?.message}</p>
//           </div>

//           <div>
//             <label className="block font-medium">Supervisor Name</label>
//             <input {...register("supervisorName")} className="input" />
//             <p className="text-red-500 text-sm">
//               {errors.supervisorName?.message}
//             </p>
//           </div>

//           <div>
//             <label className="block font-medium">Supervisor Contact</label>
//             <input {...register("supervisorContact")} className="input" />
//             <p className="text-red-500 text-sm">
//               {errors.supervisorContact?.message}
//             </p>
//           </div>

//           <div>
//             <label className="block font-medium">Supervisor Email</label>
//             <input
//               {...register("supervisorEmail")}
//               type="email"
//               className="input"
//             />
//             <p className="text-red-500 text-sm">
//               {errors.supervisorEmail?.message}
//             </p>
//           </div>

//           <div>
//             <label className="block font-medium">Add Venue</label>
//             <select {...register("venue")} className="input">
//               <option value="">Select Venue</option>
//               <option value="Venue A">Venue A</option>
//               <option value="Venue B">Venue B</option>
//             </select>
//             <p className="text-red-500 text-sm">{errors.venue?.message}</p>
//           </div>

//           <div>
//             <label className="block font-medium">Upload Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               {...register("image")}
//               onChange={handleImageChange}
//               className="input"
//             />
//             {imagePreview && (
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="mt-2 h-24 rounded-md"
//               />
//             )}
//             <p className="text-red-500 text-sm">{errors.image?.message}</p>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block font-medium">Description</label>
//             <textarea
//               {...register("description")}
//               rows="3"
//               className="input resize-none"
//             />
//             <p className="text-red-500 text-sm">
//               {errors.description?.message}
//             </p>
//           </div>

//           <div className="md:col-span-2 text-center">
//             <button
//               type="submit"
//               className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
//             >
//               Save Cluster
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateClusterModal;




// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// // import axios from "axios";

// const schema = yup.object().shape({
//   clusterCode: yup.string().required("Cluster code is required"),
//   clusterName: yup.string().required("Cluster name is required"),
//   latitude: yup.number().required("Latitude is required"),
//   longitude: yup.number().required("Longitude is required"),
//   capacity: yup.number().required("Capacity is required"),
//   radius: yup.number().required("Radius is required"),
//   supervisorName: yup.string().required("Supervisor name is required"),
//   supervisorContact: yup.string().required("Contact number is required"),
//   supervisorEmail: yup.string().email().required("Email is required"),
//   venue: yup.string().required("Venue is required"),
//   description: yup.string(),
//   image: yup
//     .mixed()
//     .required("Image is required")
//     .test("fileSize", "File too large", (value) => value && value[0]?.size <= 1048576)
//     .test(
//       "fileType",
//       "Unsupported format",
//       (value) =>
//         value && ["image/jpeg", "image/png", "image/jpg"].includes(value[0]?.type)
//     ),
// });

// const CreateClusterModal = ({ isOpen, onClose }) => {
//   const [imagePreview, setImagePreview] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const imageFile = watch("image");

//   useEffect(() => {
//     if (imageFile && imageFile.length > 0) {
//       const file = imageFile[0];
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl);
//       return () => URL.revokeObjectURL(previewUrl);
//     } else {
//       setImagePreview(null);
//     }
//   }, [imageFile]);

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     Object.keys(data).forEach((key) => {
//       if (key === "image") {
//         formData.append(key, data[key][0]);
//       } else {
//         formData.append(key, data[key]);
//       }
//     });

//     try {
//     //   const response = await axios.post("/api/clusters", formData);
//       alert("Cluster created successfully!");
//       reset();
//       setImagePreview(null);
//       onClose();
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to create cluster.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
//       <div className="bg-white w-full max-w-4xl p-6 rounded-2xl shadow-xl relative animate-fadeIn">
//         <h2 className="text-xl font-semibold text-center mb-6">
//           Create Cluster
//         </h2>
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
//         >
//           &times;
//         </button>
//         <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium">Cluster Code</label>
//             <input {...register("clusterCode")} className="input" placeholder="Enter Cluster Code" />
//             <p className="text-red-500 text-sm">{errors.clusterCode?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Cluster Name</label>
//             <input {...register("clusterName")} className="input" placeholder="Enter Cluster Name" />
//             <p className="text-red-500 text-sm">{errors.clusterName?.message}</p>
//           </div>
//           <div className="flex gap-2">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium">Latitude</label>
//               <input {...register("latitude")} type="number" className="input" placeholder="Latitude" />
//               <p className="text-red-500 text-sm">{errors.latitude?.message}</p>
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium">Longitude</label>
//               <input {...register("longitude")} type="number" className="input" placeholder="Longitude" />
//               <p className="text-red-500 text-sm">{errors.longitude?.message}</p>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Capacity</label>
//             <input {...register("capacity")} type="number" className="input" placeholder="Enter Capacity" />
//             <p className="text-red-500 text-sm">{errors.capacity?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Radius</label>
//             <input {...register("radius")} type="number" className="input" placeholder="Enter Cluster Radius" />
//             <p className="text-red-500 text-sm">{errors.radius?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Supervisor Name</label>
//             <input {...register("supervisorName")} className="input" placeholder="Enter Supervisor Name" />
//             <p className="text-red-500 text-sm">{errors.supervisorName?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Supervisor Contact</label>
//             <input {...register("supervisorContact")} className="input" placeholder="Enter Supervisor Contact No" />
//             <p className="text-red-500 text-sm">{errors.supervisorContact?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Supervisor Email</label>
//             <input {...register("supervisorEmail")} type="email" className="input" placeholder="Enter Supervisor Email" />
//             <p className="text-red-500 text-sm">{errors.supervisorEmail?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Add Venue</label>
//             <select {...register("venue")} className="input">
//               <option value="">Select Venue</option>
//               <option value="Venue A">Venue A</option>
//               <option value="Venue B">Venue B</option>
//             </select>
//             <p className="text-red-500 text-sm">{errors.venue?.message}</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Upload Image</label>
//             <input type="file" accept="image/*" {...register("image")} className="input" />
//             {imagePreview && (
//               <img src={imagePreview} alt="Preview" className="mt-2 h-20 rounded" />
//             )}
//             <p className="text-red-500 text-sm">{errors.image?.message}</p>
//           </div>
//           <div className="col-span-2">
//             <label className="block text-sm font-medium">Description</label>
//             <textarea {...register("description")} rows={3} className="input resize-none" placeholder="Enter Description" />
//             <p className="text-red-500 text-sm">{errors.description?.message}</p>
//           </div>
//           <div className="col-span-2 text-center">
//             <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
//               Save Cluster
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateClusterModal;




import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  clusterCode: yup.string().required("Cluster code is required"),
  clusterName: yup.string().required("Cluster name is required"),
  latitude: yup.number().required("Latitude is required"),
  longitude: yup.number().required("Longitude is required"),
  capacity: yup.number().required("Capacity is required"),
  radius: yup.number().required("Radius is required"),
  supervisorName: yup.string().required("Supervisor name is required"),
  supervisorContact: yup.string().required("Contact number is required"),
  supervisorEmail: yup.string().email().required("Email is required"),
  venue: yup.string().required("Venue is required"),
  description: yup.string(),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "File too large", (value) => value && value[0]?.size <= 1048576)
    .test(
      "fileType",
      "Unsupported format",
      (value) =>
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value[0]?.type)
    ),
});

const CreateClusterModal = ({ isOpen, onClose }) => {
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
      await axios.post("/api/clusters", formData);
      alert("Cluster created successfully!");
      reset();
      setImagePreview(null);
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create cluster.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white w-2/3 h-2/3 rounded-xl shadow-lg relative animate-fadeIn flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-center py-4">Create Cluster</h2>
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <label className="label">Cluster Code</label>
              <input {...register("clusterCode")} className="input" placeholder="Cluster Code" />
              <p className="error">{errors.clusterCode?.message}</p>
            </div>

            <div>
              <label className="label">Cluster Name</label>
              <input {...register("clusterName")} className="input" placeholder="Cluster Name" />
              <p className="error">{errors.clusterName?.message}</p>
            </div>

            <div>
              <label className="label">Latitude</label>
              <input {...register("latitude")} type="number" className="input" placeholder="Latitude" />
              <p className="error">{errors.latitude?.message}</p>
            </div>

            <div>
              <label className="label">Longitude</label>
              <input {...register("longitude")} type="number" className="input" placeholder="Longitude" />
              <p className="error">{errors.longitude?.message}</p>
            </div>

            <div>
              <label className="label">Capacity</label>
              <input {...register("capacity")} type="number" className="input" placeholder="Capacity" />
              <p className="error">{errors.capacity?.message}</p>
            </div>

            <div>
              <label className="label">Radius</label>
              <input {...register("radius")} type="number" className="input" placeholder="Radius" />
              <p className="error">{errors.radius?.message}</p>
            </div>

            <div>
              <label className="label">Supervisor Name</label>
              <input {...register("supervisorName")} className="input" placeholder="Supervisor Name" />
              <p className="error">{errors.supervisorName?.message}</p>
            </div>

            <div>
              <label className="label">Supervisor Contact</label>
              <input {...register("supervisorContact")} className="input" placeholder="Contact No" />
              <p className="error">{errors.supervisorContact?.message}</p>
            </div>

            <div>
              <label className="label">Supervisor Email</label>
              <input {...register("supervisorEmail")} className="input" placeholder="Email" />
              <p className="error">{errors.supervisorEmail?.message}</p>
            </div>

            <div>
              <label className="label">Add Venue</label>
              <select {...register("venue")} className="input">
                <option value="">Select Venue</option>
                <option value="Venue A">Venue A</option>
                <option value="Venue B">Venue B</option>
              </select>
              <p className="error">{errors.venue?.message}</p>
            </div>

            <div>
              <label className="label">Upload Image</label>
              <input type="file" {...register("image")} accept="image/*" className="input" />
              {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-20 rounded" />}
              <p className="error">{errors.image?.message}</p>
            </div>

            <div className="col-span-2">
              <label className="label">Description</label>
              <textarea {...register("description")} className="input" rows="3" placeholder="Description" />
              <p className="error">{errors.description?.message}</p>
            </div>

            <div className="col-span-2 text-center">
              <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
                Save Cluster
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClusterModal;

