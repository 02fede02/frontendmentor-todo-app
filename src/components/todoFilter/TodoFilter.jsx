import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";


const TodoFilter = () => {
  const { todoDisplay, setTodoDisplay } = useContext(TodoContext);

  const handleClickAll = (display) => {
    setTodoDisplay(display);
  };

  return (
    <div className="div">
      <input className="div__input div__input--all" type="radio" id="all" name="filter" />
      <input className="div__input div__input--active" type="radio" id="active" name="filter"/>
      <input className="div__input div__input--completed" type="radio" id="completed" name="filter"/>

      <label className="div__label div__label--all" id="all" onClick={() => handleClickAll("all")} htmlFor="all">
        All
      </label>
      <label className="div__label" id="active" onClick={() => handleClickAll("active")} htmlFor="active">
        Active
      </label>
      <label className="div__label" id="completed" onClick={() => handleClickAll("completed")} htmlFor="completed">
        Completed
      </label>
    </div>
  );
};

export default TodoFilter;
