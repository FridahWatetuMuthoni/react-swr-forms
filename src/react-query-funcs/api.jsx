import axiosInstance from "./axiosInstance";

const getProducts = async () => {
  const response = await axiosInstance.get("/");
  return response.data.products;
};

const getProduct = async (id) => {
  const response = await axiosInstance.get(`${id}`);
  return response.data;
};

const createProduct = async (product) => {
  const response = await axiosInstance.post(`add`, product);
  console.log(response);
  return response.data;
};

const updateProduct = async (data) => {
  const response = await axiosInstance.put(`${data.id}`, data);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(`${id}`);
  return response.data;
};

const addTodo = async (data) => {
  console.log(data);
};

const getProjects = async (page = 1) => {
  const skip = page === 1 ? 0 : (page - 1) * 10;
  const response = await axiosInstance.get(`?skip=${skip}&limit=10`);
  return response.data;
};
const getMore = async ({ pageParam }) => {
  let items = pageParam * 10;
  console.log(pageParam);
  console.log(items);
  const response = await axiosInstance.get(`?limit=${items}`);
  return response.data;
};

export {
  getProducts,
  getProduct,
  createProduct,
  getMore,
  updateProduct,
  deleteProduct,
  addTodo,
  getProjects,
};
