import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

function Navbar() {
  const { cartQty } = useCartContext();
  return (
    <div className="px-15 py-5 grid grid-cols-3 items-center border-b border-b-slate-200">
      <div className="">
        <img src="/assets/logo-black.svg" />
      </div>
      <nav className="flex">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end relative">
        <Link to={"/cart"}>
          <span className="flex justify-center items-center w-5 h-5 rounded-full bg-red-600 text-xs text-white absolute -top-2 -right-3">
            {cartQty}
          </span>
          <ShoppingBagIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
