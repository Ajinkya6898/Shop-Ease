import { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const alertStyles = {
  success: "bg-green-100 text-green-800 border-l-4 border-green-500",
  info: "bg-blue-100 text-blue-800 border-l-4 border-blue-500",
  warning: "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500",
  error: "bg-red-100 text-red-800 border-l-4 border-red-500",
};

const icons = {
  success: <AiOutlineCheckCircle className="text-green-600 text-xl" />,
  info: <AiOutlineInfoCircle className="text-blue-600 text-xl" />,
  warning: <AiOutlineWarning className="text-yellow-600 text-xl" />,
  error: <AiOutlineCloseCircle className="text-red-600 text-xl" />,
};

export default function Alert({ type = "info", message, onClose }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-md ${alertStyles[type]} max-w-full`}
    >
      <div className="mr-3">{icons[type]}</div>
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={() => setVisible(false)}
          className="ml-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
      )}
    </div>
  );
}
