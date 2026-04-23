import { Button } from "@/components/ui/button";
import { CogIcon } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

const DashSidebar = () => {
  let location = useLocation();

  const dashMenu = [
    {
      icon: "",
      name: "Dashboard",
      link: "/",
    },
    {
      icon: "",
      name: "Jobs",
      link: "/jobs",
    },
    {
      icon: "",
      name: "Workers",
      link: "/workers",
    },
    {
      icon: "",
      name: "Failed Jobs",
      link: "/failedJobs",
    },
    {
      icon: "",
      name: "API Key",
      link: "/apikey",
    },
  ];

  return (
    <div className="h-screen w-60 bg-gray-500/10 shadow-inner rounded-r-xl  flex flex-col  items-center justify-between">
      <div style={{ padding: "20px 0 " }} className="">
        <h1 className="font-semibold text-2xl text-[#014734] capitalize">
          JobForge
        </h1>
      </div>

      <div
        style={{ padding: "10px 0px 10px 20px" }}
        className="w-full h-auto flex gap-10 flex-col"
      >
        {dashMenu.map((item, idx) => (
          <div
            style={{ padding: "10px" }}
            className={`rounded-l-4xl ${location.pathname == `/dashboard${item.link}` ? "bg-[#014734] text-[#A4CD86] " : "bg-red-900/10"} `}
          >
            <a href={`/dashboard${item.link}`}>{item.name}</a>
          </div>
        ))}
      </div>

      <div
        style={{ margin: "0 0 30px 0" }}
        className="w-full flex justify-center"
      >
        <Button className="bg-[#A4CD86] hover:bg-[#99d56e] text-[#014734] w-[80%] cursor-pointer flex items-center justify-center">
          <CogIcon size={24} color="#014734" />
          <span>Setting</span>
        </Button>
      </div>
    </div>
  );
};

export default DashSidebar;
