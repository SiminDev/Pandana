import { StarIcon } from "@heroicons/react/16/solid";
import { Product } from "../../types/server";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductItem({ title, image, price, rating, id }: Product) {
  return (
    <div className="w-46 md:w-58 lg:w-full flex-shrink-0 bg-white p-5 shadow-xl shadow-gray-100 rounded-2xl border border-slate-100">
      <div className="rounded-2xl flex justify-center overflow-hidden">
        <Link to={`/product/${id}`}>
          <LazyLoadImage
            className="h-48 md:h-72 object-contain scale-85 hover:scale-100 transition duration-300"
            src={image}
            alt={`Product image of ${title}`}
          />
        </Link>
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
    </div>
  );
}

export default ProductItem;
