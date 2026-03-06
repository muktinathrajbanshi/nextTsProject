"use client";

import { useState } from "react";

const AddTodo = () => {

    const [todo, setTodo] = useState("")

  return (
    <form>
      <input type="text" name="" id="" placeholder="Write your todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit"> ADD </button>
    </form>
  );
};

export default AddTodo;
