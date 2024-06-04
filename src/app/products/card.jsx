import React from "react";
import Products from "@/app/products/ProductList";
import "@/components/styles/card.css";

const Card = () => {
  return (
    <>
      <div className="product-list">
        {Object.keys(Products).map((key) => {
          const product = Products[key];
          return (
            <div className="product-card" key={key}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
