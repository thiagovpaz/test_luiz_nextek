import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import styles from '../styles/TaskList.module.css';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
      setFilteredTasks(response.data);
    } catch (error) {
      toast.error('Erro ao buscar tarefas. Tente novamente.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [tasks, searchTerm, filterStatus]);

  const handleAddTask = async (task) => {
    try {
      await axios.post(`${API_URL}/tasks`, task);
      toast.success('Tarefa adicionada com sucesso!');
      fetchTasks();
    } catch (error) {
      toast.error('Erro ao adicionar tarefa. Tente novamente.');
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
      toast.success('Tarefa atualizada com sucesso!');
      fetchTasks();
    } catch (error) {
      toast.error('Erro ao atualizar tarefa. Tente novamente.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      toast.success('Tarefa excluída com sucesso!');
      fetchTasks();
    } catch (error) {
      toast.error('Erro ao excluir tarefa. Tente novamente.');
    }
  };

  const applyFilters = () => {
    let filtered = tasks;

    if (filterStatus !== 'all') {
      filtered = filtered.filter((task) => task.status === filterStatus);
    }

    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Gerenciador de Tarefas</h2>

      <div className={styles.filters}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className={styles.statusFilter}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="pendente">Pendentes</option>
          <option value="concluída">Concluídas</option>
        </select>
      </div>

      <TaskForm onAddTask={handleAddTask} />
      <div className={styles.taskList}>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
