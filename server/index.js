import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import projectRouter from "./routes/project.js";

const app = express();

dotenv.config({
  path: "./config.env",
});

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/projects", projectRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGOOSE_CONNECTION, () => {
    console.log("Connected");
  });
});
