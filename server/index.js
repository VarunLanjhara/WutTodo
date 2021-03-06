import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import projectRouter from "./routes/project.js";
import todaytaskRouter from "./routes/todaytask.js";
import projectTaskRouter from "./routes/projecttasks.js";
import favProjectRouter from "./routes/favproject.js";

const app = express();

dotenv.config({
  path: "./config.env",
});

app.use(express.json());
app.use(
  cors({
    origin: ["https://wuttodo.netlify.app", "http://localhost:3000"],
  })
);

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/todaytask", todaytaskRouter);
app.use("/projecttask", projectTaskRouter);
app.use("/favproject", favProjectRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGOOSE_CONNECTION, () => {
    console.log("Connected");
  });
});
