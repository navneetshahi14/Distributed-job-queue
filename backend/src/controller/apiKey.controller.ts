import { Request, Response } from "express";
import { ApiKeyService } from "../service/apiKey.service";

export const createApiKey = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const apiKey = await ApiKeyService.create(req.user.id, name);

    res.json(apiKey);
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const listApiKeys = async (req: Request, res: Response) => {
  const key = await ApiKeyService.list(req.user.id);
  res.json(key);
};
