import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { ReactComponent as CrossButton } from "../../assets/images/icon-cross.svg";
import { CheckedContext } from "../../contexts/CheckedContext";
import { useEffect } from "react";
import { Draggable } from "@hello-pangea/dnd";

export default function Todo({ value, id , index}) {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [  checkedClass, setCheckedClass ] = useState(false)

  useEffect(() => {
    todoList.map((todo) => {
      if(todo.id === id){
        if(todo.complete === false){
          setCheckedClass(false)
        } else setCheckedClass(true)
      }
    })
  }, [todoList])

  const handleClick = () => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        if(todo.complete === false){
          todo.complete = true
        } else {
          todo.complete = false
        }
      }
      return todo;
    });
    setTodoList([...newTodoList]);
    setCheckedClass(checkedClass ? false : true)
  };

  const handlClickRemove = () => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList([...newTodoList]);
  };

  return (
    <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
    {(draggableProvided) => 
    (<li {...draggableProvided.draggableProps}
      ref={draggableProvided.innerRef}
      {...draggableProvided.dragHandleProps} className="li" >
      <div className="li__div">
        <input className={checkedClass ? "li__radio checked" : "li__radio"} onClick={handleClick} type="checkbox" />{" "}
        <span className="li__span--value" onClick={handleClick} >{value}</span>
        </div>
      <span className="li__span">
        <CrossButton onClick={handlClickRemove} />
      </span>
    </li>)}
    </Draggable>
  );
}
