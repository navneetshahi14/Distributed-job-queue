import React from "react";
import { motion } from "motion/react";

const CTASection = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "#fff" }}
      whileInView={{ backgroundColor: "#000" }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen  text-[#014734] flex justify-center items-center overflow-hidden "
      style={{ padding: "7rem 1.5rem" }}
    >
      {/* 🌌 Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-green-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-emerald-400 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center flex flex-col gap-10 items-center max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Start Processing Jobs at Scale Today 🚀
        </h2>

        <p className="text-gray-400 mb-8">
          Build reliable, scalable background job systems with retries, priority
          queues, and distributed workers.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="px-8 py-4 bg-green-500 text-black rounded-lg font-semibold hover:scale-105 transition"
            style={{padding:"1rem 2rem"}}
          >
            Get Started
          </a>

          <a
            href="#"
            className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition"
            style={{padding:"1rem 2rem"}}
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CTASection;
