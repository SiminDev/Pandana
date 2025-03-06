import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { Product } from "../../types/server";
import ProductItem from "../../components/productItem/ProductItem";

function AllProducts() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
    });
  });
  
  return (
    <div className="px-5 py-10 lg:px-15 lg:py-20">
      <div className="flex flex-wrap gap-3 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-10">
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
