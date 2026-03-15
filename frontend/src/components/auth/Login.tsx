import React from "react";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { EyeOffIcon, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div
        className="bg-background rounded shadow-2xs flex flex-col items-center justify-center w-[70%] gap-5 "
        style={{ padding: "30px 0px" }}
      >
        <h1 className="font-semibold text-3xl">Login</h1>
        <p className="w-[50%] text-center">
          Hey, Enter your details to get sign in to your account{" "}
        </p>
        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
          <Input
            className="w-[80%]"
            style={{ padding: "20px" }}
            placeholder="Enter your email"
          />
          <InputGroup className="w-[80%] " style={{ padding: "20px" }}>
            <InputGroupInput
              id="inline-end-input"
              type="password"
              placeholder="Enter password"
            />
            <InputGroupAddon align="inline-end">
              <EyeOffIcon />
            </InputGroupAddon>
          </InputGroup>
          <p className="text-sm flex justify-start m-0 w-[80%]">
            Having trouble in sign in?
          </p>
          <Button className="w-[80%] text-slate-800 bg-[#FFC584]" style={{ padding: "20px" }}>
            Sign in
          </Button>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
          <h1 className="">
            ---- Or Sign in with ----
          </h1>
          <Button className="w-[40%] text-slate-800 " variant={"outline"} style={{ padding: "20px" }}>
            Google
          </Button>
        </div>
        <div className="">
          <p className="text-sm">Don't have an account? <span className="font-bold cursor-pointer">SignUp</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
