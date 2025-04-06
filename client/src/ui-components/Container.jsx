import React from "react";

const Container = ({ children, maxWidth = "max-w-4xl", className = "" }) => {
  return (
    <div className={`flex justify-center px-4 ${className}`}>
      <div
        className={`${maxWidth} w-full bg-white shadow-xl rounded-2xl p-8 space-y-8 text-gray-800`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
