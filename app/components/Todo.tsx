export type todoType = {
  id: string;
  content: string;
};

const Todo = ({ todo }: { todo: todoType }) => {
  return <div>{todo.content}</div>;
};

export default Todo;
