import { createContext, useContext } from "react";
import { useTaskManager } from "../hooks/useTaskManager";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const taskManager = useTaskManager();

  return (
    <TaskContext.Provider value={taskManager}>{children}</TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }

  const {
    addTask,
    tasks,
    updateTask,
    deleteTask,
    user,
    reorderTasks, // Include reorderTasks function
  } = context;

  // ... (The rest of your code)

  return {
    addTask,
    tasks,
    updateTask,
    deleteTask,
    user,
    reorderTasks, // Function to reorder tasks
  };
}
