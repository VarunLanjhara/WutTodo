import mongoose from "mongoose";

const favprojectSchema = mongoose.Schema({
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

const favProject = mongoose.model("favproject", favprojectSchema);
export default favProject;
