import express from "express";
import TodayTask from "../models/todaytask.js";
import User from "../models/userSchema.js";

const router = express.Router();

//get tasks
router.get("/get_tasks/:userId", async (req, res) => {
  try {
    const tasks = await TodayTask.find({
      userId: req.params.userId,
    });
    if (tasks) {
      res.json(tasks);
    } else {
      res.json("No Tasks Found :(");
    }
  } catch (err) {
    console.log(err);
  }
});

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
    const tasks = await TodayTask.find({
      userId: req.body.userId,
    });
    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
});

//deleting a task
router.delete("/delete_task", async (req, res) => {
  try {
    const { id } = req.body;
    await TodayTask.findByIdAndDelete(id);
    if (!id) {
      res.json("Id is not there sad");
    } else {
      const tasks = await TodayTask.find({
        userId: req.body.userId,
      });
      res.json(tasks);
    }
  } catch (err) {
    console.log(err);
  }
});

//update a task
router.put("/update_task", async (req, res) => {
  try {
    const { name, description, completed } = req.body;
    const result = await TodayTask.findByIdAndUpdate(req.body.id, {
      name: name,
      description: description,
      completed: completed,
    });
    if (!req.body.id) {
      res.json("Bruh");
    } else {
      const tasks = await TodayTask.find({
        userId: req.body.userId,
      });
      res.json(tasks);
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
