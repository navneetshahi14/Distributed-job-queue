import React from "react";
import { motion } from "motion/react";

const workers = [
  { id: "W1", status: "Active", jobs: 120 },
  { id: "W2", status: "Idle", jobs: 80 },
  { id: "W3", status: "Processing", jobs: 150 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W4", status: "Active", jobs: 95 },
  { id: "W1", status: "Active", jobs: 120 },
  { id: "W2", status: "Idle", jobs: 80 },
  { id: "W3", status: "Processing", jobs: 150 },
];

const WorkerSection = () => {
  return (
    <div
      style={{ padding: "1.5rem" }}
      className=" rounded-xl w-full bg-white/5 border border-white/10 "
    >
      {/* Heading */}
      {/* <div style={{ marginBottom: "1.5rem" }}>
        <h2 className="text-xl font-semibold text-[#014734] leading-2">
          Worker Nodes
        </h2>
        <p className="text-gray-400 text-sm">
          Monitor distributed worker performance
        </p>
      </div> */}

      {/* Grid */}
      <div className="h-[88vh] w-full grid md:grid-cols-4 gap-6 overflow-y-auto">
        {workers.map((worker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01 }}
            style={{ padding: "1rem" }}
            className=" rounded-xl bg-black/40 border border-white/10 hover:scale-102 transition"
          >
            {/* Top */}
            <div
              style={{ marginBottom: "0.75rem" }}
              className="flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-[#014734]">
                {worker.id}
              </h3>

              {/* Status Dot */}
              <span
                className={`w-2 h-2 rounded-full ${
                  worker.status === "Active"
                    ? "bg-green-400"
                    : worker.status === "Processing"
                      ? "bg-yellow-400"
                      : "bg-gray-400"
                }`}
              />
            </div>

            {/* Status */}
            <p
              style={{ marginBottom: "0.5rem" }}
              className="text-sm text-gray-50 "
            >
              {worker.status}
            </p>

            {/* Jobs */}
            <p className="text-lg font-semibold text-green-400">
              {worker.jobs} jobs
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkerSection;
