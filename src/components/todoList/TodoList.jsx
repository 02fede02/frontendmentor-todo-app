import React, { Fragment, useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Todo from "../todo/Todo";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { reorder } from "../../utils/Reorder";
import { setStorage } from "../../utils/LocalStorage";

export default function TodoList() {
  const { todoList, setTodoList, todoIncomplete, todoComplete, todoDisplay } =
    useContext(TodoContext);

  useEffect(() => setStorage("todo", todoList), [todoList]);

  const handleClick = () => {
    const newTodoList = todoList.filter((todo) => todo.complete !== true);
    setTodoList([...newTodoList]);
  };

  return (
    <DragDropContext
      onDragEnd={(res) => {
        const { source, destination } = res;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setTodoList((prevTodo) =>
          reorder(prevTodo, source.index, destination.index)
        );
      }}
    >
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
              <div className="container">
                <span className="container__span">
                  {todoIncomplete.length} items left
                </span>
                <span
                  className="container__span container__span--btn"
                  onClick={handleClick}
                >
                  Clear Completed
                </span>
              </div>
            </ul>
          )}
        </Droppable>
      </Fragment>
    </DragDropContext>
  );
}
