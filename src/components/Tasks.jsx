import { Trash } from "phosphor-react";
import emptyData from "../assets/empty-data.svg";
import styles from "./Tasks.module.css";

export function Tasks ({ tasks, setTasks }) {

  let handleRemove = (deletedTask) => {
    let newTasks = tasks.filter(task => {
      return task !== deletedTask;
    })
    
    setTasks(newTasks);
  }

  console.log(tasks)

  return (
    <div className={styles.tasksContent}>
      <div className={styles.infoTasks}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <div className={styles.tasks}>
        <div className={styles.empty}>
          <img src={emptyData} alt="Sem tarefas" />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <div className={styles.taskCard}>
          <div className={styles.task}>
            <input type="checkbox" className={styles.checkbox} />

            <p>Lorem ipsum dor sit ametLorem ipsum dor sit amet</p>

          </div>

          <button onClick={handleRemove} title="Deletar task">
            <Trash size={24} />
          </button>
        </div>
      </div>

    </div>
  )
}