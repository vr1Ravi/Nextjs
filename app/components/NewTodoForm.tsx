import { newTodo } from "@/utils/actions";
const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-black opacity-25"
        />
        <button type="submit">new Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
