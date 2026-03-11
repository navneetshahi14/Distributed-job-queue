import { prisma } from "../config/prisma";

export const updateHeartbeat = async (workerId: string) => {
  await prisma.worker.upsert({
    where: { id: workerId },
    update: {
      lastHeartbeat: new Date(),
    },
    create: {
      id: workerId,
      lastHeartbeat: new Date(),
    },
  });
};
