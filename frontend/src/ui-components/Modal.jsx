import { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const modalStyles = {
  success: "border-green-500 text-green-800",
  info: "border-blue-500 text-blue-800",
  warning: "border-yellow-500 text-yellow-800",
  error: "border-red-500 text-red-800",
};

const icons = {
  success: <AiOutlineCheckCircle className="text-green-500 text-3xl" />,
  info: <AiOutlineInfoCircle className="text-blue-500 text-3xl" />,
  warning: <AiOutlineWarning className="text-yellow-500 text-3xl" />,
  error: <AiOutlineCloseCircle className="text-red-500 text-3xl" />,
};

export default function Modal({
  type = "info",
  title,
  message,
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl border-l-4 ${modalStyles[type]} w-96`}
      >
        <div className="flex items-center space-x-3">
          {icons[type]}
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <p className="mt-3 text-gray-700">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
