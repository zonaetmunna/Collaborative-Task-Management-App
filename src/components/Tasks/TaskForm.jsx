// TaskForm.js
import React from "react";
import { useForm } from "react-hook-form";

function TaskForm({ addTask }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Handle task creation and addTask(data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("title")} placeholder="Title" />
      <textarea {...register("description")} placeholder="Description" />
      <input type="date" {...register("dueDate")} />
      <select {...register("priority")}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
