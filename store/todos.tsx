import { createContext, ReactNode, useState } from "react";

type Todo = {
    id: string;
    task:string;
    completed: boolean;
    createdAt: Date;
}

export const todosContext = createContext(null);

export const TodosProvider = (children: {children:ReactNode}) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (task: string) => {

        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                id: Math.random().toString(),
                task,
                complete: false,
                createdAt: new Date()
            },
            ...prev
        ]}
    )
        return newTodos;

    }

    return (
        <todosContext.Provider value={{todos, handleAddTodo}}>
            {children}
        </todosContext.Provider>
    )
}
