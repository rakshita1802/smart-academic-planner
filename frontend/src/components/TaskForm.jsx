import { useState } from "react";
import API from "../api";

export default function TaskForm({ refresh }) {
  const [task, setTask] = useState({
    title: "",
    deadline: "",
    difficulty: "Easy",
    estimated_time: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/tasks", task);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      <input placeholder="Title"
        onChange={(e) => setTask({...task, title: e.target.value})} />

      <input type="datetime-local"
        onChange={(e) => setTask({...task, deadline: e.target.value})} />

      <select onChange={(e) => setTask({...task, difficulty: e.target.value})}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <input type="number"
        placeholder="Estimated hours"
        onChange={(e) => setTask({...task, estimated_time: e.target.value})} />

      <button type="submit">Add</button>
    </form>
  );
}