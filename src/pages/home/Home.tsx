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
      <div className="flex px-15 py-10 bg-slate-100">
        <Slider />
      </div>
      <section className="px-15 py-20">
        <h2 className="text-2xl mb-12 font-light text-gray-600 tracking-wide">
          Newest Arrivals
        </h2>
        <div className="grid grid-cols-4 gap-10">
          {products.map((item) => (
              <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
