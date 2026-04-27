import React from "react";
import DashSidebar from "./utils/DashSidebar";
import WorkerSection from "./utils/WorkerSection";
import Header from "./utils/Header";

const WorkerBoard = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <DashSidebar />
      <div
        style={{ padding: "10px", margin: "10px" }}
        className="w-full h-screen overflow-hidden rounded "
      >
        <Header name="Worker Nodes" description="Monitor distributed worker performance" />

        <WorkerSection />
      </div>
    </div>
  );
};

export default WorkerBoard;
