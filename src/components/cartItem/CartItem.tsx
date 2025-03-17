import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Product } from "../../types/server";
import { useCartContext } from "../../context/CartContext";
import { getProduct } from "../../services/api";
import { Link } from "react-router-dom";
import IncreaseDecreaseButton from "../IncreaseDecreaseButton";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CartItem {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: CartItem) {
  const [product, setProduct] = useState<Product | null>(null);

  const { removeFromCart } = useCartContext();

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 lg:justify-items-center items-center rounded-2xl px-10 py-5 lg:py-4 border-gray-300 bg-slate-50 relative">
      <Link to={`/product/${id}`}>
        <div className="w-16 md:w-20 h-24 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
          <LazyLoadImage
            className="w-full cursor-pointer"
            src={product?.image}
            alt={`Product image of ${product?.title}`}
          />
        </div>
      </Link>

      <p className="lg:col-span-2 text-sm justify-self-start text-gray-800">
        {product?.title}
      </p>

      <IncreaseDecreaseButton id={id} qty={qty} />

      <p className="font-medium text-gray-700">
        ${((product?.price ?? 0) * qty).toFixed(2)}
      </p>

      <button
        className="hidden lg:flex justify-center align-middle gap-2 text-gray-500 text-sm cursor-pointer hover:text-rose-800 transition duration-100"
        onClick={() => removeFromCart(id)}
      >
        <TrashIcon className="size-5" /> Delete
      </button>

      <button
        className="absolute left-2 top-2 lg:hidden cursor-pointer hover:text-rose-800 transition duration-100"
        onClick={() => removeFromCart(id)}
      >
        <XMarkIcon className="size-4 text-gray-500" />
      </button>
    </div>
  );
}
