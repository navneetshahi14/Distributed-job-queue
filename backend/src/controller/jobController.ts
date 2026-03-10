import { Request, Response } from "express";
import { jobQueue } from "../queues/jobQueue";

export const CreateJob = async (req: Request, res: Response) => {
  const { type, payload } = req.body;

  const job = await jobQueue.add(type, payload);

  res.json({
    job,
  });
};
