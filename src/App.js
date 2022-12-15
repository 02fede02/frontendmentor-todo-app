import { Fragment } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoList from "./components/todoList/TodoList";
import Header from "./components/header/Header";


function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </main>
      <footer>
        <p className="app__p">Drag and drop to reorder list</p>
      </footer>
    </Fragment>
  );
}

export default App;
