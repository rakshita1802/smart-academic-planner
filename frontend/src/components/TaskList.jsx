import API from "../api";
import { formatDistanceToNow } from "date-fns";

export default function TaskList({ tasks, refresh }) {

  const completeTask = async (id) => {
    await API.put(`/tasks/${id}`);
    refresh();
  };

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.map((t) => {

        let tag = "Low 🟢";
        if (t.priority > 80) tag = "High 🔴";
        else if (t.priority > 50) tag = "Medium 🟡";

        return (
          <div key={t.id} className="task-card" style={{
  background:
    t.priority > 80 ? "#7f1d1d" :
    t.priority > 50 ? "#78350f" :
    "#14532d"
}}>
            <h4>{t.title}</h4>

            <p>Priority: {t.priority}</p>
            <p>{tag}</p>

            <p>
              Deadline in:{" "}
              {formatDistanceToNow(new Date(t.deadline), { addSuffix: true })}
            </p>

            {!t.completed &&
              <button onClick={() => completeTask(t.id)}>
                Mark Done
              </button>
            }
          </div>
        );
      })}
    </div>
  );
}