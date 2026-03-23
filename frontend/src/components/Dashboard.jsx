import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#22c55e", "#ef4444"]
      }
    ]
  };

  return (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "40px"
  }}>
      
      <div style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h2>Dashboard</h2>
        <p>Total Tasks: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
      </div>

      <div style={{ width: "200px" }}>
  <Pie data={data} />
</div>

    </div>
  );
}