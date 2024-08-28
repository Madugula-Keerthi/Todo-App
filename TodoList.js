import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map(todo => (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </li>
        ))
      ) : (
        <li>No to-dos available</li>
      )}
    </ul>
  );
};

export default TodoList;
