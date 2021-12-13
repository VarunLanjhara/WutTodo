import mongoose from "mongoose";

const projecttaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    projectId: {
      type: String,
    },
    completed: {
      type: String,
      default: "false",
    },
  },
  { timestamps: true }
);

const ProjectTask = mongoose.model("projecttasks", projecttaskSchema);
export default ProjectTask;
