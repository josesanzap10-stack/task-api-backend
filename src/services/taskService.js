const pool = require("../config/db");

exports.getAll = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE user_id = $1 ORDER BY id ASC",
    [userId]
  );
  return result.rows;
};

exports.create = async (title, userId) => {
  const result = await pool.query(
    "INSERT INTO tasks (title, user_id) VALUES ($1, $2) RETURNING *",
    [title, userId]
  );
  return result.rows[0];
};

exports.update = async (taskId, userId, updates) => {
  const { completed, title } = updates;

  const result = await pool.query(
    `UPDATE tasks 
     SET title = COALESCE($1, title), 
         completed = COALESCE($2, completed) 
     WHERE id = $3 AND user_id = $4 
     RETURNING *`,
    [title, completed, taskId, userId]
  );

  if (!result.rows.length) {
    throw new Error("Task not found or not authorized");
  }

  return result.rows[0];
};

exports.remove = async (taskId, userId) => {
  const result = await pool.query(
    "DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING id",
    [taskId, userId]
  );

  if (!result.rows.length) {
    throw new Error("Task not found or not authorized");
  }

  return true;
};
