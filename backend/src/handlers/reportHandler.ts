import { JobHandler } from "../interfaces/jobHandler";

export class ReportHandler implements JobHandler {
  async handle(data: any): Promise<void> {
    console.log("Generating report for user:", data.userId);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Report generated successfully");
  }
}
