"use client";

import { useTodos } from "@/store/todos";



const Todos = () => {

    const { todos } = useTodos()
    console.log(todos)

  return (
    <ul>
        
    </ul>
  )
}

export default Todos
