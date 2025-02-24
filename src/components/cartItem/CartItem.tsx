import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Product } from "../../types/server";
import { useCartContext } from "../../context/cartContext";
import { getProduct } from "../../services/api";

interface CartItem {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: CartItem) {
  const [product, setProduct] = useState<Product>();

  const { handleIncreaseQty, handleDecreaseQty, getProductQty, handleRemoveProduct } =
    useCartContext();

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div className="grid grid-cols-6 justify-items-center items-center border-b py-4 border-gray-300">
      <img className="rounded-2xl h-52" src={product?.image} />
      <p className="col-span-2 text-gray-800 font-medium">{product?.title}</p>
      <div className="flex gap-2.5">
        <button
          className="border border-gray-300 w-7 h-7 rounded-lg"
          onClick={() => handleDecreaseQty(id)}
        >
          -
        </button>
        <span>{getProductQty(id)}</span>
        <button
          className="border border-gray-300 w-7 h-7 rounded-lg"
          onClick={() => handleIncreaseQty(id)}
        >
          +
        </button>
      </div>
      <p className="font-medium text-gray-700">${product?.price}</p>
      <button className="flex justify-center align-middle gap-2 text-gray-500" onClick={() => handleRemoveProduct(id)}>
        <TrashIcon className="size-5" /> Delete
      </button>
    </div>
  );
}
