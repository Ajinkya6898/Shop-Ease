import React from "react";
import PageHeader from "./PageHeader";

const PageActionContainer = ({ pageHeading, rightContent }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <PageHeader pageHeading={pageHeading} />
      </div>
      <div className="flex flex-wrap gap-3 justify-start md:justify-end">
        {rightContent}
      </div>
    </div>
  );
};

export default PageActionContainer;
