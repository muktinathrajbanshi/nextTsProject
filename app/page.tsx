import AddTodo from '@/components/add-todo';
import Navbar from '@/components/navbar';
import Todos from '@/components/todos';
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";


const page = () => {
  return (
    <main>
      <div className="app-container">
      <h2><RiTodoLine className="icons" /> TODO NEXT + TYPESCRIPT <RiTodoLine className="icons" /></h2>
      <Navbar />
      <AddTodo />
      <Todos />
      </div>
    </main>
  );
};

export default page;
