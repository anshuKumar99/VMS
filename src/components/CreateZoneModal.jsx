import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  zoneCode: yup
    .string()
    .required("Zone code is required")
    .matches(/^[a-zA-Z0-9]+$/, "Zone code must be alphanumeric")
    .min(2, "Zone code must be at least 2 characters"),

  zoneName: yup
    .string()
    .required("Zone name is required")
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      "Zone name must not contain special characters"
    )
    .min(3, "Zone name must be at least 3 characters"),

  latitude: yup
    .number()
    .required("Latitude is required")
    .typeError("Latitude is required")
    .min(-90, "Latitude must be >= -90")
    .max(90, "Latitude must be <= 90"),

  longitude: yup
    .number()
    .required("Longitude is required")
    .typeError("Longitude is required")
    .min(-180, "Longitude must be >= -180")
    .max(180, "Longitude must be <= 180"),

  radius: yup
    .number()
    .required("Radius is required")
    .typeError("Radius must be a number")
    .positive("Radius must be a positive number"),

  capacity: yup
    .number()
    .required("Capacity is required")
    .typeError("Capacity must be a number")
    .integer("Capacity must be an integer")
    .positive("Capacity must be a positive number"),

  supervisorName: yup
    .string()
    .required("Supervisor name is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Supervisor name must not contain special characters or numbers"
    )
    .min(3, "Supervisor name must be at least 3 characters"),

  supervisorEmail: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address")
    .matches(
      /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email"
    ),

  supervisorContact: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Contact must be a 10-digit number"),

  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "File size must be less than 1MB", (value) => {
      return value && value[0] && value[0].size <= 1048576;
    })
    .test("fileType", "Supported formats: jpeg, jpg, png", (value) => {
      return (
        value &&
        value[0] &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
      );
    }),
});

export default function CreateZoneModal({
  isOpen,
  onClose,
  venueName,
  onSubmit,
}) {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(schema) });

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

  const handleFormSubmit = (data) => {
    const fullData = { ...data, venueName };
    onSubmit(fullData);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-3/4 h-[80vh] p-6 overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center py-4">Create Zone</h2>

        {/* Map */}
        <div className="w-full h-56 rounded-xl overflow-hidden mb-4">
          <iframe
            title="Venue Location"
            className="w-full h-full border-0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.2399944065098!2d77.2950659!3d28.6399961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdcb06cf62a5%3A0x7ef4e38eb391b1b4!2sChitra%20Vihar%2C%20Preet%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717165268882!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 text-sm">
          <div className="flex bg-[#F1EAFE] rounded-full p-2">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white font-medium">
              Polygon
            </button>
            <button className="px-6 py-2 rounded-full text-[#7942D1] font-medium">
              Radius
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Venue Name */}

            {/* Zone Code */}
            <div className="flex flex-col">
              <label className="label">Zone Code</label>
              <input
                {...register("zoneCode")}
                className="input text-sm"
                placeholder="Enter Zone Code"
              />
              <p className="text-red-500 text-sm">{errors.zoneCode?.message}</p>
            </div>

            {/* Zone Name */}
            <div className="flex flex-col">
              <label className="label">Zone Name</label>
              <input
                {...register("zoneName")}
                className="input text-sm"
                placeholder="Enter Zone Name"
              />
              <p className="text-red-500 text-sm">{errors.zoneName?.message}</p>
            </div>

            <div className="flex flex-col">
              <label className="label">Zone Capacity</label>
              <input
                type="number"
                {...register("capacity")}
                className="input text-sm"
                placeholder="Enter Capacity"
              />
              <p className="text-red-500 text-sm">{errors.capacity?.message}</p>
            </div>

            {/* Coordinates */}
            <div className="flex flex-col">
              <label className="label">Coordinates</label>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <input
                    {...register("latitude")}
                    type="number"
                    className="input text-sm"
                    placeholder="Latitude"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.latitude?.message}
                  </p>
                </div>
                <div className="w-1/2">
                  <input
                    {...register("longitude")}
                    type="number"
                    className="input text-sm"
                    placeholder="Longitude"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.longitude?.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Radius */}
            <div className="flex flex-col">
              <label className="label">Radius</label>
              <input
                {...register("radius")}
                type="number"
                className="input text-sm"
                placeholder="Enter Zone Radius"
              />
              <p className="text-red-500 text-sm">{errors.radius?.message}</p>
            </div>

            {/* Supervisor Name */}
            <div className="flex flex-col">
              <label className="label">Supervisor Name</label>
              <input
                {...register("supervisorName")}
                className="input text-sm"
                placeholder="Enter Supervisor Name"
              />
              <p className="text-red-500 text-sm">
                {errors.supervisorName?.message}
              </p>
            </div>

            {/* Supervisor Email */}
            <div className="flex flex-col">
              <label className="label">Supervisor Email</label>
              <input
                {...register("supervisorEmail")}
                className="input text-sm"
                placeholder="Enter Supervisor Email"
              />
              <p className="text-red-500 text-sm">
                {errors.supervisorEmail?.message}
              </p>
            </div>

            {/* Supervisor Contact */}
            <div className="flex flex-col">
              <label className="label">Supervisor Contact</label>
              <input
                {...register("supervisorContact")}
                className="input text-sm"
                placeholder="Enter Supervisor Contact No"
              />
              <p className="text-red-500 text-sm">
                {errors.supervisorContact?.message}
              </p>
            </div>

            {/* Upload Image */}
            <div className="flex flex-col">
              <label className="label">Upload Image</label>
              <input
                type="file"
                {...register("image")}
                accept="image/*"
                className="input text-sm"
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-sm bg-gradient-to-r from-[#7942D1] to-[#2A1647] text-white px-6 py-2 rounded-md hover:bg-purple-700"
            >
              Save Zone
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
