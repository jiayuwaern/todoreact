import React from 'react';

const TodoCard = ({ todoTitle, todoDesc, todoItem, completeHandler, deleteHandler, todoItemIndex }) => {

  return (
    <div>
      <li className={`${todoItem.completed ? "completed" : ""}`}>
        <p className="todo-list__title">{todoTitle}</p>
        <p className="todo-list__desc">{todoDesc}</p>
        <button onClick={() => deleteHandler(todoItem.id)}>remove</button>
        <button id="todo-list__complete-btn" onClick={() => completeHandler(todoItemIndex)}>Complete</button>
      </li>
    </div>
  );
}

export default TodoCard;
