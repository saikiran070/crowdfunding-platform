// routes/project.js
const express = require('express');
const Project = require('/models/Project');
const router = express.Router();

// Create a project
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

module.exports = router;
