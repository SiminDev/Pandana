import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getLatestProducts() {
  const { data } = await client("/products?limit=12");
  return data;
}
