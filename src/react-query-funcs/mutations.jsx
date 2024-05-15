import { useMutation } from "@tanstack/react-query";
import { createProduct } from "./api";

const useCreateProduct = () => {
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
    onSettled: () => {
      console.log("settled");
    },
  });
};

export { useCreateProduct };
