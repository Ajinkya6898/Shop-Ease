import React from "react";

const PageHeader = ({ pageHeading }) => {
  return (
    <h5 className="text-3xl font-bold  text-center text-gray-900 ">
      {pageHeading}
    </h5>
  );
};

export default PageHeader;
