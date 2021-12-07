import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    userpfp: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "I am dumb",
    },
    favprojects: {
      type: Array,
      default: [],
    },
    todaytasks: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
