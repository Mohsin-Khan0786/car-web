import React from "react";
import Products from "@/components/shared/List.js";
import "@/components/styles/card.css";

const Card = () => {
  return (
    <>
      <div className="product-list">
        {Products.map((product, i) => (
          <div className="product-card" key={i}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
