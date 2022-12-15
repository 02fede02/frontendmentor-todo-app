import { createContext, useEffect, useState } from "react";
import { getStorage } from "../utils/LocalStorage";

export const TodoContext = createContext({
    todoList:  [],
    setTodoList: () => {},
    todoIncomplete: [],
    setTodoIncomplete: () => {},
    todoComplete: [],
    setTodoComplete: () => {},
    todoDisplay: "",
    setTodoDisplay: () => {}
})

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(getStorage("todo") || [])
    const [todoIncomplete, setTodoIncomplete] = useState([])
    const [todoComplete, setTodoComplete] = useState([])
    const [todoDisplay, setTodoDisplay] = useState("all")

    useEffect(() => {
        const todosIncomplete = todoList.filter((todo) => todo.complete === false)
        setTodoIncomplete([
            ...todosIncomplete
        ])
    }, [todoList]);

    useEffect(() => {
        const todosComplete = todoList.filter((todo) => todo.complete === true)
        setTodoComplete([
            ...todosComplete
        ])
    }, [todoList]);

    const value = { todoList, setTodoList, todoIncomplete, setTodoIncomplete, todoComplete, setTodoComplete, todoDisplay, setTodoDisplay }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}