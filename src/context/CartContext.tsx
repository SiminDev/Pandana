import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getProduct } from "../services/api";

interface CartContextProps {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
  price: number | null;
}

interface CartContext {
  cartItems: CartItem[];
  handleIncreaseQty: (id: number) => void;
  handleDecreaseQty: (id: number) => void;
  getProductQty: (id: number) => number;
  removeFromCart: (id: number) => void;
  cartTotalPrice: () => number;
  cartQty: number;
}

export const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  const cartQty = cartItems.reduce((totalQty, item) => {
    return (totalQty += item.qty);
  }, 0);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const cartTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (item.price !== null) {
        return total + item.price * item.qty;
      }
      return total;
    }, 0).toFixed(2);
  };

  const handleIncreaseQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        getProduct(id).then((res) => {
          setCartItems([...currentItems, { id: id, qty: 1, price: res.price }]);
        });
        return currentItems;
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

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleIncreaseQty,
        handleDecreaseQty,
        removeFromCart,
        cartQty,
        getProductQty,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
