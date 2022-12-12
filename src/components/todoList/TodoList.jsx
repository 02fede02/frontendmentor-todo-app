import React, { Fragment, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Todo from "../todo/Todo";
import "./TodoList.scss";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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
    <Fragment>
      <Droppable droppableId="todos">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="ul"
          >
            {todoDisplay === "all" &&
              todoList.map(({ id, value }, index) => (
                <Todo key={id} value={value} id={id} index={index} />
              ))}
            {todoDisplay === "active" &&
              todoIncomplete.map(({ id, value }, index) => (
                <Todo key={id} value={value} id={id} index={index} />
              ))}
            {todoDisplay === "completed" &&
              todoComplete.map(({ id, value }, index) => (
                <Todo key={id} value={value} id={id} index={index} />
              ))}

            {droppableProvided.placeholder}
            <div className="div">
              <span className="div__span">
                {todoIncomplete.length} items left
              </span>
              <span className="div__span div__span--btn" onClick={handleClick}>
                Clear Completed
              </span>
            </div>
          </ul>
        )}
      </Droppable>
    </Fragment>
  );
}
