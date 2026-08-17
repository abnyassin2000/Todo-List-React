import React from "react";
import { useContext } from "react";
import { TodosContext } from "../context/TasksContext";
const Filter = () => {
  const { currentCategory, setCurrentCategory } = useContext(TodosContext);
  return (
    <div className="filter-list">
      <span
        onClick={()=>setCurrentCategory("all")}
        className={currentCategory === "all" ? "active" : ""}
      >
        All
      </span>
      <span onClick={()=>setCurrentCategory("active")} className={currentCategory === "active" ? "active" : ""}>Active</span>
      <span onClick={()=>setCurrentCategory("completed")} className={currentCategory === "completed" ? "active" : ""} >Completed</span>
    </div>
  );
};

export default Filter;
