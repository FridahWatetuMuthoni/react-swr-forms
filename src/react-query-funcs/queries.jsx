import {
  useQuery,
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getProducts, getProduct, getProjects, getMore } from "./api";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProduct(id),
  });
};

const useProjects = (page) => {
  return useQuery({
    queryKey: ["page_projects", { page }],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData, //keeps previous data until the new data is loaded
  });
};

const useMore = (page) => {
  return useInfiniteQuery({
    queryKey: ["scroll_projects", { page }],
    queryFn: getMore,
    initialPageParam: 1,
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
};

export { useProducts, useProduct, useProjects, useMore };
