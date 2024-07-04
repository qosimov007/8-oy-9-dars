import React, { useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{todo}</span>
            <button
              className="ml-2 p-1 bg-red-500 text-white rounded"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
