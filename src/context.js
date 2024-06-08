"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

const name = "eioldabc"

  const addToCart = (product) => {
    if (product) {
      setCart([...cart, product]);
      toast.success("Addedd to cart successfully");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("remove from cart successfully");
  };

  console.log(cart)

  return (
    <CartContext.Provider
      value={{
        name,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook

export const useStore = () => {
  return useContext(CartContext);
};
