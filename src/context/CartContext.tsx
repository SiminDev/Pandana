import React, { createContext, useContext, useState } from "react";

interface CartContextProvider {
  children: React.ReactNode;
}

interface CartContext {
  cartItems : []
}

interface CartItem {
  id : number,
  qty: number
}

export const CartContext = createContext({} as CartContext);
export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  

  return <CartContext.Provider value={{cartItems}}>{children}</CartContext.Provider>;
}
