import { useEffect, useState } from "react";

export const useTaskManager = () => {
  // Retrieve tasks from localStorage on initial load
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    // Store tasks in localStorage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData) => {
    // Generate a unique ID for the new task
    const taskId = Date.now().toString();
    const newTask = { id: taskId, ...taskData };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);
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

  // Function to reorder tasks
  const reorderTasks = (reorderedTasks) => {
    // Update the tasks order
    setTasks(reorderedTasks);
  };

  return { tasks, addTask, updateTask, deleteTask, reorderTasks };
};
