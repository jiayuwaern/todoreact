import React from 'react';

const Form = ({ setInputTitle, setInputDesc, setTodos, todos, inputTitle, inputDesc }) => {
  const inputTitleHandler = e => {
    setInputTitle(e.target.value);
  };

  const inputDescHandler = e => {
    setInputDesc(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos, {
        title: inputTitle,
        desc: inputDesc,
        completed: false,
        id: Math.floor(Math.random() * 1000)
      },
    ]);
    setInputTitle('');
    setInputDesc('');
  };

  return (
    <form>
      <input onChange={inputTitleHandler} type="text" name="title" placeholder="Todo title" value={inputTitle}/>
      <input onChange={inputDescHandler} type="text" name="desc" placeholder="Todo description" value={inputDesc}/>
      <button onClick={submitHandler} type="submit" value="Submit">Add new todo</button>
    </form>
  );
};

export default Form;
