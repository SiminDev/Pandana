import CartItem from "../../components/cartItem/CartItem";
import { useCartContext } from "../../context/cartContext";

export default function Cart() {
  const { cartItems } = useCartContext();
  return (
    <div className="px-15 py-20">
      <h2 className="text-2xl mb-12 font-light text-gray-600 tracking-wide">
        Shopping Cart
      </h2>
      <div className="flex flex-col gap-2.5">
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
}
