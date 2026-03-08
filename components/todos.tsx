"use client";

import { useTodos } from "@/store/todos";



const Todos = () => {

    const { todos } = useTodos()
    console.log(todos)

    let filterTodos =  todos;

  return (
    <ul>
        
    {
        filterTodos.map((todo) => {
            return <li key={todo.id}>
                    
                    <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />
                    
                    <label htmlFor="{`todo-${todo.id}`}"></label>

                </li>
        })
    }

    </ul>
  )
}

export default Todos
