import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartContextProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
  price: number;
}

interface CartContext {
  cartItems: CartItem[];
  handleIncreaseQty: (id: number, price: number) => void;
  handleDecreaseQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  cartTotalPrice: number;
}

export const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseQty = (id: number, price: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1, price: price }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const cartQty = cartItems.reduce((totalQty, item) => {
    return (totalQty += item.qty);
  }, 0);

  const cartTotalPrice = cartItems.reduce((totalPrice, item) => {
    console.log(item.price, item.qty)
    return (totalPrice + (item.price * item.qty));
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleIncreaseQty,
        handleDecreaseQty,
        handleRemoveProduct,
        cartQty,
        getProductQty,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
