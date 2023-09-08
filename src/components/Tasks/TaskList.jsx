import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FaCheck } from "react-icons/fa"; // Import the FaCheck icon
import { useAuthContext } from "../../context/AuthContext";
import { useTaskContext } from "../../context/TaskContext";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const { tasks, updateTask, reorderTasks } = useTaskContext();
  const { user, teams } = useAuthContext();

  // state
  const [isTaskAddOpen, setIsTaskAddOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("priority");

  const toggleTaskAdd = () => {
    setIsTaskAddOpen(!isTaskAddOpen);
  };

  // Filtering tasks based on status
  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") return true;
    return task.status === filterStatus;
  });

  // Sorting tasks
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "priority") {
      return a.priority.localeCompare(b.priority);
    } else if (sortBy === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
  });

  const handleTaskStatusChange = (taskId, newStatus) => {
    // Implement the logic to update the task status in your context
    updateTask(taskId, { status: newStatus });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTaskIds = [...sortedTasks.map((task) => task.id)];
    const [movedTaskId] = reorderedTaskIds.splice(result.source.index, 1);
    reorderedTaskIds.splice(result.destination.index, 0, movedTaskId);

    // Reorder the tasks based on the new order
    const reorderedTasks = reorderedTaskIds.map((taskId) =>
      sortedTasks.find((task) => task.id === taskId)
    );

    // Call the function to update the task order in your context
    reorderTasks(reorderedTasks);
  };

  // Render tasks
  // Render tasks in a table
  const renderTasks = () => {
    if (tasks.length === 0) {
      return <p className="text-gray-600">No tasks available.</p>;
    }

    return (
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Due Date</th>
            <th className="border border-gray-300 px-4 py-2">Assigned User</th>
            <th className="border border-gray-300 px-4 py-2">Priority</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <tr
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {task.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.dueDate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* Dropdown to select assigned user */}
                    <select
                      value={task.assignedUser || ""}
                      onChange={(e) => {
                        const newAssignedUser = e.target.value;
                        const updatedTask = {
                          ...task,
                          assignedUser: newAssignedUser,
                        };
                        updateTask(task.id, updatedTask);
                      }}
                    >
                      <option value="">Unassigned</option>
                      <option value="user1">User 1</option>
                      <option value="user2">User 2</option>
                      {/* Add more users here */}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.priority}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {task.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() =>
                        handleTaskStatusChange(task.id, "completed")
                      }
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                    >
                      <FaCheck /> {/* Use the FaCheck icon */}
                      Mark as Completed
                    </button>
                    {/* Add more task actions here */}
                  </td>
                </tr>
              )}
            </Draggable>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="flex justify-around items-center">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <div className="mb-4 flex ">
          <label className="mr-2">Status Filter:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-md border border-gray-300 px-2 py-1"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Sort by:</label>
          <div className="inline-block ml-2">
            <button
              className={`px-3 py-1 rounded-lg ${
                sortBy === "priority"
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setSortBy("priority")}
            >
              Priority
            </button>
          </div>
          <div className="inline-block ml-2">
            <button
              className={`px-3 py-1 rounded-lg ${
                sortBy === "dueDate"
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setSortBy("dueDate")}
            >
              Due Date
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={toggleTaskAdd}
            className="bg-green-500 text-white px-2 py-1 rounded-lg"
          >
            Add Task
          </button>

          {isTaskAddOpen && <TaskForm onClose={toggleTaskAdd} />}
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {renderTasks()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
