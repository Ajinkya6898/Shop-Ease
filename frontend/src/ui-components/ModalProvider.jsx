import { createContext, useContext, useState } from "react";
import {
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const ModalContext = createContext();

export function ModalProvider({ children, onModalClose, onConfirm, onCancel }) {
  const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });

  const dispatch = ({ type, message }) => {
    setModal({ isOpen: true, type, message });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: "", message: "" });
  };

  const typeStyles = {
    success: {
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
      bg: "bg-green-600",
    },
    error: {
      icon: <FaTimesCircle className="text-red-500 text-4xl" />,
      bg: "bg-red-600",
    },
    warning: {
      icon: <FaExclamationTriangle className="text-yellow-500 text-4xl" />,
      bg: "bg-yellow-600",
    },
  };

  return (
    <ModalContext.Provider value={{ dispatch }}>
      {children}

      {modal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white text-gray-950 p-6 rounded-2xl shadow-xl max-w-md w-full transform transition-all scale-95 relative">
            <div className="text-2xl font-bold pb-4 border-b flex justify-between items-center">
              <span
                className={`${
                  modal.type === "success"
                    ? "text-green-600"
                    : modal.type === "error"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {modal.type === "success"
                  ? "Success"
                  : modal.type === "error"
                  ? "Error"
                  : "Warning"}
              </span>

              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Message */}
            <div className="my-8 text-center">
              <h2 className="text-lg font-medium">{modal.message}</h2>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end mt-12">
              {modal.type === "warning" ? (
                <>
                  <button
                    onClick={onCancel || closeModal}
                    className="px-4 py-2 mr-4 text-gray-600 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm || closeModal}
                    className="px-4 py-2 text-white bg-brand-500 rounded-lg font-semibold hover:bg-brand-600 transition"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <button
                  onClick={onConfirm || closeModal}
                  className="px-4 py-2 text-white bg-brand-500 rounded-lg font-semibold hover:bg-brand-600 transition"
                >
                  OK
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
