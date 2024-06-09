"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product) {
      const checkProduct = cart.findIndex(
        (item) => item.product.id == product.product.id
      );
      if (checkProduct !== -1) {
        const cartCopy = [...cart];
        cartCopy[checkProduct].qty += 1;
        setCart(cartCopy);
      } else {
        setCart([...cart, product]);
        toast.success("Addedd to cart successfully");
      }
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("remove from cart successfully");
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
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
