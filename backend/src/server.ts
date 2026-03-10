import express from "express";
import { CreateJob } from "./controller/jobController";


const app = express();

app.use(express.json());

app.post("/jobs", CreateJob);

app.get("/", (req, res) => {
  res.send("Job queue system running");
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
