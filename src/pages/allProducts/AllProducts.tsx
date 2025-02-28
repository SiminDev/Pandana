import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { Product } from "../../types/server";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
    });
  });
  return (
    <div className="px-15 py-20">
      <div className=" grid grid-cols-4 gap-10">
        {products.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
