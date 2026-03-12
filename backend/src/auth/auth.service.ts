import { prisma } from "../config/prisma";
import { EmailStrategy } from "./strategies/emailStrategy";
import { GoogleStrategy } from "./strategies/googleStrategy";
import bcrypt from "bcrypt";

export class AuthService {
  static async authenticate(type: string, data: any) {
    let strategy;

    if (type === "email") {
      strategy = new EmailStrategy();
    }

    if (type === "google") {
      strategy = new GoogleStrategy();
    }

    if (!strategy) {
      throw new Error("Invalid authentication type");
    }

    return strategy?.authentication(data);
  }

  static async signup(data: any) {
    const { email, password } = data;

    const exisitingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (exisitingUser) {
      throw new Error("User already existing");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password,
        provider: "email",
      },
    });

    return user;
  }
}
