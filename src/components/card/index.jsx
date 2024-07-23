import React, { useState } from 'react';
import '../card/index.css';

const Todocard = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='todocard'>
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder='Add your new todo'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">+</button>
      </form>
      {todos.map((todo, index) => (
        <div className="todocardd" key={index}>
          <h1>{todo}</h1>
          <button onClick={() => handleDelete(index)}>del</button>
        </div>
      ))}
    </div>
  );
};

export default Todocard;
