import { Worker } from "bullmq";
import { connection } from "../config/redis";
import { EmailHandler } from "../handlers/emailHandler";
import { JobHandlerFactory } from "../handlers/jobHandlerFactory";
import { JobRespository } from "../repositories/jobRepository";
import { deadLetterQueue } from "../queues/deadLetterQueue";
import { updateHeartbeat } from "../service/workerHealth";
import { io } from "../server";

const jobRepo = new JobRespository();

const worker = new Worker(
  "jobs",
  async (job: any) => {
    console.log("Job received:", job.type);
    const { jobId, payload } = job.data;
    await jobRepo.updateStatus(jobId, "processing");

    const handler = JobHandlerFactory.getHandler(job.name);

    await handler.handle(payload);
    await jobRepo.completeJob(jobId, "completed");

    setInterval(async () => {
      await updateHeartbeat("worker-1");
    }, 5000);
  },
  {
    connection: connection as any,
  },
);

worker.on("stalled", (jobId) => {
  console.log(`Job ${jobId} stalled`);
});

worker.on("completed", async (job) => {
  io.emit("job_completed", {
    jobId: job.id,
  });
  console.log(`Job ${job?.id} completed`);
});

worker.on("failed", async (job: any) => {
  console.log(`Job ${job?.id} failed attempt ${job.attemptsMade}`);

  const { jobId } = job.data;

  if (job.attemptsMade >= job.opts.attempts) {
    console.log("Moving job to dead letter queue");

    await deadLetterQueue.add("dead-job", job.data);

    await jobRepo.failJob(jobId);
  }
});
