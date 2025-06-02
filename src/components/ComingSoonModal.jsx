
import React from "react";

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Coming Soon</h2>
        <p className="text-sm text-gray-600 mb-6">Export functionality is under development.</p>
        <button
          onClick={onClose}
          className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ComingSoonModal;
