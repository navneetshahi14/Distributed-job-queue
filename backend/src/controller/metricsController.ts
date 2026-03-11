import { Request, Response } from "express";
import { jobQueue } from "../queues/jobQueue";

export const getQueueMetrics = async (req: Request, res: Response) => {
  const waiting = await jobQueue.getWaitingCount();
  const active = await jobQueue.getActiveCount();
  const completed = await jobQueue.getCompletedCount();
  const failed = await jobQueue.getFailedCount();
  const delayed = await jobQueue.getDelayedCount();

  res.json({
    waiting,
    active,
    completed,
    failed,
    delayed,
  });
};
