import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  color: {
    type: String,
    default: "gray",
  },
  tasks: {
    type: Array,
    default: [],
  },
  comments: {
    type: Array,
    default: [],
  },
});

const Project = mongoose.model("project", projectSchema);
export default Project;
