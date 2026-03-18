import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { EyeIcon, EyeOffIcon, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import { motion } from "motion/react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full flex flex-col gap-10 items-center "
    >
      <AuthHeader authType="login" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-background rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xs flex flex-col items-center justify-center w-[70%] md:w-[50%] lg:w-[30%] gap-5 "
        style={{ padding: "30px 0px" }}
      >
        <h1 className="font-semibold text-3xl">Login</h1>
        <p className="w-[50%] text-center text-[0.85rem] md:text-sm ">
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
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputGroupAddon align="inline-end">
              {showPass ? (
                <EyeOffIcon
                  className="cursor-pointer"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <EyeIcon
                  className="cursor-pointer"
                  onClick={() => setShowPass(true)}
                />
              )}
            </InputGroupAddon>
          </InputGroup>
          <p className="text-sm flex justify-start m-0 w-[80%]">
            Having trouble in sign in?
          </p>
          <motion.div
            className="w-full flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="w-[80%] text-slate-800 bg-[#FFC584]"
              style={{ padding: "20px" }}
            >
              Sign In
            </Button>
          </motion.div>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
          <h1 className="">---- Or Sign in with ----</h1>
          <Button
            className="w-[40%] text-slate-800 "
            variant={"outline"}
            style={{ padding: "20px" }}
          >
            Google
          </Button>
        </div>
        <div className="">
          <p className="text-sm">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="font-bold cursor-pointer"
            >
              SignUp
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
