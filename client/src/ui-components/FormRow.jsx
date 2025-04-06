import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const FormRow = ({ label, children, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      {children}
      {error && (
        <p className="mt-4 text-base text-red-600 flex items-center gap-3 animate-fadeIn">
          <FaExclamationCircle /> {error}
        </p>
      )}
    </div>
  );
};

export default FormRow;
