import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function CartButton() {
  const { cartQty } = useCartContext();
  return (
    <Link to={"/cart"}>
      <span className="flex justify-center items-center w-5 h-5 rounded-full bg-red-600 text-xs text-white absolute -top-1 -right-3">
        {cartQty}
      </span>
      <ShoppingBagIcon className="size-5" />
    </Link>
  );
}

export default CartButton;
