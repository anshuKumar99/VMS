import React from "react";

const CreateZoneModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg w-2/3 h-[80vh] p-6 overflow-y-auto relative">
        <h2 className="text-xl font-bold mb-4">Create Zone</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Zone Code
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter zone code"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Zone Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter zone name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Region
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter region"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          >
            Save Zone
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateZoneModal;
