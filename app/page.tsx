import AddTodo from '@/components/add-todo';
import Todos from '@/components/todos';

const page = () => {
  return (
    <main>
      <h2>TODO NEXT + TYPESCRIPT</h2>
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
