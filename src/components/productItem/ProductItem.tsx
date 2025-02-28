import { StarIcon } from "@heroicons/react/16/solid";
import { Product } from "../../types/server";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function ProductItem({ title, image, price, rating, id }: Product) {
  const { getProductQty, handleIncreaseQty, handleDecreaseQty } =
    useCartContext();

  return (
    <div className="bg-white p-5 shadow-xl shadow-gray-100 rounded-2xl border border-slate-100">
      <Link to={`/product/${id}`}>
        <div className=" rounded-2xl flex justify-center">
          <img className="h-72 object-contain" src={image} />
        </div>
      </Link>
      <div className="mt-3 flex flex-col gap-1.5">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
          {title}
        </h3>
        <div className="flex gap-1">
          <StarIcon className="size-5 text-amber-400" />
          <span className="text-sm text-gray-700">{rating.rate}</span>
        </div>
        <p className="text-gray-500 font-semibold">${price}</p>
      </div>
      <div className="mt-2.5">
        {getProductQty(id) == 0 ? (
          <button
            className="bg-purple-800 text-white w-full py-2 rounded-lg"
            onClick={() => handleIncreaseQty(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex gap-2.5 justify-center">
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
        )}
      </div>
    </div>
  );
}

export default ProductItem;
