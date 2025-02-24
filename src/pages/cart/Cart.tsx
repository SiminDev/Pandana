import CartItem from "../../components/cartItem/CartItem";
import { useCartContext } from "../../context/cartContext";

export default function Cart() {
  const { cartItems } = useCartContext();
  return (
    <div className="px-10 py-10 bg-slate-100">
      <h2 className="text-2xl mb-12 font-light text-gray-600 tracking-wide">
        Shopping Cart
      </h2>
      <div className=" bg-white shadow-xl shadow-gray-200 rounded-2xl p-5">
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
}
