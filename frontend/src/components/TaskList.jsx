import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Buscar todas as tarefas
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Manipular tarefas
  const handleAddTask = async (task) => {
    await axios.post('http://localhost:3000/tasks', task);
    fetchTasks();
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onUpdateTask={handleUpdateTask} 
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
