"use client";

import CartCard from "@/components/shared/CartCard";
import { useStore } from "@/context";
import React from "react";

const Cart = () => {
  const { cart, removeFromCart } = useStore();

  return (
    <div className="product-list">
      {cart.length == 0
        ? "No products in cart"
        : cart.map((product) => (
            <CartCard
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
    </div>
  );
};

export default Cart;
