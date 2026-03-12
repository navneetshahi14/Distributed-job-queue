import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const apiKeyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({
      message: "API key required",
    });
  }

  const key = await prisma.apiKey.findUnique({
    where: { key: apiKey as any },
    include: { user: true },
  });

  if (!key) {
    return res.status(403).json({
      message: "Invalid API Key",
    });
  }

  req.user = key.user;
  req.apiKey = key;

  next();
};
