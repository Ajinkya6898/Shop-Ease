import React from "react";

const Container = ({ children, maxWidth = "max-w-4xl", className = "" }) => {
  return (
    <div className={`flex justify-center px-4 ${className}`}>
      <div
        className={`${maxWidth} w-full bg-white rounded-2xl p-8 space-y-8 text-gray-800 shadow-[0_0_40px_-10px_rgba(0,0,0,0.25)]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
