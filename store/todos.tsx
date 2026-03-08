"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type Todo = {
    id: string;
    task:string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void; // call signature
    toggleTodoAsCompleted : (id: string) => void;
    handleTodoDelete: (id:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children}: {children:ReactNode}) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (task: string) => {

        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt: new Date()
            },
            ...prev
        ]
        
        return newTodos;
        });

    }

    // if the task is completed 

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if(task.id === id) {
                    return {...task, completed : !task.completed}
                }
                return task;
            })
            return newTodos;
        })
    }

    // if the task is deleted 
    
    const handleTodoDelete = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            return newTodos;
        })
    }

    return (
        <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete }}>
            {children}
        </todosContext.Provider>
    )
}

// context api

export function useTodos() {
    const todosContextValue = useContext(todosContext)
    if(!todosContextValue) {
        throw new Error("UseTodos used outside of Provider")
    }
    return todosContextValue;
}
