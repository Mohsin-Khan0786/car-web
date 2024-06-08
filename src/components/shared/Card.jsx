"use client";

import React from "react";
import Products from "@/components/shared/List.js";
import "@/components/styles/card.css";
import Link from "next/link";

const Card = () => {
  const AddProduct = (item) => {
    alert(item.id);
  };

  return (
    <div className="product-list">
      {Products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link href={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </Link>
          <button onClick={() => AddProduct(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
