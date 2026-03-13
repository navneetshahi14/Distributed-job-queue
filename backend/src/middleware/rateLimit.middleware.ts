import { NextFunction, Request, Response } from "express";
import Redis from "ioredis";

const redis = new Redis();

export const rateLimitMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.apiKey;

  const key = `rate:${apiKey.id}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60);
  }

  if (count > apiKey.rateLimit) {
    return res.status(429).json({
      message: "Rate limit exceeded",
    });
  }

  next();
};
