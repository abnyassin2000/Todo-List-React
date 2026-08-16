import React, { useContext } from "react";
import { TodosContext } from "../context/TasksContext";
const Tasks = () => {
  const { listOfTasks, deleteTask, toggleCompleted } = useContext(TodosContext);
  const renderList = listOfTasks.map((task) => {
    return (
      <li
        key={task.id}
        style={
          task.isCompleted ? { background: "#eee" } : { background: "white" }
        }
        className="task"
      >
        <div className="left">
          <div className="checks">
            <input
              type="checkbox"
              onClick={() => {
                toggleCompleted(task.id);
              }}
              checked={task.isCompleted}
            />
            <span className="checkmark"></span>
          </div>

          <span
            className="task-title"
            style={
              task.isCompleted
                ? { color: "#aa9292", textDecoration: "line-through" }
                : { color: "black" }
            }
          >
            {task.title}
          </span>
        </div>

        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="delete-btn"
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul className="tasks-list">{renderList}</ul>;
};

export default Tasks;
