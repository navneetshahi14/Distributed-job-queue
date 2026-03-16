import React, { FC } from "react";
import { Button } from "../ui/button";

interface authInterface {
  authType: string;
}

const AuthHeader: FC<authInterface> = ({ authType }) => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center " style={{padding:20}}>
      <h1 className="font-extrabold text-2xl">JobForge</h1>
      <Button className="bg-transparent outline-none border-none capitalize " variant={"outline"}>
        {authType === "login" ? "Signup" : "login"}
      </Button>
    </div>
  );
};

export default AuthHeader;
