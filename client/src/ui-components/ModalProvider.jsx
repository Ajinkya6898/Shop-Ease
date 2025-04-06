import { createContext, useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";

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
        <div className="animate-fadeInScale fixed inset-0 flex items-center justify-center bg-opacity-70 z-50">
          <div className="bg-white text-gray-950 p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-200 max-w-lg w-full transform transition-all scale-105 opacity-100">
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
                  <Button
                    onClick={modal.onCancel}
                    appearance="secondary"
                    variant="outlined"
                  >
                    Cancel
                  </Button>

                  <Button className="ml-4" onClick={modal.onConfirm}>
                    Continue
                  </Button>
                </>
              ) : (
                <Button onClick={modal.onConfirm}>OK</Button>
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
