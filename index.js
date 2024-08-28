import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos?page=1&limit=5')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h1>My To-Do App</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
