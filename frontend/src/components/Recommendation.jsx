import { useEffect, useState } from "react";
import API from "../api";

export default function Recommendation({ refreshTrigger }) {
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    API.get("/recommend").then(res => setTasks(res.data));
  };

  useEffect(() => {
    fetchData();
  }, [refreshTrigger]); // updates when tasks change

  return (
    <div>
      <h2>🔥 What Should I Do Today?</h2>

      {tasks.length === 0 && <p>No tasks to recommend</p>}

      {tasks.map((t, i) => (
        <p key={i}>
          {i + 1}. {t.title} (Priority: {t.priority})
        </p>
      ))}
    </div>
  );
}