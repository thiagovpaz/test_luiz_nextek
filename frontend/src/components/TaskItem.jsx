import { useState } from "react";
import styles from "../styles/TaskItem.module.css";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = () => {
    onUpdateTask(task.id, { title, description, status });
    setIsEditing(false);
  };

  const toggleStatus = () => {
    const newStatus = status === "pendente" ? "concluída" : "pendente";
    setStatus(newStatus);
    onUpdateTask(task.id, { title, description, status: newStatus });
  };

  return (
    <div className={styles.taskItem}>
      {isEditing ? (
        <div className={styles.editContainer}>
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Editar título"
          />
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Editar descrição"
          />
          <div className={styles.editActions}>
            <button
              className={styles.cancelButton}
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
            <button className={styles.saveButton} onClick={handleUpdate}>
              Salvar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.title}>{task.title}</h3>
          <p className={styles.description}>{task.description}</p>
          <p className={styles.status}>Status: {task.status}</p>
          <div className={styles.actions}>
            <button
              className={`${styles.button} ${styles.toggle}`}
              onClick={toggleStatus}
            >
              {status === "pendente" ? "Concluída" : "Pendente"}
            </button>
            <button
              className={`${styles.button} ${styles.edit}`}
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button
              className={`${styles.button} ${styles.delete}`}
              onClick={() => onDeleteTask(task.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
