import express from "express";
import ProjectTask from "../models/projecttasks.js";
import User from "../models/userSchema.js";

const router = express.Router();

//get user tasks
router.get("/get_tasks/:projectId", async (req, res) => {
  try {
    const tasks = await ProjectTask.find({
      projectId: req.params.projectId,
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

//create project task
router.post("/create_task", async (req, res) => {
  try {
    const { name, description, projectId, completed } = req.body;
    const result = await ProjectTask.create({
      name: name,
      description: description,
      projectId: projectId,
      completed: completed,
    });
    const tasks = await ProjectTask.find({
      projectId: req.body.projectId,
    });
    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete_task", async (req, res) => {
  try {
    const { id } = req.body;
    await ProjectTask.findByIdAndDelete(id);
    if (!id) {
      res.json("Id is not there sad");
    } else {
      const tasks = await ProjectTask.find({
        projectId: req.body.projectId,
      });
      res.json(tasks);
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/update_task", async (req, res) => {
  try {
    const { name, description, completed } = req.body;
    const result = await ProjectTask.findByIdAndUpdate(req.body.id, {
      name: name,
      description: description,
      completed: completed,
    });
    if (!req.body.id) {
      res.json("Bruh");
    } else {
      const tasks = await ProjectTask.find({
        projectId: req.body.projectId,
      });
      res.json(tasks);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get(`/search/:taskname`, async (req, res) => {
  try {
    const taskboi = new RegExp(req.params.taskname, "i");
    const tasks = await ProjectTask.find({
      name: taskboi,
    });
    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
});

export default router;
