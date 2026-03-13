import { NextFunction, Request, Response } from "express";

export const requirePermission = (permission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const permissions = req.apiKey.permissions;

    if (!permissions.include(permission)) {
      return res.status(403).json({
        message: "Permission denied",
      });
    }

    next();
  };
};
