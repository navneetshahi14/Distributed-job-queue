import React from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-between w-full max-h-[10vh] bg-transparent"
      style={{ padding: "20px" }}
    >
      <div className=" flex gap-20 justify-center items-center">
        <h1
          onClick={() => navigate("/")}
          className="font-extrabold text-xl cursor-pointer text-[#014734]"
        >
          JobForge
        </h1>
        <ul className="flex gap-10 [&>li]:cursor-pointer text-sm justify-center items-center">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <Button onClick={()=>navigate("/login")} className="bg-[#f0f0f0] text-[#014734] shadow-2xl  border border-gray-300 capitalize " style={{padding:"20px"}}>Log in</Button>
        <Button onClick={()=>navigate("/signup")} className="bg-[#014734] text-[#A4CD86] " style={{padding:"20px"}}>Start Now</Button>
      </div>
    </div>
  );
};

export default Navbar;
