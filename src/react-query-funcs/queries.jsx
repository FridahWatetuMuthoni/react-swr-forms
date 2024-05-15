import { useQuery } from "@tanstack/react-query";
import { getProducts, getProduct } from "./api";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

const useProduct = (id) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });
};

export { useProducts, useProduct };
