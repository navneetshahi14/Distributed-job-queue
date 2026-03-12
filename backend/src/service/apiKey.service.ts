import { prisma } from "../config/prisma";
import { generateApiKey } from "../auth/utils/generateApiKey";

export class ApiKeyService {
  static async create(userId: string, name: string) {
    const key = generateApiKey();

    const apiKey = await prisma.apiKey.create({
      data: {
        name,
        key,
        userId,
      },
    });

    return apiKey;
  }

  static async list(userId: string) {
    return prisma.apiKey.findMany({
      where: { userId },
    });
  }
}
