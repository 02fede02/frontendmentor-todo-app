import { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const { todoList, setTodoList } = useContext(TodoContext);

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const onClickHandler = () => {
    const newTodoList = todoList.map((todo) => {
      if (todo.complete) {
        todo.complete = false;
      } else {
        todo.complete = true;
      }
      return todo;
    });
    setTodoList([...newTodoList]);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: (Math.random() * 999).toString(),
        value: todo,
        complete: false,
      },
    ]);
    setTodo("");
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input className="form__radio" type="checkbox" onClick={onClickHandler} />
      <input
        className="form__input"
        name="todo"
        value={todo}
        onChange={onChangeHandler}
        type="text"
        placeholder="Create a new todo..."
        required
      ></input>
    </form>
  );
}
