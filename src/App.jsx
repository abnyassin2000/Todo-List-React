import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { TodosContext } from "./context/TasksContext";
import TodoProvider from "./context/TasksContext";
import Filter from "./components/Filter";
function App() {
  return (
    <TodoProvider>
      <section className="app">
        <div className="container">
          <div className="todo">
            <Title />
            <Form />
            <Filter/>
            <Tasks/>
          </div>
        </div>
      </section>
    </TodoProvider>
  );
}

export default App;
