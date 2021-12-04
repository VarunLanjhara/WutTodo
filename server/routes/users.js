import express from "express";
import mongoose from "mongoose";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Project from "../models/projectSchema.js";

const router = express.Router();

//register

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userbyemail = await User.findOne({ email });
    const userbyusername = await User.findOne({ username });
    if (userbyemail || userbyusername) {
      res.json("User already exists");
    } else {
      const hashpass = await bcrypt.hash(password, 12);
      const result = await User.create({
        email: email,
        password: hashpass,
        username: username,
      });
      const token = jwt.sign(
        {
          id: result._id,
        },
        "shhhheeeshhh",
        {
          expiresIn: "69h",
        }
      );
      res.json(token);
    }
  } catch (err) {
    console.log(err);
  }
});

//login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json("Invalid credentials");
    } else {
      const hashedpass = await bcrypt.compare(password, user.password);
      if (!hashedpass) {
        res.status(400).json("Invalid credentials");
      } else {
        const token = jwt.sign(
          {
            id: user._id,
          },
          "shhhheeeshhh",
          {
            expiresIn: "69h",
          }
        );
        res.json(token);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//update profile

router.put("/update_profile/:id", async (req, res) => {
  const { username, email, userpfp, bio } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      username: username,
      email: email,
      userpfp: userpfp,
      bio: bio,
    });
    const currentuser = await User.findById(req.params.id);
    res.json(currentuser);
  } catch (err) {
    console.log(err);
  }
});

export default router;

//get user by id

router.get(`/get_user/:id`, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.json(req.params.id);
    }
  } catch (err) {
    console.log(err);
  }
});

//add favourite projects
router.put("/favproject", async (req, res) => {
  const user = User.findById(req.body.userId);
  const project = Project.findById(req.body.projectId);
  await user.updateOne({
    $push: {
      favprojects: project._id,
    },
  });
});
