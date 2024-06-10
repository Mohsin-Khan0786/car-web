"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Retrieve initial cart from localStorage if available
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (product) {
      const checkProduct = cart.findIndex(
        (item) => item.product.id === product.product.id
      );
      if (checkProduct !== -1) {
        const cartCopy = [...cart];
        cartCopy[checkProduct].qty += 1;
        setCart(cartCopy);
      } else {
        setCart([...cart, product]);
        toast.success("Added to cart successfully");
      }
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

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
