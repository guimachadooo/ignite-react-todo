import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from "./App.module.css";

import "./global.css";

function App() {

  let localTasks = JSON.parse(localStorage.getItem('tasks') || []);
  let [tasks, setTasks] = useState(localTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <div className={styles.none}>
      <Header tasks={tasks} setTasks={setTasks} />

      <main>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  )
}

export default App
