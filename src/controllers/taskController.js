const taskService = require('../services/taskService');

exports.getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json({ success: true, tasks });
};

exports.createTask = (req, res) => {
  const newTask = taskService.createTask(req.body);
  res.status(201).json({ success: true, task: newTask });
};

exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = taskService.updateTask(id, req.body);

  if (!updated) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }

  res.json({ success: true, task: updated });
};

exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }

  res.json({ success: true });
};
