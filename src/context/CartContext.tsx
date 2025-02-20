import React, { createContext, useContext, useState } from "react";

interface CartContextProvider {
  children: React.ReactNode;
}

interface CartContext {
  cartItems: [];
  handleIncreaseQty : (id: number)=> void
}

interface CartItem {
  id: number;
  qty: number;
}

export const CartContext = createContext({} as CartContext);
export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleIncreaseQty = (id: number) => {
    setCartItems((currentItems) => {
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
