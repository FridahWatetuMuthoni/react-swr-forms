import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
