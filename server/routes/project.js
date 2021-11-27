import express from "express";
import mognoose from "mongoose";
import Project from "../models/projectSchema.js";

const router = express.Router();

//creating a project

router.post("/create_project", async (req, res) => {
  try {
    const { userId, name } = req.body;
    const result = await Project.create({
      userId: userId,
      name: name,
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

//get a project by id

router.get("/getproject_byid", async (req, res) => {
  try {
    const project = await Project.findById(req.body.projectId);
    res.json(project);
  } catch (err) {
    console.log(err);
  }
});

//get user projects
router.get("/get_userprojects", async (req, res) => {
  try {
    const userprojects = await Project.find({
      userId: req.body.userId,
    });
    res.json(userprojects);
  } catch (err) {
    console.log(err);
  }
});

export default router;
