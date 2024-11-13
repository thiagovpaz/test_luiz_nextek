import React, { useState } from 'react';

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
    const newStatus = status === 'pendente' ? 'concluída' : 'pendente';
    setStatus(newStatus);
    onUpdateTask(task.id, { title, description, status: newStatus });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button onClick={handleUpdate}>Salvar</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={toggleStatus}>
            {status === 'pendente' ? 'Concluída' : 'Pendente'}
          </button>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onDeleteTask(task.id)}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
