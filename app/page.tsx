import { Suspense } from "react";
import AddTodo from '@/components/add-todo';
import Navbar from '@/components/navbar';
import Todos from '@/components/todos';
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";

const page = () => {
  return (
    <main>
      <div className="app-container">

        <h2>
          <RiTodoLine className="icons" />
          TODO NEXT + TYPESCRIPT
          <RiTodoLine className="icons" />
        </h2>

        <Suspense fallback={<p>Loading Navbar...</p>}>
          <Navbar />
        </Suspense>

        <Suspense fallback={<p>Loading AddTodo...</p>}>
          <AddTodo />
        </Suspense>

        <Suspense fallback={<p>Loading Todos...</p>}>
          <Todos />
        </Suspense>

      </div>
    </main>
  );
};

export default page;