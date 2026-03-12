import { prisma } from "../../config/prisma";
import { verifyGoogleToken } from "../utils/verifyGoogleToken";
import { AuthStrategy } from "./authStrategy";

export class GoogleStrategy implements AuthStrategy {
  async authentication(data: any) {
    const { googleToken } = data;

    const googleUser = await verifyGoogleToken(googleToken);

    let user = await prisma.user.findUnique({
      where: { email: googleUser.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: googleUser.email!,
          provider: "google",
        },
      });
    }

    return user;
  }
}
