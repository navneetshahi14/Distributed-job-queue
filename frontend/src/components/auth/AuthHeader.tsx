import React, { FC } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface authInterface {
  authType: string;
}

const AuthHeader: FC<authInterface> = ({ authType }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if(authType === "login"){
      navigate('/signup')
    }else{
      navigate("/login")
    }
  };
  return (
    <div
      className="w-full h-[10vh] flex justify-between items-center "
      style={{ padding: 20 }}
    >
      <h1 onClick={()=>navigate("/")} className="font-extrabold text-2xl">JobForge</h1>
      <Button
        className="bg-transparent outline-none border-none capitalize "
        variant={"outline"}
        onClick={handleNavigate}
      >
        {authType === "login" ? "Signup" : "login"}
      </Button>
    </div>
  );
};

export default AuthHeader;
