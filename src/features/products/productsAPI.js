import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/product");
  return data.data;
};
export const postProducts = async (product) => {
  await axios.post("/product", product);
};
