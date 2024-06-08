"use client";

import Card from "@/components/shared/Card";
import Products from "@/components/shared/List";
import { useStore } from "@/context";
import React from "react";

const Product = () => {
  const { addToCart } = useStore();

  return (
    <div className="product-list">
      {Products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Product;
