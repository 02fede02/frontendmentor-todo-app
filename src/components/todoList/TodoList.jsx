import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Todo from "../todo/Todo";
import "./TodoList.scss";

export default function TodoList() {
  const {
    todoList,
    setTodoList,
    todoIncomplete,
    todoComplete,
    setTodoComplete,
    todoDisplay,
  } = useContext(TodoContext);

  const handleClick = () => {
    const newTodoList = todoList.filter((todo) => todo.complete !== true);
    setTodoList([...newTodoList]);
  };

  return (
    <ul className="ul">
      {todoDisplay === "all" &&
        todoList.map(({ id, value }) => (
          <Todo key={id} value={value} id={id} />
        ))}
      {todoDisplay === "active" &&
        todoIncomplete.map(({ id, value }) => (
          <Todo key={id} value={value} id={id} />
        ))}
      {todoDisplay === "completed" &&
        todoComplete.map(({ id, value }) => (
          <Todo key={id} value={value} id={id} />
        ))}
      <div className="ul__div">
        <span className="ul__span">{todoIncomplete.length} items left</span>
        <span className="ul__span ul__span--btn" onClick={handleClick}>Clear Completed</span>
      </div>
    </ul>
  );
}
