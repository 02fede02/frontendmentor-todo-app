import { Fragment } from "react";
import { ReactComponent as MoonIcon } from "./assets/images/icon-moon.svg";
import "./App.scss";
import AddTodo from "./components/addTodo/AddTodo";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <Fragment>
      <header className="header">
        <h1 className="header__h1">Todo</h1>
        <MoonIcon className="header__icon" />
      </header>
      <AddTodo />
      <TodoList />
      <TodoFilter />
    </Fragment>
  );
}

export default App;
