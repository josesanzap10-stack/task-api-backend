const taskService = require("../services/taskService");

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId; // viene del JWT
    const tasks = await taskService.getAll(userId);
    res.json({ success: true, tasks });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title } = req.body;
    const userId = req.user.userId;

    const task = await taskService.create(title, userId);

    res.status(201).json({ success: true, task });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const taskId = req.params.id;
    const updates = req.body;

    const task = await taskService.update(taskId, userId, updates);

    res.json({ success: true, task });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const taskId = req.params.id;

    await taskService.remove(taskId, userId);

    res.json({ success: true, message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
