import CartItem from "../../components/cartItem/CartItem";
import { useCartContext } from "../../context/cartContext";

export default function Cart() {
  const { cartItems, cartTotalPrice } = useCartContext();
  console.log("cart", cartItems);
  return (
    <div className="px-15 py-20 min-h-105">
      <h2 className="text-lg mb-12 font-medium text-gray-600">Shopping Cart</h2>
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
