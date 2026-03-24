import React from "react";
import { motion } from "motion/react";

const ArchitectureSection = () => {
  const steps = ["Client", "API Server", "Redis Queue", "Workers", "Database"];

  return (
    // <div
    //   style={{ padding: "1.5em 0.375em" }}
    //   className="bg-transparent text-[#014734] flex flex-col items-center"
    // >
    //   <motion.div
    //     initial={{ opacity: 0, y: 40 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //     className="text-center"
    //     style={{marginBottom:"4rem"}}
    //   >
    //     <h2 className="text-5xl font-bold">System Architecture</h2>
    //     <p className="text-gray-400 " style={{marginTop:"0.5rem"}}>
    //       How jobs flow through the distributed system.
    //     </p>
    //   </motion.div>

    //   <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center ">
    //     <motion.div
    //       initial={{ opacity: 0, x: -60 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       <h3 className="text-2xl font-semibold " style={{marginBottom:"0.5rem"}}>
    //         Efficient Job Processing Pipeline
    //       </h3>

    //       <p className="text-[#007858] " style={{marginBottom:"1.25rem"}}>
    //         Our system follows a producer-consumer model where jobs are pushed
    //         into a Redis-backed queue and processed by distributed workers with
    //         retry mechanisms and fault tolerance.
    //       </p>

    //       <ul className="space-y-3 text-[#A4CD86]">
    //         <li>• Client sends job request</li>
    //         <li>• API pushes job into Redis queue</li>
    //         <li>• Workers consume and process jobs</li>
    //         <li>• Failed jobs are retried or moved to DLQ</li>
    //       </ul>
    //     </motion.div>

    //     <motion.div
    //       initial={{ opacity: 0, x: 60 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.6 }}
    //       className="flex flex-wrap justify-center gap-6  "
    //     >
    //       {["Client", "API Server", "Redis Queue", "Workers", "Database"].map(
    //         (item, index) => (
    //           <motion.div
    //             key={index}
    //             whileHover={{ scale: 1.05 }}
    //             style={{padding:"0.6rem 0.75rem"}}
    //             className=" text-sm rounded-xl bg-[#007858]/30 border border-[#444444] backdrop-blur-lg text-center"
    //             transition={{delay:index*0.2}}
    //           >
    //             {item}<span className="text-green-700 text-xl">→</span>
    //           </motion.div>
    //         ),
    //       )}
    //     </motion.div>
    //   </div>
    // </div>
    <div
      style={{ padding: "1.5em 0.375em" }}
      className="min-h-[60vh] bg-transparent text-[#014734] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center "
        style={{ marginBottom: "4rem" }}
      >
        <h2 className="text-5xl font-bold">System Architecture</h2>
        <p className="text-gray-400 " style={{ marginTop: "1rem" }}>
          End-to-End flow of job processing in a distributed system.
        </p>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="rounded-xl bg-black/5 border border-gray-400/50 backdrop-blur-lg text-center min-w-[120px] hover:scale-105 transition "
              style={{ padding: "1rem 0.75rem" }}
            >
              {step}
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="text-green-400 text-2xl"
              >
                {"->"}
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6, delay:0.4}}
        className= " text-center"
        style={{marginTop:"4rem"}}
      >
        <p className="text-gray-400">   
            Failed jobs are retried automatically or moved to a{" "}
            <span className="text-green-400">Dead Letter Queue(DLQ)</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ArchitectureSection;
