"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
<<<<<<< HEAD
  const [cart, setCart] = useState(() => {
    // Retrieve initial cart from localStorage if available
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const name = "eioldabc";

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (product) {
      setCart((prevCart) => [...prevCart, product]);
      toast.success("Added to cart successfully");
=======
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
>>>>>>> 145284ee5c629901067f0aa0638869e70753cb6c
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.success("Removed from cart successfully");
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
