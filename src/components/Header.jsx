import { useState } from "react";

import { PlusCircle } from "phosphor-react";
import logo from "../assets/todo-logo.svg";
import styles from "./Header.module.css";

export function Header ({ tasks, setTasks }){

  let [taskValue, setTaskValue] = useState({
    id: 'uuid',
    task: ''
  });

  let handleTaskValue = () => {
    setTaskValue({
      id: 'uuid',
      task: event.target.value
    });
  }
  
  let handleSubmit = () => {
    event.preventDefault();
    setTasks(taskValue);
    setTaskValue({
      id: 'uuid',
      task: ''
    });
  }

  let handleDisable = taskValue.length == 0;

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} />
      </header>

      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <input 
          name="task"
          type="text" 
          onChange={handleTaskValue}
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit" disabled={handleDisable}>
          Criar
          <PlusCircle size={24} /> 
        </button>
      </form>
    </div>
  )
}