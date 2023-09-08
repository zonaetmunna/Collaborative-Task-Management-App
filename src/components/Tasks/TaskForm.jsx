import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import { useTaskContext } from "../../context/TaskContext";

function TaskForm() {
  const { register, handleSubmit, reset } = useForm();
  const { addTask } = useTaskContext();
  const { user } = useAuthContext();

  const onSubmit = (data) => {
    try {
      const taskData = {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
        userEmail: user.data.email,
      };
      addTask(taskData);
      reset();
      toast.success("Task added successfully");
    } catch (error) {
      toast.error("Error adding task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <input
          type="text"
          {...register("title")}
          placeholder="Title"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          {...register("description")}
          placeholder="Description"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <input
          type="date"
          {...register("dueDate")}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <select
          {...register("priority")}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
