import { prisma } from "../../config/prisma";
import { AuthStrategy } from "./authStrategy";
import bcrypt from "bcrypt";

export class EmailStrategy implements AuthStrategy {
  async authentication(data: any) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found!");

    const match = await bcrypt.compare(password, user.password!);

    if (!match) throw new Error("Invalid password");

    return user;
  }
}
