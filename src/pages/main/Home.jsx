import TaskForm from "../../components/Tasks/TaskForm";
import TaskList from "../../components/Tasks/TaskList";

const Home = () => {
  return (
    <div>
      {/* taskForm */}
      <TaskForm />
      {/* taskList */}
      <TaskList />
    </div>
  );
};

export default Home;
