import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Descrição" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
