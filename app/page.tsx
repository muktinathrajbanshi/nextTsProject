import AddTodo from '@/components/add-todo';
import Navbar from '@/components/navbar';
import Todos from '@/components/todos';
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";


const page = () => {
  return (
    <main>
      <h2><RiTodoLine /> TODO NEXT + TYPESCRIPT <RiTodoLine /></h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
