import { StarIcon } from "@heroicons/react/16/solid";
import { Product } from "../../types/server";

function ProductItem({ title, image, price, rating }: Product) {
  return (
    <div className="bg-white p-5 shadow-xl shadow-gray-100 rounded-2xl border border-slate-100">
      <div className=" rounded-2xl flex justify-center">
        <img className="h-72 object-contain" src={image} />
      </div>
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
        <button className="bg-black text-white w-full py-2 rounded-lg">
          + Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
