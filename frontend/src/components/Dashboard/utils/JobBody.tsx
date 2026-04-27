import React from "react";
import Header from "./Header";
import JobsTable from "./JobTable";

const JobBody = () => {
  return (
    <div
      style={{ padding: "10px", margin: "10px" }}
      className=" w-full overflow-hidden rounded "
    >
      <Header name="Jobs" description="Jobs In Queue" />
      

      <JobsTable />
    </div>
  );
};

export default JobBody;
