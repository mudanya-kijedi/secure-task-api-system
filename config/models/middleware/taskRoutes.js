const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

let tasks = [];

// GET tasks
router.get("/", auth, (req, res) => {
  res.json(tasks);
});

// CREATE task
router.post("/", auth, (req, res) => {
  const task = { id: Date.now(), text: req.body.text };
  tasks.push(task);
  res.json(task);
});

// DELETE task
router.delete("/:id", auth, (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
