import { Queue } from "bullmq";
import { connection } from "../config/redis";

export const deadLetterQueue = new Queue("dead-jobs", {
  connection: connection as any,
});
