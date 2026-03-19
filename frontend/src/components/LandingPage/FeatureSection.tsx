import React from "react";
import { motion } from "motion/react";
import { Server, RefreshCw, Layers, Zap, Activity, Shield } from "lucide-react";

const features = [
  {
    icon: <Server size={28} />,
    title: "Distributed Workers",
    desc: "Scale horizontally with multiple worker nodes processing jobs in parallel.",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Retry Mechanism",
    desc: "Automatic retries with exponential backoff for failed jobs.",
  },
  {
    icon: <Layers size={28} />,
    title: "Priority Queues",
    desc: "Process critical jobs first with priority-based scheduling.",
  },
  {
    icon: <Zap size={28} />,
    title: "High Throughput",
    desc: "Efficient job processing powered by Redis and optimized workers.",
  },
  {
    icon: <Activity size={28} />,
    title: "Real-time Monitoring",
    desc: "Track jobs, workers, and queue status in real-time dashboard.",
  },
  {
    icon: <Shield size={28} />,
    title: "Fault Tolerance",
    desc: "System designed to handle failures without losing jobs.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-transparent text-black py-20 px-6 h-screen flex justify-evenly flex-col items-center gap-10 ">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">Powerful Features</h2>
        <p className="text-gray-400 mt-4">
          Everything you need to process background jobs at scale.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 3 === 0 ? -80 : index % 3 === 2 ? 80 : 0,
              y: index % 3 === 1 ? 40 : 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              //   ease: "easeOut",
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ margin: "-100px" }} // optional tuning
            style={{ padding: "50px" }}
            className="p-6 rounded-xl border border-black/30 bg-gray-50 backdrop-blur-lg flex flex-col justify-center items-center hover:scale-105 transition gap-5"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="mb-4 text-green-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </div>
            <p className="text-gray-400 text-sm text-center">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
