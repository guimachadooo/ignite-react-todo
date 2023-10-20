import { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { v4 as uuid } from "uuid";
import styles from "./App.module.css";

import "./global.css";

function App() {

  let [tasks, setTasks] = useState([]);
  
  return (
    <div className={styles.wrapper}>
      <Header tasks={tasks} setTasks={setTasks} />

      <main>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  )
}

export default App
