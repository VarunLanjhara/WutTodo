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
  },
  { timestamps: true }
);

const TodayTask = mongoose.model("todaytask", todaytaskSchema);
export default TodayTask;
