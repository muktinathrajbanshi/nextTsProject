import AddTodo from '@/components/add-todo';
import Navbar from '@/components/navbar';
import Todos from '@/components/todos';

const page = () => {
  return (
    <main>
      <h2>TODO NEXT + TYPESCRIPT</h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
