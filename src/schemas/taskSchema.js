const Joi = require("joi");

exports.createTaskSchema = Joi.object({
  title: Joi.string().min(2).max(100).required()
});

exports.updateTaskSchema = Joi.object({
  completed: Joi.boolean().required()
});
