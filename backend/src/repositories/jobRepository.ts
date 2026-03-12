import { prisma } from "../config/prisma";

export class JobRespository {
  async createJob(type: string, payload: any, userId: any, apiKeyId: any) {
    return prisma.job.create({
      data: {
        type,
        status: "pending",
        payload,

        userId,
        apiKeyId,
      },
    });
  }

  async updateStatus(id: string, status: string) {
    return prisma.job.update({
      where: { id },
      data: { status },
    });
  }

  async completeJob(id: string, result: any) {
    return prisma.job.update({
      where: { id },
      data: {
        status: "completed",
        result,
      },
    });
  }

  async failJob(id: string) {
    console.log("somethings", id);
    return prisma.job.update({
      where: { id },
      data: { status: "failed" },
    });
  }
}
