import React from "react";
import DashSidebar from "./utils/DashSidebar";
import Header from "./utils/Header";
import ApiSection from "./utils/ApiSection";

const ApiKeyBoard = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <DashSidebar />

      <div
        style={{ padding: "10px", margin: "10px" }}
        className="w-full h-screen overflow-hidden rounded "
      >
        {/* <Header
          name="API Keys"
        /> */}

        <ApiSection />
      </div>
    </div>
  );
};

export default ApiKeyBoard;
