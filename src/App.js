import React, { useState } from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const completeHandler = (index) => {
    const btnText = document.querySelectorAll('#todo-list__complete-btn');
    const currentTodo = todos[index];
    currentTodo.completed = !currentTodo.completed;
    todos.splice(index, 1);
    if (currentTodo.hasOwnProperty('index')) {
      var oldIndex = currentTodo.index;
      delete currentTodo.index;
      todos.splice(oldIndex, 0, currentTodo);
      btnText[index].innerText = 'Complete';
    } else {
      currentTodo.index = index;
      todos.push(currentTodo);
      btnText[index].innerText = 'Incomplete';
    }
    const newTodos = [...todos]
    setTodos(newTodos);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To do list</h1>
      </header>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputTitle={inputTitle}
        inputDesc={inputDesc}
        setInputTitle={setInputTitle}
        setInputDesc={setInputDesc} />
      <TodoList todos={todos} setTodos={setTodos} completeHandler={completeHandler} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
