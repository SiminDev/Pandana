import ProductItem from "../../components/productItem/ProductItem";
import Slider from "../../components/Slider";

function Home() {
  return (
    <>
      <div className="flex px-10 py-10 bg-slate-100">
        <Slider />
      </div>
      <section className="px-10 py-10">
        <h2 className="text-2xl mb-8 font-light text-gray-600">Latest products</h2>
      <div className=" grid grid-cols-4 gap-8">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      </section>
    </>
  );
}

export default Home;
