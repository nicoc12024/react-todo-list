import "../stylesheets/Task.css";
import { AiFillDelete } from "react-icons/ai";

function Task({ text, id, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
      <div className="task-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="task-icon" onClick={() => deleteTask(id)}>
        <AiFillDelete />
      </div>
    </div>
  );
}
export default Task;
