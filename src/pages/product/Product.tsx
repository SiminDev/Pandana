import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { Product as IProduct } from "../../types/server";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct(params.id as string).then((res) => {
      setProduct(res);
    });
  }, []);
  return (
    <div className="bg-slate-100 px-10 py-20">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 p-10 rounded-2xl bg-white flex justify-center align-middle">
          <img className="w-2/3 object-contain" src={product?.image} />
        </div>
        <div className="col-span-1 p-10 rounded-2xl bg-white">
          <h3 className=" text-3xl text-slate-600 mb-10">{product?.title}</h3>
          <p className="text-gray-600 text-base/7">{product?.description}</p>
          <span className="text-2xl text-green-700 font-semibold mt-8 block">
            ${product?.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
