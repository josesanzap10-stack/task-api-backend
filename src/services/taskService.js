let tasks = []; // base temporal

exports.getAllTasks = () => {
  return tasks;
};

exports.createTask = (data) => {
  const newTask = {
    id: tasks.length + 1,
    title: data.title,
    completed: false,
  };
  tasks.push(newTask);
  return newTask;
};

exports.updateTask = (id, data) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  task.title = data.title !== undefined ? data.title : task.title;
  task.completed =
    data.completed !== undefined ? data.completed : task.completed;

  return task;
};

exports.deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};
