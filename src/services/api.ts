import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getLatestProducts() {
  const { data } = await client("/products/?limit=12");
  return data;
}

export async function getAllProducts() {
  const { data } = await client("/products");
  return data;
}

export async function getProduct(id: number | string) {
  const { data } = await client(`/products/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/auth/login",
    data: {
      username,
      password,
    },
  });
  return data;
}
