import { Fragment, useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { ReactComponent as MoonIcon } from "./assets/images/icon-moon.svg";
import "./App.scss";
import AddTodo from "./components/addTodo/AddTodo";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoList from "./components/todoList/TodoList";
import { DragDropContext } from "@hello-pangea/dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function App() {


  const { setTodoList } = useContext(TodoContext)
  return (
    
<DragDropContext onDragEnd={(res) => {
  const {source, destination} = res
  if(!destination){
    return
  }
  if(source.index === destination.index && source.droppableId === destination.droppableId){
    return 
  }

  setTodoList((prevTodo) => reorder(prevTodo, source.index, destination.index))
}
}>
    <Fragment>
      <header className="header">
        <h1 className="header__h1">Todo</h1>
        <MoonIcon className="header__icon" />
      </header>
      <AddTodo />
      <TodoList />
      <TodoFilter />
    </Fragment>
    </DragDropContext>
  );
}

export default App;
