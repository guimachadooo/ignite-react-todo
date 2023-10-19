import { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from "./App.module.css";

import "./global.css";

function App() {

  let [tasks, setTasks] = useState({
    id: 'uuid',
    task: ''
  })
  
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
