import React, { useState } from "react";

type ApiKey = {
  name: string;
  key: string;
};

type ApiKeyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ApiKey) => void;
  existing?: ApiKey | null;
};

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existing,
}) => {
  const [name, setName] = useState<string>(existing?.name || "");
  const [key, setKey] = useState<string>(existing?.key || "");
  const [generated, setGenerated] = useState<boolean>(false);

  const generateKey = () => {
    const newKey = "sk_" + Math.random().toString(36).substring(2, 15);
    setKey(newKey);
    setGenerated(true);
  };

  const handleSave = () => {
    if (!name || !key) {
      alert("Fill all fields");
      return;
    }

    onSave({ name, key });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ padding: "1.5rem" }}
        className="bg-black border border-white/10 rounded-xl p-6 w-100"
      >
        {/* Header */}
        <h2
          style={{ marginBottom: "1rem" }}
          className="text-lg font-semibold text-white mb-4"
        >
          {existing ? "Update API Key" : "Create API Key"}
        </h2>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Key Name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          style={{ marginBottom: "1rem", padding: "0.5rem 0.75rem" }}
          className="w-full mb-4 px-3 py-2 rounded bg-white/5 border border-white/10 text-white"
        />

        {/* Key Input */}
        <div style={{ marginBottom: "1rem" }} className="flex gap-2 mb-4">
          <input
            type="text"
            value={key}
            readOnly
            style={{ padding: "0.5rem 0.75rem" }}
            className="flex-1 px-3 py-2 rounded bg-white/5 border border-white/10 text-gray-300"
          />

          <button
            onClick={generateKey}
            style={{ padding: "0.5rem 0.75rem" }}
            className="px-3 py-2 bg-green-500 text-black rounded hover:scale-105 transition"
          >
            Generate
          </button>
        </div>

        {/* Warning */}
        {generated && (
          <p
            style={{ marginBottom: "1rem" }}
            className="text-yellow-400 text-xs mb-4"
          >
            ⚠️ Save this key. You won’t be able to see it again.
          </p>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            style={{ padding: "0.5rem 1rem" }}
            className="px-4 py-2 border border-white/10 text-white rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            style={{ padding: ".5rem 1rem" }}
            className="px-4 py-2 bg-green-500 text-black rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
