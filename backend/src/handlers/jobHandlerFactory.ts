import { JobHandler } from "../interfaces/jobHandler";
import { EmailHandler } from "./emailHandler";
import { ReportHandler } from "./reportHandler";

export class JobHandlerFactory {
  static getHandler(type: string): JobHandler {
    switch (type) {
      case "send_email":
        return new EmailHandler();
      case "generate_report":
        return new ReportHandler();
      default:
        throw new Error("Unknown job type");
    }
  }
}
