import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Product } from "../../types/server";
import { useCartContext } from "../../context/cartContext";
import { getProduct } from "../../services/api";

interface CartItem {
  id: number;
  qty: number;
  price: number
}

export default function CartItem({ id, qty, price }: CartItem) {
  const [product, setProduct] = useState<Product>();

  const {
    handleIncreaseQty,
    handleDecreaseQty,
    handleRemoveProduct,
  } = useCartContext();

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div className="grid grid-cols-6 justify-items-center items-center rounded-2xl py-4 border-gray-300 bg-slate-50">
      <div className="w-20 h-24 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
        <img className="w-full" src={product?.image} />
      </div>
      <p className="col-span-2 text-sm justify-self-start text-gray-800">
        {product?.title}
      </p>
      <div className="flex gap-2.5">
        <button
          className="border border-gray-300 w-7 h-7 rounded-lg cursor-pointer"
          onClick={() => handleDecreaseQty(id)}
        >
          -
        </button>
        <span>{qty}</span>
        <button
          className="border border-gray-300 w-7 h-7 rounded-lg cursor-pointer"
          onClick={() => handleIncreaseQty(id,parseFloat(price))}
        >
          +
        </button>
      </div>
      <p className=" font-medium text-gray-700">${(price*qty).toFixed(2)}</p>
      <button
        className="flex justify-center align-middle gap-2 text-gray-500 text-sm cursor-pointer hover:text-rose-800 transition duration-100"
        onClick={() => handleRemoveProduct(id)}
      >
        <TrashIcon className="size-5" /> Delete
      </button>
    </div>
  );
}
