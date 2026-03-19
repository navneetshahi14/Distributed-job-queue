import React from "react";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import MouseIndicator from "./MouseIndicator";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const bgY = useTransform(scrollY, [0, 500], [0, 60]);
  const contentY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <>
      <motion.div
        style={{ opacity, }}
        className="flex flex-col gap-10 justify-center items-center min-h-[90vh] text-[#014734] overflow-hidden  "
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute w-[80%] h-[80%] bg-box-grid  rounded-xl blur-[1px]
  mask-[radial-gradient(circle,rgba(0,0,0,1)_35%,rgba(0,0,0,0)_100%)]"
        ></motion.div>

        <motion.h1
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl w-[70%] font-bold leading-tight text-center"
        >
          Process Millions of Background Jobs Without Breaking Your System
        </motion.h1>
        <motion.p
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg w-[55%] text-center"
        >
          A fault-tolerant distributed queue with retries, priority jobs, and
          worker-based processing powered by Redis.
        </motion.p>
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            style={{ padding: "20px" }}
            className="bg-[#014734] text-[#A4CD86] px-8 py-5 text-lg "
          >
            Start For Free
          </Button>
        </motion.div>
        <MouseIndicator />
      </motion.div>
    </>
  );
};

export default HeroSection;
