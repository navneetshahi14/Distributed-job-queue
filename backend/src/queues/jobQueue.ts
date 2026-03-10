import { Queue } from "bullmq";
import { connection } from "../config/redis";


export const jobQueue = new Queue("jobs", {
  connection:connection as any,
});
