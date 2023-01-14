import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/product");
  return data.data;
};
export const postProduct = async (product) => {
  await axios.post("/product", product);
};
export const deleteProduct = async (id) => {
  await axios.delete(`/product/${id}`);
};
