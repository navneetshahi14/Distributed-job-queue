import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../auth/jwt";
import { prisma } from "../config/prisma";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoder: any = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoder.userId },
    });

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
