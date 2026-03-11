import express from "express";
import "dotenv/config";
import { CreateJob } from "./controller/jobController";
import { prisma } from "./config/prisma";
import { serverAdapter } from "./dashboard/queueDashboard";
import { getQueueMetrics } from "./controller/metricsController";
import { Server } from "socket.io";
import http from "http";
const app = express();

app.use(express.json());

app.use("/admin/queues", serverAdapter.getRouter());

app.post("/jobs", CreateJob);

app.get("/job/:id", async (req, res) => {
  const job = await prisma.job.findUnique({
    where: { id: req.params.id },
  });
  res.json(job);
});

app.get("/metrics/queue", getQueueMetrics);

app.get("/", (req, res) => {
  res.send("Job queue system running");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

server.listen(3000, () => console.log(`Server is running on port 3000`));

export { io };
