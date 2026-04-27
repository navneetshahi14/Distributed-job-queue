import React from "react";
import DashSidebar from "./utils/DashSidebar";
import JobBody from "./utils/JobBody";

const JobBoard = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <DashSidebar />
      <JobBody/>
    </div>
  );
};

export default JobBoard;
