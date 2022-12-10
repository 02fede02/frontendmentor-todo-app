import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./TodoFilter.scss";

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

      <label className="div__label div__label--all" id="all" onClick={() => handleClickAll("all")} for="all">
        All
      </label>
      <label className="div__label" id="active" onClick={() => handleClickAll("active")} for="active">
        Active
      </label>
      <label className="div__label" id="completed" onClick={() => handleClickAll("completed")} for="completed">
        Completed
      </label>
    </div>
  );
};

export default TodoFilter;
