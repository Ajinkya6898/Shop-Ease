import { createContext, useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });

  const closeModal = () => {
    setModal({
      isOpen: false,
      type: "",
      message: "",
      onConfirm: null,
      onCancel: null,
    });
  };

  const modalDispatch = ({ type, message, onConfirm, onCancel }) => {
    setModal({
      isOpen: true,
      type,
      message,
      onConfirm: () => {
        if (onConfirm) onConfirm();
        closeModal();
      },
      onCancel: () => {
        if (onCancel) onCancel();
        closeModal();
      },
    });
  };

  return (
    <ModalContext.Provider value={{ modalDispatch }}>
      {children}

      {modal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-70 z-50">
          <div className="bg-white text-gray-950 p-6 rounded-2xl shadow-2xl border border-gray-300 max-w-lg w-full transform transition-all scale-105 opacity-100">
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

            <div className="my-8 text-center">
              <h2 className="text-lg font-medium">{modal.message}</h2>
            </div>

            <div className="flex justify-end mt-12">
              {modal.type === "warning" ? (
                <>
                  <button
                    onClick={modal.onCancel}
                    className="px-4 py-2 mr-4 text-gray-600 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={modal.onConfirm}
                    className="px-4 py-2 text-white bg-brand-500 rounded-lg font-semibold hover:bg-brand-600 transition"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <button
                  onClick={modal.onConfirm}
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
