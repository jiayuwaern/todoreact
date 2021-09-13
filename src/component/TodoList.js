import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, deleteHandler, completeHandler }) => {
  return (
    <div>
      <ul>
        {todos.map((todoItem, index) => 
          <TodoCard  key={todoItem.id} todoItem={todoItem} todoItemIndex={index} todoTitle={todoItem.title} todoDesc={todoItem.desc} completeHandler={completeHandler} deleteHandler={deleteHandler} />
        )}
      </ul>
    </div>);
}

export default TodoList;
