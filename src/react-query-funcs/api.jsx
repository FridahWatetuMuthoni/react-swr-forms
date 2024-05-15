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
  const response = await axiosInstance.post(`add/`, product);
  return response.data;
};

const updateProduct = async (id) => {
  const response = await axiosInstance.put(`${id}`);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(`${id}`);
  return response.data;
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
