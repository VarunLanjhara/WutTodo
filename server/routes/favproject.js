import express from "express";
import favProject from "../models/favProject.js";

const router = express.Router();

router.post("/add_fav", async (req, res) => {
  try {
    const { userId, name, color, comments } = req.body;
    const result = await favProject.create({
      userId: userId,
      name: name,
      color: color,
      comments: comments,
    });
    const userprojects = await favProject.find({
      userId: req.body.userId,
    });
    res.json(userprojects);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getfavproject_byid/:projectId", async (req, res) => {
  try {
    const project = await favProject.findById(req.params.favprojectId);
    res.json(project);
  } catch (err) {
    console.log(err);
  }
});

router.get("/get_favuserprojects/:userId", async (req, res) => {
  try {
    const userprojects = await favProject.find({
      userId: req.params.userId,
    });
    res.json(userprojects);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/remove_fav/:projectId/:userId", async (req, res) => {
  try {
    const project = await favProject.findByIdAndDelete(req.params.projectId);
    const userprojects = await favProject.find({
      userId: req.params.userId,
    });
    res.json(userprojects);
  } catch (err) {
    console.log(err);
  }
});

export default router;
