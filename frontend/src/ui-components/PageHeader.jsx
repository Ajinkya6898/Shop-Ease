import React from "react";

const PageHeader = ({ pageHeading }) => {
  return (
    <h5 className="text-3xl font-bold text-start text-gray-950">
      {pageHeading}
    </h5>
  );
};

export default PageHeader;
