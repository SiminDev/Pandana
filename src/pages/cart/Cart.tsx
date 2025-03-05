import CartItem from "../../components/cartItem/CartItem";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, cartTotalPrice } = useCartContext();
  return (
    <div className="px-5 py-5 lg:px-15 lg:py-20 lg:min-h-105">
      <h2 className="text-md lg:text-lg mb-5 lg:mb-12 font-medium text-gray-600">Shopping Cart</h2>
      {cartItems.length ? (
        <div className="flex flex-col gap-2.5">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {cartTotalPrice ? (
            <div className="flex justify-end p-8">
              <p className="text-gray-700 font-medium">
                Total Price: ${cartTotalPrice.toFixed(2)}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex p-3 bg-slate-100 rounded-lg">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}
