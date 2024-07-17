import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-2">Notification</h2>
        <p className="mb-4">{message}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
