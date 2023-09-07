// useTaskManager.js
import { useState } from "react";

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    // Implement task creation logic and add the task to the tasks array
    setTasks([...tasks, taskData]);
  };

  const updateTask = (taskId, updatedData) => {
    // Implement task update logic
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedData } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    // Implement task deletion logic
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return { tasks, addTask, updateTask, deleteTask };
};
