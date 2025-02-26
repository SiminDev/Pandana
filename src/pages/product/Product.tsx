import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { Product as IProduct } from "../../types/server";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/16/solid";
import { useCartContext } from "../../context/cartContext";

function Product() {
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>();

  const { getProductQty, handleDecreaseQty, handleIncreaseQty } =
    useCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((res) => {
      setProduct(res);
    });
  }, []);
  return (
    <div className="bg-slate-50 px-15 py-20">
      <div className="grid grid-cols-2 gap-10">
        <div className="p-10 rounded-2xl bg-white flex justify-center align-middle min-h-120">
          <img className="w-2/3 object-contain" src={product?.image} />
        </div>
        <div className="p-10 rounded-2xl bg-white flex flex-col justify-between">
          <div className="">
            <h3 className="text-2xl font-semibold text-slate-600 mb-10">
              {product?.title}
            </h3>
            <p className="text-gray-600 text-base/7 mb-4">
              {product?.description}
            </p>
            <div className="flex gap-1 mb-5">
              <StarIcon className="size-5 text-amber-400" />
              <span className="text-base text-slate-700 font-semibold">
                {product?.rating.rate}
              </span>
            </div>
            <div className="text-2xl text-slate-600 font-semibold">
              ${product?.price}
            </div>
          </div>
          <div className="mt-10">
            {getProductQty(parseInt(params.id as string)) == 0 ? (
              <button
                className="bg-green-700 text-white w-full py-2 rounded-lg"
                onClick={() => handleIncreaseQty(parseInt(params.id as string))}
              >
                + Add To Cart
              </button>
            ) : (
              <div className="flex gap-2.5 justify-center">
                <button
                  className="border border-gray-300 w-7 h-7 rounded-lg"
                  onClick={() =>
                    handleDecreaseQty(parseInt(params.id as string))
                  }
                >
                  -
                </button>
                <span>{getProductQty(parseInt(params.id as string))}</span>
                <button
                  className="border border-gray-300 w-7 h-7 rounded-lg"
                  onClick={() =>
                    handleIncreaseQty(parseInt(params.id as string))
                  }
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
