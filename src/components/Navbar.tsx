import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useLoginContext } from "../context/LoginContext";
import { useRef, useState } from "react";
import UserMenu from "./UserMenu";

function Navbar() {
  const { cartQty } = useCartContext();
  const { isLogin } = useLoginContext();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);


  return (
    <div className="px-15 py-5 grid grid-cols-3 items-center border-b border-b-slate-200">
      <div className="">
        <img src="/assets/logo-black.svg" />
      </div>
      <nav className="flex">
        <ul className="flex gap-4">
          <li className="hover:text-slate-600 cursor-pointer transition duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-slate-600 cursor-pointer transition duration-100">
            <Link to="/all-products">All Products</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-3.5 justify-end relative">
        {isLogin ? (
          <div
            className="cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
            ref={menuRef}
          >
            <UserIcon className="size-5" />
            {openMenu && (
              <UserMenu openMenu={openMenu} setOpenMenu={setOpenMenu} menuRef={menuRef} />
            )}
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="border border-gray-300 px-5 py-1 text-sm rounded-2xl cursor-pointer hover:bg-slate-100 duration-200">
              Login
            </button>
          </Link>
        )}
        <Link to={"/cart"}>
          <span className="flex justify-center items-center w-5 h-5 rounded-full bg-red-600 text-xs text-white absolute -top-1 -right-3">
            {cartQty}
          </span>
          <ShoppingBagIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
