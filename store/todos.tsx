import { createContext, ReactNode, useState } from "react";

export const todosContext = createContext(null);

export const TodosProvider = (children: {children:ReactNode}) => {

    const [todos, setTodos] = useState();

    const handleAddTodo = (task: string) => {

        setTodos((prev) => {
            const newTodos = {
                id: Math.random().toString(),
                task,
                complete: false,
                createdAt: new Date()
            }
        })

    }
}
