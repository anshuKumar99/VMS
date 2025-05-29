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
      <div className="bg-white w-[90%] md:w-2/3 h-4/5 rounded-xl shadow-lg relative animate-fadeIn flex flex-col">
        <button
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-center py-4">
          Create Cluster
        </h2>
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10"
          >
            <div>
              <label className="label">Cluster Code</label>
              <input
                {...register("clusterCode")}
                className="input"
                placeholder="Enter Cluster Code"
              />
              <p className="error">{errors.clusterCode?.message}</p>
            </div>

            <div>
              <label className="label">Cluster Name</label>
              <input
                {...register("clusterName")}
                className="input"
                placeholder="Enter Cluster Name"
              />
              <p className="error">{errors.clusterName?.message}</p>
            </div>

            <div>
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

            <div>
              <label className="label">Cluster Capacity</label>
              <input
                {...register("capacity")}
                type="number"
                className="input"
                placeholder="Enter Capacity"
              />
              <p className="error">{errors.capacity?.message}</p>
            </div>

            <div>
              <label className="label">Radius</label>
              <input
                {...register("radius")}
                type="number"
                className="input"
                placeholder="Enter Cluster Radius"
              />
              <p className="error">{errors.radius?.message}</p>
            </div>

            <div>
              <label className="label">Cluster Supervisor</label>
              <input
                {...register("supervisorName")}
                className="input"
                placeholder="Enter Supervisor Name"
              />
              <p className="error">{errors.supervisorName?.message}</p>
            </div>

            <div>
              <label className="label">Supervisor Contact No</label>
              <input
                {...register("supervisorContact")}
                className="input"
                placeholder="Enter Supervisor Contact No"
              />
              <p className="error">{errors.supervisorContact?.message}</p>
            </div>

            <div>
              <label className="label">Supervisor Email</label>
              <input
                {...register("supervisorEmail")}
                className="input"
                placeholder="Enter Supervisor Email"
              />
              <p className="error">{errors.supervisorEmail?.message}</p>
            </div>

            <div>
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

            <div>
              <label className="label">Add Venue</label>
              <select {...register("venue")} className="input">
                <option value="">Select Venue</option>
                <option value="Venue A">Venue A</option>
                <option value="Venue B">Venue B</option>
              </select>
              <p className="error">{errors.venue?.message}</p>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <label className="label">Description</label>
              <textarea
                {...register("description")}
                className="input"
                rows="3"
                placeholder="Enter Description"
              />
              <p className="error">{errors.description?.message}</p>
            </div>

            <div className="col-span-1 sm:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-6 py-2 rounded hover:bg-purple-700 transition"
              >
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
