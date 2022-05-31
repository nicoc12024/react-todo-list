import "../stylesheets/TodoApp.css";
import Header from "./Header";
import Form from "./Form";
import Task from "./Task";
import { useState } from "react";

function TodoApp() {
  const [allTasks, setAllTasks] = useState([]);

  // Add task
  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const tasksUpdated = [task, ...allTasks];
      setAllTasks(tasksUpdated);
    }
  };

  // Delete task
  const deleteTask = (id) => {
    const tasksUpdated = allTasks.filter((task) => task.id !== id);
    setAllTasks(tasksUpdated);
  };

  // Complete task mark
  const completeTask = (id) => {
    const tasksUpdated = allTasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setAllTasks(tasksUpdated);
  };

  return (
    <>
      <div className="App-main-container">
        <Header />
        <div className="todo-list-container">
          <Form onSubmit={addTask} />
          {allTasks.map((task) => (
            <Task
              text={task.text}
              key={task.id}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default TodoApp;
