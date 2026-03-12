import crypto from "crypto";

export const generateApiKey = () => {
  return "sk_" + crypto.randomBytes(32).toString("hex");
};
