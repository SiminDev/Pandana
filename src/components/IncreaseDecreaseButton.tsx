import { useCartContext } from "../context/CartContext";

interface ProductQty {
  id: number;
  qty: number;
  price: number
}

function IncreaseDecreaseButton({id, qty, price} : ProductQty) {
  const { handleIncreaseQty, handleDecreaseQty } = useCartContext();
  return (
    <div className="flex gap-2 md:gap-2.5">
      <button
        className="border border-gray-300 w-6 h-6 md:w-7 md:h-7 rounded-md md:rounded-lg cursor-pointer flex justify-center items-center"
        onClick={() => handleDecreaseQty(id)}
      >
        -
      </button>
      <span>{qty}</span>
      <button
        className="border border-gray-300 w-6 h-6 md:w-7 md:h-7 rounded-md md:rounded-lg cursor-pointer flex justify-center items-center"
        onClick={() => handleIncreaseQty(id, parseFloat(price))}
      >
        +
      </button>
    </div>
  );
}

export default IncreaseDecreaseButton;
