import { useEffect, useState } from "react";
import API from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import Recommendation from "./components/Recommendation";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
  <div className="container">

    <h1 className="title">📘 Smart Academic Planner</h1>

    {/* Dashboard + Chart */}
    <div className="top-section">
      <Dashboard tasks={tasks} />
    </div>

    {/* Main Grid */}
    <div className="main-grid">

      <div className="left-panel">
        <Recommendation refreshTrigger={tasks} />
        <TaskForm refresh={fetchTasks} />
      </div>

      <div className="right-panel">
        <TaskList tasks={tasks} refresh={fetchTasks} />
      </div>

    </div>

  </div>
);
}
export default App;