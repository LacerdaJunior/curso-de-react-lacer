import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function verDetalhes(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <h1>
      <ul className="space-y-4 p-6 bg-slate-600 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-700 w-full text-white p-2 rounded-md text-left flex gap-2 ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <Button onClick={() => verDetalhes(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => props.onTaskDelete(task.id)}>
              <Trash2Icon />
            </Button>
          </li>
        ))}
      </ul>
    </h1>
  );
}

export default Tasks;
