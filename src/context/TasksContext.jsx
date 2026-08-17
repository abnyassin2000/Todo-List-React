import { createContext, useEffect, useState, useContext } from "react";
export const TodosContext = createContext([]);

export default function TodoProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [listOfTasks, setListOfTasks] = useState(() => {
    const getFromLS = localStorage.getItem("tasks");
    return getFromLS ? JSON.parse(getFromLS) : [];
  });
  const [input, setInput] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks));
  }, [listOfTasks]);
  function deleteTask(id) {
    setListOfTasks(listOfTasks.filter((task) => task.id != id));
  }
  function addNewTask(task) {
    setListOfTasks((prevTask) => [...prevTask, task]);
  }
  function toggleCompleted(id) {
    setListOfTasks(
      listOfTasks.map((task) => {
        return task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      }),
    );
  }
  return (
    <>
      <TodosContext.Provider
        value={{
          listOfTasks,
          setListOfTasks,
          input,
          setInput,
          addNewTask,
          toggleCompleted,
          deleteTask,
          currentCategory,
          setCurrentCategory,
        }}
      >
        {children}
      </TodosContext.Provider>  
    </>
  );
}
