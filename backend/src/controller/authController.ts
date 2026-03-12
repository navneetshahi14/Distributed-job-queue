import { Request, Response } from "express";
import { AuthService } from "../auth/auth.service";
import { generateToken } from "../auth/jwt";

export const login = async (req: Request, res: Response) => {
  const { type, data } = req.body;

  try {
    const user = await AuthService.authenticate(type, data);

    const token = generateToken(user.id);

    res.json({
      token,
      user,
    });
  } catch (err: any) {
    res.status(401).json({
      message: err.message,
    });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.signup(req.body);

    const token = generateToken(user.id);

    res.json({
      token,
      user,
    });
  } catch (err: any) {
    res.status(401).json({
      message: err.message,
    });
  }
};
