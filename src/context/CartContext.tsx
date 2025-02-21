import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartContextProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface CartContext {
  cartItems: CartItem[];
  handleIncreaseQty : (id: number)=> void
}


export const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: CartContextProvider) {

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cartItems', []);

  const handleIncreaseQty = (id: number) => {
    setCartItems((currentItems: any[]) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        return [currentItems, { id: id, qty: 1 }];
      } else {
        currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  

  return (
    <CartContext.Provider value={{ cartItems, handleIncreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}
