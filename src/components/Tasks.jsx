import { Trash } from "phosphor-react";
import emptyData from "../assets/empty-data.svg";

import styles from "./Tasks.module.css";

export function Tasks ({ tasks, setTasks }) {

  let handleComplete = (task) => {
    let newTasks = tasks.map(item =>
      item.id === task ? { ...item, completed: !item.completed } : item
    );

    setTasks(newTasks);
  }

  let showCompletedTasks = () => {
    let completedTasks = tasks.filter(task => {
      return task.completed;
    });

    return completedTasks.length + " de " + tasks.length;
  }

  let handleRemove = (deletedTask) => {
    
    let newTasks = tasks.filter(task => {
      return task.id !== deletedTask;
    });
    
    setTasks(newTasks);
  }

  return (
    <div className={styles.tasksContent}>
      <div className={styles.infoTasks}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>{showCompletedTasks()}</span>
        </div>
      </div>

      <div className={styles.tasks}>
        {Object.keys(tasks).length == 0 && (  
          <div className={styles.empty}>
            <img src={emptyData} alt="Sem tarefas" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {Object.keys(tasks).length > 0 && tasks.map(task => {
          
          return (
            <div key={task?.id} className={styles.taskCard}>
              <div className={styles.task}>
                <input 
                  type="checkbox" 
                  checked={task?.completed}
                  className={styles.checkbox} 
                  onChange={() => handleComplete(task?.id)}
                />

                <p className={task?.completed ? styles.completedTask : ""}>
                  {task?.toDo}
                </p>

              </div>
              <button onClick={() => handleRemove(task?.id)} title="Deletar task">
                <Trash size={24} />
              </button>
            </div>
          )
        })}
      </div>

    </div>
  )
}