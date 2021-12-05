import express from "express";
import mognoose from "mongoose";
import Project from "../models/projectSchema.js";
import User from "../models/userSchema.js";

const router = express.Router();

//creating a project

router.post("/create_project", async (req, res) => {
  try {
    const { userId, name, color } = req.body;
    const result = await Project.create({
      userId: userId,
      name: name,
      color: color,
    });
    const userprojects = await Project.find({
      userId: req.body.userId,
    });
    res.json(userprojects);
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
router.get("/get_userprojects/:userId", async (req, res) => {
  try {
    const userprojects = await Project.find({
      userId: req.params.userId,
    });
    res.json(userprojects);
  } catch (err) {
    console.log(err);
  }
});

//update project
router.put("/update_project", async (req, res) => {
  const { name, color } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(req.body.projectId, {
      name: name,
      color: color,
    });
    const updaterporject = await Project.findById(req.body.projectId);
    res.json(updaterporject);
  } catch (err) {
    console.log(err);
  }
});

//deleting project
router.delete("/delete_project/:projectId/:userId", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.projectId);
    const userprojects = await Project.find({
      userId: req.params.userId,
    });
    res.json(userprojects);
  } catch (err) {
    console.log(err);
  }
});

//comment on projects
router.put("/comment", async (req, res) => {
  try {
    const project = await Project.findById(req.body.projectId);
    const user = await User.findById(req.body.userId);
    const comment = req.body.comment;
    await project.updateOne({
      $push: {
        comments: {
          user,
          comment,
        },
      },
    });
    const commentedproject = await Project.findById(req.body.projectId);
    res.json(commentedproject);
  } catch (err) {
    console.log(err);
  }
});

//add a task in project
router.post("/add_task", async (req, res) => {
  const { title, description } = req.body;
  const id = Math.floor(Math.random() * 6900000000000000);
  try {
    const project = await Project.findById(req.body.projectId);
    await project.updateOne({
      $push: {
        tasks: {
          id,
          title,
          description,
        },
      },
    });
    const taskproject = await Project.findById(req.body.projectId);
    res.json(taskproject);
  } catch (err) {
    console.log(err);
  }
});

//delete a task in project
// router.delete("/delete_task", async (req, res) => {
//   const { title, description } = req.body;
//   try {
//     const project = await Project.findById(req.body.projectId);
//     const projectboi = await project.findOne({
//       tasks: {
//         id: req.body.id,
//       },
//     });
//     res.json(projectboi);
//   } catch (err) {
//     console.log(err);
//   }
// });

// //update task
// router.put("/update_task", async (req, res) => {
//   const { title, description } = req.body;
//   try {
//     const project = await Project.findById(req.body.projectId);
//     await project.updateOne({
//       $update: {
//         tasks: {
//           title,
//           description,
//         },
//       },
//     });
//     const taskproject = await Project.findById(req.body.projectId);
//     res.json(taskproject);
//   } catch (err) {
//     console.log(err);
//   }
// });

export default router;
