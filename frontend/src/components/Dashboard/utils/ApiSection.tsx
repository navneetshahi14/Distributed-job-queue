import React, { useState } from "react";
import ApiKeyModal from "./ApiModal";

const initialKeys = [
  {
    id: 1,
    name: "Production Key",
    key: "sk_live_1234567890",
    created: "2026-04-20",
    lastUsed: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Testing Key",
    key: "sk_test_abcdefg",
    created: "2026-04-18",
    lastUsed: "1 day ago",
    status: "Inactive",
  },
];

const ApiSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [keys, setKeys] = useState(initialKeys);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      style={{ padding: "1.5rem" }}
      className=" rounded-xl bg-white/5 border border-white/10"
    >
      {/* Header */}
      <div
        style={{ marginBottom: "1.5rem" }}
        className="flex justify-between items-center"
      >
        <h2 className="text-xl font-semibold text-black">API Keys</h2>
        <button
          onClick={() => setOpen(true)}
          style={{ padding: "0.5rem 1rem" }}
          className="bg-[#014734] text-[#A4CD86] rounded-lg hover:scale-105 transition"
        >
          + Create Key
        </button>
      </div>

      {/* Table */}
      <div
        style={{ padding: "0.5rem" }}
        className="overflow-hidden h-[80vh] overflow-y-auto rounded-lg border border-white/10 shadow"
      >
        <table className="w-full text-sm ">
          <thead className="sticky top-0 z-10 bg-[#F5F2E9]/20 backdrop-blur-xl text-gray-400">
            <tr>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Name
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Key
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Created
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Last Used
              </th>
              <th style={{ padding: "0.75rem" }} className="text-left">
                Status
              </th>
              <th style={{ padding: "0.75rem" }} className="text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {keys.map((item) => (
              <tr
                key={item.id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td style={{ padding: "0.75rem" }} className="p-3">
                  {item.name}
                </td>

                {/* Masked Key */}
                <td
                  style={{ padding: "0.75rem" }}
                  className="p-3 text-gray-400"
                >
                  {item.key.slice(0, 6)}••••••••
                </td>

                <td style={{ padding: "0.75rem" }} className="p-3">
                  {item.created}
                </td>
                <td style={{ padding: "0.75rem" }} className="p-3">
                  {item.lastUsed}
                </td>

                {/* Status */}
                <td
                  style={{ padding: "0.75rem" }}
                  className={`p-3 ${
                    item.status === "Active"
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {item.status}
                </td>

                {/* Actions */}
                <td
                  style={{ padding: "0.75rem" }}
                  className="p-3 flex gap-3 justify-center"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(item.key);
                    }}
                    className="text-blue-400 hover:underline"
                  >
                    Copy
                  </button>
                  <button className="text-yellow-400 hover:underline">
                    Regen
                  </button>
                  <button className="text-red-400 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ApiKeyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSave={(data) => console.log(data)}
      />
    </div>
  );
};

export default ApiSection;
