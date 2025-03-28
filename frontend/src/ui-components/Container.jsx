import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="py-12 flex items-center justify-center p-6">
        <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 space-y-8 text-gray-800">
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
