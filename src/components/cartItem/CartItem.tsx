import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Product } from "../../types/server";
import { useCartContext } from "../../context/CartContext";
import { getProduct } from "../../services/api";
import { Link } from "react-router-dom";
import IncreaseDecreaseButton from "../IncreaseDecreaseButton";

interface CartItem {
  id: number;
  qty: number;
  price: number;
}

export default function CartItem({ id, qty, price }: CartItem) {
  const [product, setProduct] = useState<Product>();

  const { handleRemoveProduct } = useCartContext();

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 justify-items-center items-center rounded-2xl py-4 border-gray-300 bg-slate-50 relative">
      <Link to={`/product/${id}`}>
        <div className="w-16 md:w-20 h-24 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
          <img className="w-full cursor-pointer" src={product?.image} />
        </div>
      </Link>

      <p className="lg:col-span-2 text-sm justify-self-start text-gray-800">
        {product?.title}
      </p>

      <IncreaseDecreaseButton id={id} qty={qty} price={price} />

      <p className="font-medium text-gray-700">${(price * qty).toFixed(2)}</p>

      <button
        className="hidden md:flex justify-center align-middle gap-2 text-gray-500 text-sm cursor-pointer hover:text-rose-800 transition duration-100"
        onClick={() => handleRemoveProduct(id)}
      >
        <TrashIcon className="size-5" /> Delete
      </button>
      
      <button
        className="absolute left-2 top-2 md:hidden cursor-pointer hover:text-rose-800 transition duration-100"
        onClick={() => handleRemoveProduct(id)}
      >
        <XMarkIcon className="size-4 text-gray-500" />
      </button>
    </div>
  );
}
