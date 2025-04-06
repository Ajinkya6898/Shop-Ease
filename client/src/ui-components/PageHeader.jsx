import React from "react";

const PageHeader = ({ pageHeading }) => {
  return (
    <h5 className="text-2xl font-semibold  text-center text-gray-900 ">
      {pageHeading}
    </h5>
  );
};

export default PageHeader;
