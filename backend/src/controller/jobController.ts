import { Request, Response } from "express";
import { jobQueue } from "../queues/jobQueue";
import { JobRespository } from "../repositories/jobRepository";
import { delay } from "bullmq";

const jobRepo = new JobRespository();

export const CreateJob = async (req: Request, res: Response) => {

  const userId = req.user.id
  const apiKeyId = req.apiKey.id
  const { type, payload } = req.body;

  const job = await jobRepo.createJob(type, payload, userId,apiKeyId);


  await jobQueue.add(
    type,
    { jobId: job.id, payload },
    {
      jobId: job.id,
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
      delay: 10000,
      priority: 5,
    },
  );

  res.json({
    jobId: job.id,
    status: "pending",
    job: job,
  });
};
