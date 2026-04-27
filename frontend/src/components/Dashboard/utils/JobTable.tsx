import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const jobsData = [
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
  { id: "#1023", type: "Email", status: "Completed", worker: "W1", retry: 0 },
  { id: "#1024", type: "Video", status: "Processing", worker: "W3", retry: 1 },
  { id: "#1025", type: "Payment", status: "Failed", worker: "W2", retry: 3 },
  {
    id: "#1026",
    type: "Notification1",
    status: "Completed",
    worker: "W4",
    retry: 0,
  },
];

const JobsTable = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    return (
      (filter === "All" || job.status === filter) &&
      job.id.toLowerCase().includes(search.toLowerCase())
    );
  });

  const selectItem = [
    {
      title: "ALL",
      val: "All",
    },
    {
      title: "COMPLETED",
      val: "Completed",
    },
    {
      title: "PROCESSING",
      val: "Processing",
    },
    {
      title: "FAILED",
      val: "Failed",
    },
  ];

  return (
    <div
      style={{ padding: "1.5rem" }}
      className="p-6 rounded-xl bg-white/5 border border-white/10 h-full flex flex-col"
    >
      {/* 🔍 Top Controls */}
      <div
        style={{ marginBottom: "1rem" }}
        className="flex justify-between items-center mb-4"
      >
        {/* Filter */}
        <Select onValueChange={(val)=> setFilter(val)}>
          <SelectTrigger style={{ padding: "10px" }} className="w-40">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent style={{ padding: "10px" }} className="flex">
            {selectItem.map((item, idx) => (
              <SelectItem
                style={{ padding: "5px 20px" }}
                className="px-4 py-2
                        hover:bg-black/20 
                        focus:bg-black/20 
                        data-highlighted:bg-black/20 
                        data-highlighted:text-white"
                value={item.val}
                key={idx}
              >
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Job ID..."
          value={search}
          style={{padding:"5px 10px"}}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black/20 border border-white/10 text-white rounded-lg"
        />
      </div>

      {/* 📋 Table */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white text-gray-400 sticky top-0 z-10">
            <tr>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Job ID
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Type
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Status
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Retry
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Worker
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="overflow-y-auto">
            {filteredJobs.map((job, i) => (
              <tr
                key={i}
                className="border-t border-white/10 hover:bg-white/70 transition"
              >
                <td style={{ padding: "0.75rem" }}>{job.id}</td>
                <td style={{ padding: "0.75rem" }}>{job.type}</td>

                {/* Status */}
                <td
                  style={{ padding: "0.75rem" }}
                  className={` font-medium ${
                    job.status === "Completed"
                      ? "text-green-400"
                      : job.status === "Failed"
                        ? "text-red-400"
                        : "text-yellow-400"
                  }`}
                >
                  {job.status}
                </td>

                {/* Retry */}
                <td style={{ padding: "0.75rem" }}>{job.retry}</td>

                {/* Worker */}
                <td style={{ padding: "0.75rem" }}>{job.worker}</td>

                {/* Action */}
                <td style={{ padding: "0.75rem" }}>
                  {job.status === "Failed" ? (
                    <button
                      style={{ padding: "0.25rem 0.75rem" }}
                      className="text-sm bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition"
                    >
                      Retry
                    </button>
                  ) : (
                    <span className="text-gray-500 text-sm">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsTable;
