import React from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
// import SlotCounter from "react-slot-counter";

const DashboardPreview = () => {
  return (
    <div
      className="bg-transparent text-[#014734] flex flex-col items-center"
      style={{ padding: "6rem 1.5rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="text-center "
        style={{ marginBottom: "4rem" }}
      >
        <h2 className="text-4xl font-bold">Real-time Dashboard</h2>
        <p className="text-gray-400 " style={{ marginTop: "1rem" }}>
          Monitor jobs, workers, and queue peerformance in real time.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl rounded-2xl border border-gray-800/70 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,197,94,0.15)]"
        style={{ padding: "1.5rem" }}
      >
        {/* Stats Row */}
        <div
          className="grid md:grid-cols-4 gap-6 "
          style={{ marginBottom: "2rem" }}
        >
          {[
            { label: "Jobs Processed", value: 124532 },
            { label: "Active Workers", value: 12 },
            { label: "Failed Jobs", value: 32 },
            { label: "Queue Size", value: 1204 },
          ].map((stat, i) => (
            <div
              key={i}
              className=" rounded-xl bg-black/40 border border-green-900"
              style={{ padding: "1rem" }}
            >
              <p className="text-sm text-[#014734]">{stat.label}</p>
              <h3 className="text-2xl font-semibold text-green-400">
                
              </h3>
              <h3 className="text-2xl font-semibold text-green-400 ">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Job Table */}
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-gray-400">
              <tr>
                <th style={{ padding: "0.75rem" }} className="p-3 text-left">
                  Job ID
                </th>
                <th style={{ padding: "0.75rem" }} className="p-3 text-left">
                  Type
                </th>
                <th style={{ padding: "0.75rem" }} className="p-3 text-left">
                  Status
                </th>
                <th style={{ padding: "0.75rem" }} className="p-3 text-left">
                  Worker
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  id: "#1023",
                  type: "Email",
                  status: "Completed",
                  worker: "W1",
                },
                {
                  id: "#1024",
                  type: "Video",
                  status: "Processing",
                  worker: "W3",
                },
                {
                  id: "#1025",
                  type: "Payment",
                  status: "Failed",
                  worker: "W2",
                },
                {
                  id: "#1026",
                  type: "Notification",
                  status: "Completed",
                  worker: "W4",
                },
              ].map((job, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td style={{ padding: "0.75rem" }}>{job.id}</td>
                  <td style={{ padding: "0.75rem" }}>{job.type}</td>
                  <td
                    className={` ${
                      job.status === "Completed"
                        ? "text-green-400"
                        : job.status === "Failed"
                          ? "text-red-400"
                          : "text-yellow-400"
                    }`}
                    style={{ padding: "0.75rem" }}
                  >
                    {job.status}
                  </td>
                  <td style={{ padding: "0.75rem" }}>{job.worker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPreview;
