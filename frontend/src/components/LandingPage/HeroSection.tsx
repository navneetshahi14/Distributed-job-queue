import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center min-h-[90vh] text-[#014734] overflow-hidden">
        <div
          className="absolute w-[80%] h-[80%] bg-box-grid  rounded-xl  [mask-image:radial-gradient(circle,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)] 
    [-webkit-mask-image:radial-gradient(circle,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_100%)]"
        ></div>

        {/* 🌌 Glow */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-400 opacity-20 blur-3xl rounded-full"></div> */}

        <h1 className="text-5xl text-center w-[70%] capitalize font-bold z-10">
          Process Millions of Background Jobs Without Breaking Your System
        </h1>
        <p className="text-lg w-[55%] text-center z-10">
          A fault-tolerant distributed queue with retries, priority jobs, and
          worker-based processing powered by Redis.
        </p>
        <Button
          className="bg-[#014734] text-[#A4CD86] z-10 "
          style={{ padding: "20px" }}
        >
          Start For Free
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
