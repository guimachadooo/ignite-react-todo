import { useState } from "react";

import { PlusCircle } from "phosphor-react";
import logo from "../assets/todo-logo.svg";
import { v4 as uuid } from "uuid";

import styles from "./Header.module.css";

export function Header ({ tasks, setTasks }){

  let [inputValue, setInputValue] = useState('');

  let handleTaskValue = () => {
    setInputValue(event.target.value);
  }
  
  let handleSubmit = () => {
    event.preventDefault();
    
    setTasks([...tasks, {
      id: uuid(),
      toDo: inputValue,
      completed: false,
    }]);
    
    setInputValue('');
  }

  let isDisable = inputValue.length == 0;

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} />
      </header>

      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <input 
          name="task"
          type="text"
          value={inputValue}
          onChange={handleTaskValue}
          placeholder="Adicione uma nova tarefa"
        />

        <button
          type="submit" 
          disabled={isDisable} 
          className={isDisable ? styles.disabled : ""}
        >
          Criar
          <PlusCircle size={24} /> 
        </button>
      </form>
    </div>
  )
}