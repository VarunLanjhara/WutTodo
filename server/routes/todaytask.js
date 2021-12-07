import express from "express";
import TodayTask from "../models/todaytask.js";
import User from "../models/userSchema.js";

const router = express.Router();

//creating a task
router.post("/create_task", async (req, res) => {
  try {
    const { name, description, userId, completed } = req.body;
    const result = await TodayTask.create({
      name: name,
      description: description,
      userId: userId,
      completed: completed,
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

export default router;

//deleting a task
router.delete("/delete_task", async (req, res) => {
  try {
    const { id } = req.body;
    await TodayTask.findByIdAndDelete(id);
    res.json("Deleted :)");
  } catch (err) {
    console.log(err);
  }
});

//update a task
