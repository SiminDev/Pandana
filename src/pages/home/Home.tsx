import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Slider from "../../components/Slider";
import { getLatestProducts } from "../../services/api";
import { Product } from "../../types/server";

function Home() {

  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getLatestProducts().then((res)=> {
      setProducts(res)
    })
  })
  return (
    <>
      <div className="flex px-10 py-10 bg-slate-100">
        <Slider />
      </div>
      <section className="px-10 py-10">
        <h2 className="text-2xl mb-8 font-light text-gray-600 tracking-wide">
          Newest Arrivals
        </h2>
        <div className=" grid grid-cols-4 gap-8">
          
          {products.map((item) => (
            <ProductItem {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
