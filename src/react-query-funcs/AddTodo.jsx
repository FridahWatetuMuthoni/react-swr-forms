import { useCreateTodo } from "./mutations";
import { useForm } from "react-hook-form";

function AddTodo() {
  const createNewTodo = useCreateTodo();
  const { register, handleSubmit } = useForm();

  const handleCreateTodoSubmit = (data) => {
    createNewTodo.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateTodoSubmit)}
      className="flex flex-col gap-3 w-1/2 mx-auto shadow-2xl p-5 rounded-md "
    >
      <input
        type="text"
        name="title"
        id="title"
        {...register("title")}
        placeholder="Enter the title ..."
        className="p-2 rounded-md text-indigo-950 "
      />
      <input
        type="text"
        name="description"
        id="description"
        {...register("description")}
        placeholder="Enter the description ..."
        className="p-2 rounded-md text-indigo-950"
      />
      <button
        disabled={createNewTodo.isPending}
        className=" ring-1  rounded-full py-1 px-1 text-sm focus:outline-none ring-slate-200  hover:text-muted hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
        type="submit"
      >
        {createNewTodo.isPending ? "Creating Todo ..." : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
