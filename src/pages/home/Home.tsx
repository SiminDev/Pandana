import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Slider from "../../components/Slider";
import { getLatestProducts } from "../../services/api";
import { Product } from "../../types/server";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getLatestProducts().then((res) => {
      setProducts(res);
    });
  });
  return (
    <>
      <div className="flex px-5 py-5 lg:px-15 lg:py-10 bg-slate-100">
        <Slider />
      </div>
      <section className="px-5 py-10 lg:px-15 lg:py-20">
        <h2 className="text-lg lg:text-2xl mb-8 md:mb-12 font-light text-gray-600 tracking-wide">
          Newest Arrivals
        </h2>

        <div className="flex flex-nowrap lg:flex-wrap lg:grid lg:grid-cols-4 gap-4 lg:gap-10 overflow-x-auto whitespace-nowrap">
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
