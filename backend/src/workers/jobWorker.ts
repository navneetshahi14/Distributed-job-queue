import { Worker } from "bullmq";
import { connection } from "../config/redis";
import { EmailHandler } from "../handlers/emailHandler";
import { JobHandlerFactory } from "../handlers/jobHandlerFactory";


const worker = new Worker(
    "jobs",
    async(job)=>{
        console.log("Job received:",job.name);
        const handler = JobHandlerFactory.getHandler(job.name)

        await handler.handle(job.data);
    },
    {
        connection:connection as any
    }
)

worker.on("completed",(job)=>{
    console.log(`Job ${job.id} completed`)
})

worker.on("failed",(job,err)=>{
    console.log(`Job ${job?.id} failed`,err)
})

