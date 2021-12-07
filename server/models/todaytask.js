import mongoose from "mongoose";

const todaytaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    userId: {
      type: String,
    },
    completed: {
      type: String,
      default: "false",
    },
  },
  { timestamps: true }
);

const TodayTask = mongoose.model("todaytask", todaytaskSchema);
export default TodayTask;
