// Dashboard.js
import React from "react";
import { useTaskContext } from "../../context/TaskContext";

function Dashboard() {
  const { tasks } = useTaskContext();

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "inProgress"
  ).length;
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Tasks</h3>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">In Progress Tasks</h3>
          <p className="text-3xl font-bold">{inProgressTasks}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
          <p className="text-3xl font-bold">{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
