import React, { useContext } from "react";
import { TodosContext } from "../context/TasksContext";

const Form = () => {
  const { addNewTask, input, setInput } = useContext  (TodosContext);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input) {
      return alert("enter value");
    }

    const newTask = {
      id: Date.now(),
      title: input,
      isCompleted: false,
    };
    addNewTask(newTask);
    setInput("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task .."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button className="btn-add">Add</button>
    </form>
  );
};

export default Form;
