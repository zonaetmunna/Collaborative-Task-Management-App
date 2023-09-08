import { useTaskContext } from "../../context/TaskContext";

function Dashboard() {
  const { tasks } = useTaskContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "inProgress"
  ).length;
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;

  /* useEffect(() => {
    // Register the necessary controllers and scales
    Chart.register(CategoryScale, LinearScale, BarController, Title);

    const chartData = {
      labels: [
        "Total Tasks",
        "Completed Tasks",
        "In Progress Tasks",
        "Pending Tasks",
      ],
      datasets: [
        {
          label: "Task Statistics",
          data: [totalTasks, completedTasks, inProgressTasks, pendingTasks],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            precision: 0,
          },
        },
      },
    });

    setChartInstance(newChartInstance);
  }, [
    totalTasks,
    completedTasks,
    inProgressTasks,
    pendingTasks,
    chartInstance,
  ]); */

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
      {/* chart */}
    </div>
  );
}

export default Dashboard;
