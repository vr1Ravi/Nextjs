import NewTodoForm from "@/app/components/NewTodoForm";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>TodoLayout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DocsLayout;
