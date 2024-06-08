"use client";

import React from "react";
import "@/components/styles/card.css";
import Link from "next/link";

const CartCard = ({ product, removeFromCart }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </Link>
      <button onClick={() => removeFromCart(product.id)}>remove</button>
    </div>
  );
};

export default CartCard;
