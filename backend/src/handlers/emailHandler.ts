import { JobHandler } from "../interfaces/jobHandler";

export class EmailHandler implements JobHandler{
    async handle(data:any): Promise<void> {
        const {to} = data;

        console.log("Sending email to:", to);
        
        // simulating email sending
        await new Promise(resolve => setTimeout(resolve,2000))

        console.log("Email sent successfully")
    }
}