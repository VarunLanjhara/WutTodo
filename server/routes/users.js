import express from "express";
import mognoose from "mongoose";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();

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
      res.json(result);
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json("No user found");
    } else {
      const hashedpass = await bcrypt.compare(password, user.password);
      if (!hashedpass) {
        res.status(400).json("Invalid creadentials");
      } else {
        res.json(user);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
