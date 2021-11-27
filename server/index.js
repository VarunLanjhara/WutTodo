import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./config.env",
});

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGOOSE_CONNECTION, () => {
    console.log("Connected");
  });
});
