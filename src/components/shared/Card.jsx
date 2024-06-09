"use client";

import React from "react";
import "@/components/styles/card.css";
import Link from "next/link";

const Card = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </Link>
      <button onClick={() => addToCart({ product, qty: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
