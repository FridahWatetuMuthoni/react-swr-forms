import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, addTodo, updateProduct, deleteProduct } from "./api";

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createProduct(data),
    onMutate: () => {
      console.log("mutate");
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      console.log("success");
    },
    onSettled: async ({ data, error, variables }) => {
      console.log(data);
      console.log(variables);

      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
};

const useCreateTodo = () => {
  return useMutation({
    mutationFn: (data) => addTodo(data),
  });
};

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateProduct(data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["products"] });
        await queryClient.invalidateQueries({
          queryKey: ["product", { id: variables.id }],
        });
      }
    },
  });
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
};

export { useCreateProduct, useCreateTodo, useUpdateProduct, useDeleteProduct };
